import { Component, OnInit } from '@angular/core';
import { DaysService, DayTodoList } from '../days.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebar = false;

  constructor(
    public daysService: DaysService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  showSidebar() {
    this.sidebar = !this.sidebar;
  }

  newDay() {
    console.log(this.daysService.dayTodoList);
    const daysTodoList = this.daysService.dayTodoList;
    const newTodoList: DayTodoList = {
      day: `Day - ${daysTodoList.length + 1}`,
      taskList: [],
      id: +`${daysTodoList.length + 1}`,
    };
    console.log(newTodoList);
    this.daysService.dayTodoList.push(newTodoList);
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
