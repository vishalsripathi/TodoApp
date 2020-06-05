import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
export interface TaskListStatus {
  taskId: number;
  taskName: string;
  status: 'Closed' | 'Active';
}
export interface DayTodoList {
  day: string;
  taskList: TaskListStatus[];
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class DaysService {
  public dayTodoList: DayTodoList[] = [];
  private selectedDayIdSource = new BehaviorSubject<number>(null);
  public selectedDayId$ = this.selectedDayIdSource.asObservable();
  constructor() {}
  public updateSelectedId(id: number) {
    this.selectedDayIdSource.next(id);
  }
}
