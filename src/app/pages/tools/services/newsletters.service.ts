import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  addDoc,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';

import { NewsletterModel } from '../models/newsletters.model';

@Injectable({
  providedIn: 'root',
})
export class NewslettersService {
  ref: CollectionReference = collection(this.firestore, 'newsletters');
  id!: DocumentReference;

  constructor(private firestore: Firestore) {}

  getNewsletter(id: string) {
    this.id = doc(this.ref, id);
    return getDoc(this.id);
  }

  addNewsletter(newsletter: NewsletterModel) {
    return addDoc(this.ref, newsletter);
  }
}
