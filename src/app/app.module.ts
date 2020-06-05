import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, SidebarComponent, TaskEditComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
