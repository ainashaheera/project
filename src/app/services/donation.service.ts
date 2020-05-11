import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from '../modal/Donation';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService 
{
  private donations: Observable <Donation[]>;
  private donationCollection: AngularFirestoreCollection<Donation>;

  constructor
  (
    private afs: AngularFirestore
  ) 
  {
    //define collection
    this.donationCollection=this.afs.collection<Donation>('donations');
    //get collection data
    this.donations=this.donationCollection.snapshotChanges().pipe
    (
      map (actions =>
        {
          return actions.map (a =>
            {
              const data=a.payload.doc.data();
              const id=a.payload.doc.id;
              return { id, ...data };
            });
        })
    );
  }

  //getting all donation
  getDonations (): Observable<Donation[]>
  {
    return this.donations;
  }

  //getting single donation
  getDonation (id: string): Observable<Donation> 
  {
    return this.donationCollection.doc<Donation>(id).valueChanges().pipe(take(1),
        map(donation => 
        {
          donation.id = id;
          return donation;
        })
    );
  }

  //create new donation
  addDonation (donation: Donation): Promise<DocumentReference>
  {
    return this.donationCollection.add(donation);
  }
}
