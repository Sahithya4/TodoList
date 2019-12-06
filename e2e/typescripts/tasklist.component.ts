import { Component, OnInit } from '@angular/core';
import { todoList } from 'e2e/todoList';
import { TasklistService } from 'src/app/tasklist.service';
import { Tasks } from '../tasks';
import { isNull } from 'util';

@Component({
  selector: 'app-tasklist',
  templateUrl: './partials/tasklist.component.html',
  styleUrls: ['./styles/tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  todolist: todoList[];
  tasks: Tasks[]=[];
  tasklength: any;
  list : any;
  user:any;
  x:any
  y:any
  edit : any
  editName :string;
  taskcompleted:any=[]
  constructor(private tasklistService : TasklistService) { }

  ngOnInit() {
    this.edit=false;
    this.editName="checked"
    console.log(this.edit)
    this.list=JSON.parse(localStorage.getItem('viewing'));
    this.user=this.list.name;
    this.x=JSON.parse(localStorage.getItem(this.user+"x"))
    this.y=JSON.parse(localStorage.getItem(this.user+"y"))
    this.tasks=JSON.parse(localStorage.getItem(this.user));
    this.tasklength=this.tasks.length
    localStorage.setItem(this.user,JSON.stringify(this.tasks))
    console.log(this.user)
    console.log(this.tasks)
  }
 
  addTask(name : string){
    this.tasks=this.tasklistService.addList(name);
    console.log(this.tasks)
  }
  deletelist(name : string){
  this.tasks=this.tasklistService.deletelist(name);
  }
  tasksdone(lists,tasks)
  {  
    lists.checked=!lists.checked
    console.log(lists.checked)
    this.tasks=this.tasklistService.taskdone(lists);
    console.log(this.tasks)
  }
  edittask(list)
  {
    console.log(list)
    this.tasks=this.tasklistService.editList(list);
    console.log(this.tasks)
  }
  edits(name :string)
  {
    console.log(name)
    this.edit=true;
  }
}
