import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { Column, Task } from '../../models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'To Do',
      tasks: [
        {
          id: '1',
          title: 'Todo 1',
        },
        {
          id: '2',
          title: 'Todo 2',
        },
      ],
    },
    {
      title: 'Doing',
      tasks: [
        {
          id: '3',
          title: 'Doing 1',
        },
      ],
    },
    {
      title: 'Done',
      tasks: [
        {
          id: '3',
          title: 'Done 1',
        },
      ],
    },
  ];

  constructor(private dialog: Dialog) {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({ title: 'new column', tasks: [] });
  }

  openTask(task: Task) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      minWidth: '300px',
      maxWidth: '70%',
      data: task,
    });

    dialogRef.closed.subscribe((output) => {
      console.log(output);
    });
  }
}
