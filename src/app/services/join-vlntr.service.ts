import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinVlntr } from '../modal/join-vlntr';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JoinVlntrService 
{
  private joinvlntrs: Observable <JoinVlntr[]>;
  private joinvlntrCollection: AngularFirestoreCollection<JoinVlntr>;

  constructor
  (
    private afs: AngularFirestore
  )
  {
    //define collection
    this.joinvlntrCollection=this.afs.collection<JoinVlntr>('joinvlntrs');
    //get collection data
    this.joinvlntrs=this.joinvlntrCollection.snapshotChanges().pipe
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

  //getting all joinvlntr
  getJoinVlntrs (): Observable<JoinVlntr[]>
  {
    return this.joinvlntrs;
  }

  //getting single joinvlntr
  getJoinVlntr (id: string): Observable<JoinVlntr> 
  {
    return this.joinvlntrCollection.doc<JoinVlntr>(id).valueChanges().pipe(take(1),
        map(joinvlntr => 
        {
          joinvlntr.id = id;
          return joinvlntr;
        })
    );
  }

  //create new joinvlntr
  addJoinVlntr (joinvlntr: JoinVlntr): Promise<DocumentReference>
  {
    return this.joinvlntrCollection.add(joinvlntr);
  }

  //update joinvlntr
  updateJoinVlntr (joinvlntr: JoinVlntr): Promise<void>
  {
    return this.joinvlntrCollection.doc(joinvlntr.id).update
    ({
      name: joinvlntr.name,
      email: joinvlntr.email,
      location: joinvlntr.location,
      phone: joinvlntr.phone,  
    })
  }

  //delete joinvlntr
  deleteJoinVlntr (id:string): Promise<void>
  {
    return this.joinvlntrCollection.doc(id).delete();
  }
}
