import { Component } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent {
  isOpen: boolean = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
}
