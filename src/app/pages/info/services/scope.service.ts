import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Scope } from '../models/scope.model';

import { data } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ScopeService {
  constructor(private http: HttpClient) {}

  getAllCustomersScope(): Observable<Scope[]> {
    return this.http.get<Scope[]>(
      `${environment.api.backend}/info/customers-scope`
    );
  }

  getAllCustomersScopeLocal() {
    return data;
  }
}
