import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss']
})
export class BoardTaskComponent implements OnInit {

  @Input()
  task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
