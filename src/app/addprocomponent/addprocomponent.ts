import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addprocomponent',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './addprocomponent.html',
  styleUrl: './addprocomponent.css',
})
export class Addprocomponent implements OnInit{




  addpro!:FormGroup;
    proid:any;
  products:any;


  ngOnInit(): void {
    

    this.getpro();

    this.getid();
  }
  constructor(private builder:FormBuilder,private api:Apiservice,private active:ActivatedRoute){}


getpro():void

{

  this.addpro=this.builder.group({

    id:['',Validators.required],
        name:['',Validators.required],
    price:['',Validators.required]


  });


  
}



add():void{

this.api.productlistarray.push({

  id:this.addpro.value.id,
    name:this.addpro.value.name,
  price:this.addpro.value.price

});


    this.addpro.reset();
  

}


getid():void{


  this.active.paramMap.subscribe(params=>{

    this.proid=Number(params.get('id'));

    this.products=this.api.productlistarray.find(x=>Number(x.id)===this.proid);


  });

  if(this.products)
  {

    this.addpro.patchValue(this.products);
  }

  this.api.productlistarray.splice(this.products,1);
}
}
