import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fundraiser } from '../modal/Fundraiser';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService 
{
  private fundraisers: Observable <Fundraiser[]>;
  private fundraiserCollection: AngularFirestoreCollection<Fundraiser>;

  constructor
  (
    private afs: AngularFirestore
  ) 
  {
    //define collection
    this.fundraiserCollection=this.afs.collection<Fundraiser>('fundraisers');
    //get collection data
    this.fundraisers=this.fundraiserCollection.snapshotChanges().pipe
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

  //getting all fundraiser
  getFundraisers (): Observable<Fundraiser[]>
  {
    return this.fundraisers;
  }

  //getting single fundraiser
  getFundraiser (id: string): Observable<Fundraiser> 
  {
    return this.fundraiserCollection.doc<Fundraiser>(id).valueChanges().pipe(take(1),
        map(fundraiser => 
        {
          fundraiser.id = id;
          return fundraiser;
        })
    );
  }

  //create new fundraiser
  addFundraiser (fundraiser: Fundraiser): Promise<DocumentReference>
  {
    return this.fundraiserCollection.add(fundraiser);
  }

  //update fundraiser
  updateFundraiser (fundraiser: Fundraiser): Promise<void>
  {
    return this.fundraiserCollection.doc(fundraiser.id).update
    ({
      title: fundraiser.title,
      story: fundraiser.story,
      goal: fundraiser.goal,
      periodS: fundraiser.periodS
    })
  }

  //delete fundraiser
  deleteFundraiser (id:string): Promise<void>
  {
    return this.fundraiserCollection.doc(id).delete();
  }
}
