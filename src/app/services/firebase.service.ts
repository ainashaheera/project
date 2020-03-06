import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../modal/Campaign';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
