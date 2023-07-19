import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService],
})
export class TerminalComponent implements OnInit, OnDestroy {
  @Input() title: string = 'default title';
  @Input() user: string = 'root';

  subscription: Subscription;
  welcomeMessage: string = `Welcome to ${environment.application.name} terminal`;
  prompt: string = '';

  constructor(private terminalService: TerminalService) {
    this.subscription = this.terminalService.commandHandler.subscribe(
      (command) => {
        let response =
          command === 'date'
            ? new Date().toDateString()
            : 'Unknown command: ' + command;
        this.terminalService.sendResponse(response);
      }
    );
  }

  ngOnInit(): void {
    this.prompt = `${this.user} >>`;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
