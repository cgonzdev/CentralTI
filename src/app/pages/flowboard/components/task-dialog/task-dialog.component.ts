import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
})
export class TaskDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  task: Task;

  constructor(
    private dialogRef: DialogRef<Task>,
    @Inject(DIALOG_DATA) task: Task
  ) {
    this.task = task;
  }

  close() {
    this.dialogRef.close();
  }
}
