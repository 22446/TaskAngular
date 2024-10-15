import { Itasks } from '../../core/interfaces/itasks';
import { TasksService } from './../../core/services/tasks.service';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TaskitemComponent } from "../taskitem/taskitem.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskitemComponent,FormsModule,SearchPipe,NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  title:string=''
  id=inject(PLATFORM_ID)
  _TasksService=inject(TasksService)
  _spinnerservices=inject(NgxSpinnerService)
  TasksData:Itasks[]=[]
  ngOnInit(): void {
    this._spinnerservices.show();

    setTimeout(() => {

      this._spinnerservices.hide();
      if(isPlatformBrowser(this.id)){
      this.getDataFromLocalStorage()
      }
      this.getAllTasks()
    }, 2000);
  }
  getAllTasks(){
    if (this.TasksData.length === 0) {

      this._spinnerservices.show()
       this._TasksService.GetAllTasks().subscribe({
      next:(res)=>{
        this.TasksData=res
       
        this._spinnerservices.hide()
        
      }

      
    })
  }
  }
  CompletedOrNOT(task:Itasks){
   task.completed=!task.completed
   this.saveDataTolocalStorage()
  }
  saveDataTolocalStorage(){
    localStorage.setItem('taskData',JSON.stringify(this.TasksData))
  }
  getDataFromLocalStorage(){
   const Task= localStorage.getItem('taskData')
  if(Task){
    this.TasksData=JSON.parse(Task!)
  }
  }
}
