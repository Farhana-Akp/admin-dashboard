import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlistcomponent',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './productlistcomponent.html',
  styleUrl: './productlistcomponent.css',
})
export class Productlistcomponent implements OnInit{

array2:any[]=[];


ngOnInit(): void {
  
  this.getarray();
}
  constructor(private router:Router,private api:Apiservice){}



  getarray():void{

this.array2=this.api.productlistarray;

  }


  edit(id:number):void{

    this.router.navigate(['/addpro',id]);
  }

  addpro():void{

this.router.navigate(['/addpro']);


  }


  
}
