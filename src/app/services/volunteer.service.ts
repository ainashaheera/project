import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../modal/Volunteer';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService 
{
  private volunteers: Observable <Volunteer[]>;
  private volunteerCollection: AngularFirestoreCollection<Volunteer>;

  constructor
  (
    private afs: AngularFirestore
  ) 
  {
    //define collection
    this.volunteerCollection=this.afs.collection<Volunteer>('volunteers');
    //get collection data
    this.volunteers=this.volunteerCollection.snapshotChanges().pipe
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

  //getting all volunteer
  getVolunteers (): Observable<Volunteer[]>
  {
    return this.volunteers;
  }

  //getting single volunteer
  getVolunteer (id: string): Observable<Volunteer> 
  {
    return this.volunteerCollection.doc<Volunteer>(id).valueChanges().pipe(take(1),
        map(volunteer => 
        {
          volunteer.id = id;
          return volunteer;
        })
    );
  }

  //create new volunteer
  addVolunteer (volunteer: Volunteer): Promise<DocumentReference>
  {
    return this.volunteerCollection.add(volunteer);
  }

  //update volunteer
  updateVolunteer (volunteer: Volunteer): Promise<void>
  {
    return this.volunteerCollection.doc(volunteer.id).update
    ({
      //status: volunteer.status,
      description: volunteer.description,
      //image: volunteer.image,
      volunteerName: volunteer.volunteerName
    })
  }

  //delete volunteer
  deleteVolunteer (id:string): Promise<void>
  {
    return this.volunteerCollection.doc(id).delete();
  }
}
