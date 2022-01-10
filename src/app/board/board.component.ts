import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from '../shared/data.service';
import { ToDo } from '../shared/todo.model';

export interface Task{
  type: string,
  title: string,
  description: string,
  id: number
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    open: Task[] = [{type: 'Open', title: 'Task-1', description: 'Finish Course Work', id: 2}]
    inProgress: Task[] = []
    readyForTesting: Task[] = []
    done: Task[] = []
  

  constructor(public dataService: DataService) { }

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
