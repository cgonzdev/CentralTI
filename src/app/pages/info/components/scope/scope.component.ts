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

import { VarDefaultComponent } from '../var/default.component';
import { variableComponents } from '../var/var';

@Component({
  selector: 'app-customers-scope',
  templateUrl: './scope.component.html',
})
export class ScopeComponent implements OnInit {
  customersScopes: any = [{ name: 'Home', acronym: 'Home' }];
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
    this.getAllCustomersScopeLocal();
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

  getAllCustomersScopeLocal() {
    const scopesData = this.scopeService.getAllCustomersScopeLocal();
    this.customersScopes = [...this.customersScopes, ...scopesData];
  }

  onChangeCustomeScope(event: any) {
    if (!event || event.value.acronym === 'Home') {
      this.customerScopeData = null;
    } else {
      this.customerScopeData = this.customersScopes.find(
        (item: any) => item.acronym === event.value.acronym
      );
    }
  }

  servicesComponents(id: string) {
    const v = variableComponents.find((component) => component.id === id);
    if (v) return v.component;
    else return VarDefaultComponent;
  }
}
