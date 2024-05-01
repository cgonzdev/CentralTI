import { Component, OnInit } from '@angular/core';
import {
  faDatabase,
  faGlobe,
  faBug,
  faCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { ScopeService } from '../../services/scope.service';
import { DockModel } from '../../models/scope.model';

@Component({
  selector: 'app-customers-scope',
  templateUrl: './scope.component.html',
})
export class ScopeComponent implements OnInit {
  customersScopes: any = [];
  customerScopeData: any = null;
  dockItems: DockModel[] = [];

  icons: any = {
    faDatabase: faDatabase,
    faGlobe: faGlobe,
    faBug: faBug,
    faCircleDown: faCircleDown,
    faAndroid: faAndroid,
    faFacebook: faFacebook,
  };

  constructor(private scopeService: ScopeService) {}

  ngOnInit(): void {
    this.getAllCustomersScope();
  }

  getAllCustomersScope() {
    this.scopeService.getAllCustomersScope().subscribe({
      next: (response) => {
        this.customersScopes = response;
        this.dockItems = response.map((item) => ({
          label: item.acronym,
          icon: item.logo,
          command: ($event: any) => {
            this.customerScopeData = this.customersScopes.find(
              (item: any) => item.acronym === $event.item.label
            );
          },
        }));
      },
    });
  }
}
