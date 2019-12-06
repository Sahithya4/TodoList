import { Component, OnInit, Output } from '@angular/core';
import { todoList } from 'e2e/todoList';
import { Router } from "@angular/router";
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './partials/todolist.component.html',
  styleUrls: ['./styles/todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist : todoList[];
  edit: boolean;
  editName :string;
  tasksize:any=[]
  taskcompleted:any=[]
  i:any;
  
  constructor(private todolistService : TodolistService,private router: Router) {
   }

  ngOnInit() {
     this.edit=false;
     console.log(this.edit)
     this.todolist=JSON.parse(localStorage.getItem('todo'));
     for(this.i=0;this.i<this.todolist.length;this.i++)
     {
       this.tasksize[this.i]=(JSON.parse(localStorage.getItem(this.todolist[this.i].name)))
       this.taskcompleted[this.i]=localStorage.getItem(this.todolist[this.i].name+"x")
     }
     for(this.i=0;this.i<this.todolist.length;this.i++){
       if(this.tasksize[this.i]!=null)
       {
         if(this.taskcompleted[this.i]==null)
         this.taskcompleted[this.i]=0;
       this.tasksize[this.i]="("+this.taskcompleted[this.i]+"/"+this.tasksize[this.i].length+")"
       }
       else
       this.tasksize[this.i]="(0/0)"
     //console.log(this.tasksize[this.i].length)}
     this.todolist[this.i].tasklist=this.tasksize[this.i]
     }
     console.log(this.todolist)
  }

  addList(name : string){
      console.log(name);
      this.todolist=this.todolistService.addList(name);
  }

  edittodo(name :string)
  {
    this.editName=name;
    this.edit=true;
  }
  editList(list)
  {
    this.todolist=this.todolistService.editList(list);
    console.log(this.todolist)
  }
  route(list)
  {
    localStorage.setItem('viewing',JSON.stringify(list))
    console.log(JSON.parse(localStorage.getItem('viewing')));
    this.router.navigate(['task']);
  }
  deletelist(name : string){
    this.todolist=this.todolistService.deletelist(name);
}
}
