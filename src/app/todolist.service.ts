import { Injectable } from '@angular/core';
import { todoList } from 'e2e/todoList';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todolist : todoList[];
  x: any
  y: any
  
  constructor(private todolistService : TodolistService,private router: Router) {
   }

  addList(name : string){
    if(localStorage.getItem('todo')==null)
    {
      localStorage.setItem('todo',JSON.stringify({name : name,tasklist : '(0/0)'}));
      localStorage.setItem(name,null)
      return JSON.parse(localStorage.getItem('todo'));
    }
    else if(localStorage.getItem('todo')!=null){
      this.todolist=JSON.parse(localStorage.getItem('todo'));
      this.x=0;
      this.y=0;
      localStorage.setItem(name+"x",JSON.stringify(0))
      localStorage.setItem(name+"y",JSON.stringify(0))
      this.todolist.push({name:name,tasklist:'(x/y)'})
      localStorage.setItem('todo',JSON.stringify(this.todolist));
      localStorage.setItem(name,null)
      console.log(JSON.parse(localStorage.getItem('todo')));
      return JSON.parse(localStorage.getItem('todo'));
    }
  }

  editList(list)
  {
    this.todolist=list;
    localStorage.setItem('todo',JSON.stringify(this.todolist));
    return this.todolist;
  }
  route(list : todoList)
  {
    this.router.navigate(['task']);
  }
  deletelist(name : string){
    this.todolist=JSON.parse(localStorage.getItem('todo'))
    if(confirm("Are you sure to delete "+name)) {
      for(var i=0;i<this.todolist.length;i++)
      {
        if(this.todolist[i]["name"]==name){
         this.todolist.splice(i,1)}
      }
      localStorage.setItem('todo',JSON.stringify(this.todolist));
      console.log(JSON.parse(localStorage.getItem('todo')));
    }
    return JSON.parse(localStorage.getItem('todo'));
    }

}
