import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewslettersService } from '../../../services/newsletters.service';

@Component({
  selector: 'app-tools-newsletters-history',
  templateUrl: './newsletters.history.component.html',
})
export class NewslettersHistoryComponent implements OnInit {
  id: string = '';
  data: any;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private newslettersService: NewslettersService
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      if (this.id) {
        this.getNewsletters(this.id);
      }
    });
  }

  getNewsletters(id: string) {
    this.newslettersService.getNewsletter(id).then((response) => {
      this.data = response.data();
      this.loaded = true;
    });
  }
}
