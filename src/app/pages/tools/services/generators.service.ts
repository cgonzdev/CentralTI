import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  addDoc,
  CollectionReference,
  Query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Tools } from '../models/tools.model';

@Injectable({
  providedIn: 'root',
})
export class GeneratorsService {
  ref: CollectionReference = collection(this.firestore, 'tools');
  query: Query = query(this.ref, where('category', '==', 'generator'));

  constructor(private firestore: Firestore) {}

  getGenerators(): Observable<Tools[]> {
    return collectionData(this.query) as Observable<Tools[]>;
  }

  addGenerator(generator: Tools) {
    return addDoc(this.ref, generator);
  }
}
