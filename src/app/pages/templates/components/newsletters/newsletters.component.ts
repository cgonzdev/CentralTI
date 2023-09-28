import { Component, Input } from '@angular/core';
import { newsletters } from '../../models/newsletters.model';

@Component({
  selector: 'app-templates-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css'],
})
export class NewslettersComponent {
  title: string = 'newsletters';
  subtitle: string = 'subtitle';

  owner: string = 'owner';
  contact: string = 'contact@email.com';

  @Input() newsletters: newsletters[] = [
    {
      category: 'category',
      news: [
        {
          title: 'title',
          link: 'https://example.com',
        },
        {
          title: 'title',
          link: 'https://example.com',
        },
        {
          title: 'title',
          link: 'https://example.com',
        },
      ],
    },
    {
      category: 'category',
      news: [
        {
          title: 'title',
          link: 'https://example.com',
        },
        {
          title: 'title',
          link: 'https://example.com',
        },
        {
          title: 'title',
          link: 'https://example.com',
        },
      ],
    },
  ];
}
