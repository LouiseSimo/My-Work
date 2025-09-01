import { Component } from '@angular/core';
import { ITask } from '../../../shared/models/task';
import { FormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { MATERIALS_IMPORTS } from '../../../shared/materials-imports';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    SHARED_IMPORTS,
    MATERIALS_IMPORTS
  ],
  templateUrl: './home.html',
  // styleUrl: './home.css'
})
export class Home {
  newTaskName: string = '';
  selectedFilter: string = '';

  taskList: ITask[] = [
    { id: 1, taskName: 'Study anglar', isCompleted: false },
    { id: 2, taskName: 'study Chinese ', isCompleted: true },
    { id: 3, taskName: 'Learn about nestjs', isCompleted: false },
  ];


  addNewTask() {
    console.log('This is the new task name:', this.newTaskName);
    const newTask: ITask = {
      id: this.taskList.length + 1,
      taskName: this.newTaskName,
      isCompleted: false,
    };
    this.taskList.push(newTask);
    this.newTaskName = '';
  }

  changeFilter(filter:any) {
    
  }
  
  
  completedTask(task: ITask) { }

  deleteTask(task: ITask) {
    this.taskList = this.taskList.filter((t) => t.id !== task.id);
  }
}





