import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../modal/Event';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService 
{
  private events: Observable<Event[]>;
  private eventCollection: AngularFirestoreCollection<Event>;

  constructor (private afs: AngularFirestore)
  {
    this.eventCollection=this.afs.collection<Event>('events');
    this.events=this.eventCollection.snapshotChanges().pipe
    (
      map(actions =>
        {
          return actions.map(a =>
            {
              const data=a.payload.doc.data();
              const id=a.payload.doc.id;
              return { id, ...data};
            });
        })
    );
  }

  getEvents(): Observable<Event[]>
  {
    return this.events;
  }

  getEvent(id: string): Observable<Event>
  {
    return this.eventCollection.doc<Event>(id).valueChanges().pipe
    (
      take(1),
      map(event =>
        {
          event.id=id;
          return event;
        })
    );
  }

  addEvent(event: Event): Promise<DocumentReference>
  {
    return this.eventCollection.add(event);
  }

  updateEvent(event: Event): Promise<void>
  {
    return this.eventCollection.doc(event.id).update
    ({
      eventName: event.eventName,
      description: event.description
    });
  }

  deleteEvent(id: string): Promise<void>
  {
    return this.eventCollection.doc(id).delete();
  }
}
