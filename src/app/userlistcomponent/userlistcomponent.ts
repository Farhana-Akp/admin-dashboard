import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlistcomponent',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './userlistcomponent.html',
  styleUrl: './userlistcomponent.css',
})
export class Userlistcomponent implements OnInit {

array1:any[]=[];


ngOnInit(): void {
  
  this.getarray();
}
constructor(private router:Router,private api:Apiservice){}



getarray():void{

this.array1=this.api.userlistarray;

}



add():void{

this.router.navigate(['/adduser']);


}

edit(id:number):void{

this.router.navigate(['/adduser',id]);

}

}
