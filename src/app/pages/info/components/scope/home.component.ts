import { Component } from '@angular/core';
import { main } from '../../data/main';

@Component({
  selector: 'app-info-scope-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class ScopeHomeComponent {
  title: string = 'Title';
  subtitle: string = 'Subtitle';
  items: any[] = [];

  constructor() {
    this.items = main;
  }
}
