import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'e2e/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  constructor(private tasklistService : TasklistService,private router: Router) { }

  tasks: Tasks[]=[];
  list : any
  x:any
  y:any

  addList(addname : string){
    this.list=JSON.parse(localStorage.getItem('viewing'));
    this.y=JSON.parse(localStorage.getItem(this.list.name+"y"))
    if(localStorage.getItem(this.list.name)=="null")
    {
      localStorage.setItem(this.list.name,JSON.stringify([{name : addname,checked : false}]));
      this.y=this.y+1
      localStorage.setItem(this.list.name+"y",JSON.stringify(this.y))
      return JSON.parse(localStorage.getItem(this.list.name));
    }
    else if(localStorage.getItem(this.list.name)!=null){
      this.tasks=JSON.parse(localStorage.getItem(this.list.name));
      this.tasks.push({name : addname,checked:false})
      localStorage.setItem(this.list.name,JSON.stringify(this.tasks));
      this.y=this.y+1
      localStorage.setItem(this.list.name+"y",JSON.stringify(this.y))
      console.log(JSON.parse(localStorage.getItem(this.list.name)));
      return JSON.parse(localStorage.getItem(this.list.name));
    }
   }
   editList(task)
   {
    this.list=JSON.parse(localStorage.getItem('viewing'));
    this.tasks=task;
    console.log(this.list.name)
    localStorage.setItem(this.list.name,JSON.stringify(this.tasks));
    return this.tasks;
   }
   taskdone(lists)
   {
    this.list=JSON.parse(localStorage.getItem('viewing'));
    this.tasks=JSON.parse(localStorage.getItem(this.list.name))
    this.x=JSON.parse(localStorage.getItem(this.list.name+"x"))
    if(lists.checked==true)
    this.x=this.x+1;
    else
    this.x=this.x-1;
    localStorage.setItem(this.list.name+"x",this.x);
    for(var i=0;i<this.tasks.length;i++)
    {
        if(this.tasks[i]["name"]==lists.name){
         this.tasks[i]=lists
        }
    }
    localStorage.setItem(this.list.name,JSON.stringify(this.tasks))
    return this.tasks;
   }
   deletelist(name : string){
    this.list=JSON.parse(localStorage.getItem('viewing'));
    this.y=JSON.parse(localStorage.getItem(this.list.name+"y"))
    this.tasks=JSON.parse(localStorage.getItem(this.list.name))
    if(confirm("Are you sure to delete "+name)) {
      for(var i=0;i<this.tasks.length;i++)
      {
        if(this.tasks[i]["name"]==name){
         this.tasks.splice(i,1)}
      }
      localStorage.setItem(this.list.name,JSON.stringify(this.tasks));
      console.log(JSON.parse(localStorage.getItem(this.list.name)));
    }
    return JSON.parse(localStorage.getItem(this.list.name));
    }
}
