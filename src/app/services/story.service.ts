import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../modal/Story';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryService 
{
  private stories: Observable<Story[]>;
  private storyCollection: AngularFirestoreCollection<Story>;

  constructor(private afs: AngularFirestore) 
  {
    this.storyCollection = this.afs.collection<Story>('stories');
    this.stories = this.storyCollection.snapshotChanges().pipe
    (
      map(actions=>
        {
          return actions.map(a=>
            {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
        })
    );
  }

  getStories(): Observable<Story[]>
  {
    return this.stories;
  }

  getStory(id: string): Observable<Story> {
    return this.storyCollection.doc<Story>(id).valueChanges().pipe
    (
      take(1),
      map(story => 
      {
        story.id = id;
        return story;
      })
    );
  }

  addStory(story: Story): Promise<DocumentReference> 
  {
    return this.storyCollection.add(story);
  }

  updateStory(story: Story): Promise<void> 
  {
    return this.storyCollection.doc(story.id).update
    ({
      storyName: story.storyName,
      description: story.description 
    });
  }

  deleteStory(id: string): Promise<void> 
  {
    return this.storyCollection.doc(id).delete();
  }
}
