import { Component, Input } from '@angular/core';

import { Card } from '../../models/data-card.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
})
export class DataCardComponent {
  @Input() title: string = 'default title';

  cards: Card[] = [
    {
      id: '1',
      title: 'AnonymousOpColombia',
      description:
        'Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore',
      link: 'http://example.com',
    },
    {
      id: '1',
      title: 'Colombian Cyber Army A.k.a Colhackers',
      description:
        'Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore Lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lore dmf d rts cson lore',
      link: 'http://example.com',
    },
    {
      id: '1',
      title: 'title',
      description: 'description',
      link: 'http://example.com',
    },
    {
      id: '1',
      title: 'title',
      description: 'description',
    },
  ];
}
