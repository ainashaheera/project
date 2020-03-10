import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "./user";
import { Router } from "@angular/router";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable
({
    providedIn: 'root'
})

export class AuthenticationService
{
    userData: any;

    constructor
    (
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    )
    {
        this.ngFireAuth.authState.subscribe (user =>
            {
                if (user)
                {
                    this.userData=user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user'));
                }
                else
                {
                    localStorage.setItem('user', null);
                    JSON.parse(localStorage.getItem('user'));
                }
            })
    }

    //login with email/password
    SignIn (email, password)
    {
        return this.ngFireAuth.auth.signInWithEmailAndPassword (email, password)
    }

    //register with email/password
    RegisterUser (email, password)
    {
        return this.ngFireAuth.auth.createUserWithEmailAndPassword (email, password)
    }

    UpdateProfile ()
    {
        return this.ngFireAuth.auth.currentUser.updateProfile
        ({
            displayName: name,
            photoURL: ''
        })
        .then (() =>
        {
            console.log('DisplayName updated')
        })
        .catch (err => console.log(err))
    }

    //email verification when new user register
    SendVerificationMail ()
    {
        return this.ngFireAuth.auth.currentUser.sendEmailVerification()
        .then (() =>
        {
            this.router.navigate (['verify-email']);
        })
    }

    //recover password
    PasswordRecover (passwordResetEmail)
    {
        return this.ngFireAuth.auth.sendPasswordResetEmail (passwordResetEmail)
        .then (() =>
        {
            window.alert ('Password reset email has been sent, please check your inbox');
        })
        .catch ((error) =>
        {
            window.alert (error)
        })
    }

    //returns true when user is logged in
    get isLoggedIn (): boolean
    {
        const user = JSON.parse (localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true:false;
    }

    //returns true when user's email is verified
    get isEmailVerified (): boolean
    {
        const user = JSON.parse (localStorage.getItem('user'));
        return (user.emailVerified !== false) ? true:false;
    }

    //sign in with Gmail
    GoogleAuth ()
    {
        return this.AuthLogin (new auth.GoogleAuthProvider ());
    }

    //auth providers
    AuthLogin (provider)
    {
        return this.ngFireAuth.auth.signInWithPopup (provider)
        .then ((result) =>
        {
            this.ngZone.run(() =>
            {
                this.router.navigate (['dashboard']);
            })
            this.SetUserData (result.user);
        })
        .catch ((error) =>
        {
            window.alert (error)
        })
    }

    //store user in localStorage
    SetUserData (user)
    {
        const userRef: AngularFirestoreDocument <any> = this.afStore.doc('users/${user.uid}');
        const userData: User =
        {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        }
        return userRef.set (userData,
        {
            merge: true
        })
    }

    //sign out
    SignOut ()
    {
        return this.ngFireAuth.auth.signOut()
        .then (() =>
        {
            localStorage.removeItem ('user');
            this.router.navigate (['login']);
        })
    }
}