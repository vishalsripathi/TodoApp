import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DaysService, DayTodoList, TaskListStatus } from '../days.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  toDoList: DayTodoList;
  @ViewChild('TaskInput') taskInputRef: ElementRef;

  constructor(public daysService: DaysService) {}

  ngOnInit(): void {
    this.daysService.selectedDayId$.subscribe((selectedDayId) => {
      if (selectedDayId) {
        this.toDoList = this.daysService.dayTodoList.find(
          (list) => list.id === selectedDayId
        );
      }
    });
  }

  addTask(TaskInput: string, toDoListId: number) {
    if (TaskInput.length > 0) {
      this.daysService.dayTodoList
        .filter((list) => list.id === toDoListId)
        .map((list) => {
          const newTask: TaskListStatus = {
            taskId: list.taskList.length + 1,
            taskName: TaskInput,
            status: 'Active',
          };
          list.taskList.push(newTask);
        });
    }
    this.taskInputRef.nativeElement.value = '';
  }
  public deleteTask(task: TaskListStatus): void {
    this.daysService.dayTodoList
      .filter((list) => list.id === this.toDoList.id)
      .map((list) => {
        const taskIndex: number = list.taskList.findIndex(
          (list) => list.taskId === task.taskId
        );
        list.taskList.splice(taskIndex, 1);
      });
  }

  public updateStatus(task: TaskListStatus, status: 'Closed' | 'Active') {
    console.log('okk');
    this.daysService.dayTodoList
      .filter((list) => list.id === this.toDoList.id)
      .map((list) => {
        list.taskList
          .filter((list) => list.taskId === task.taskId)
          .map((dayTask) => {
            dayTask.status = status;
          });
      });
    console.log(this.daysService.dayTodoList);
  }
}
