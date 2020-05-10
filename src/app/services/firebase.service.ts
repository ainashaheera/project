import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../modal/Campaign';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService 
{
  private campaigns: Observable <Campaign[]>;
  private campaignCollection: AngularFirestoreCollection<Campaign>;

  constructor
  (
    private afs: AngularFirestore
  ) 
  {
    //define collection
    this.campaignCollection=this.afs.collection<Campaign>('campaigns');
    //get collection data
    this.campaigns=this.campaignCollection.snapshotChanges().pipe
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

  //getting all campaign
  getCampaigns (): Observable<Campaign[]>
  {
    return this.campaigns;
  }

  //getting single campaign
  getCampaign (id: string): Observable<Campaign> 
  {
    return this.campaignCollection.doc<Campaign>(id).valueChanges().pipe(take(1),
        map(campaign => 
        {
          campaign.id = id;
          return campaign;
        })
    );
  }

  //create new campaign
  addCampaign (campaign: Campaign): Promise<DocumentReference>
  {
    return this.campaignCollection.add(campaign);
  }

  //update campaign
  updateCampaign (campaign: Campaign): Promise<void>
  {
    return this.campaignCollection.doc(campaign.id).update(campaign);
  }

  //delete campaign
  deleteCampaign (id:string): Promise<void>
  {
    return this.campaignCollection.doc(id).delete();
  }
}
