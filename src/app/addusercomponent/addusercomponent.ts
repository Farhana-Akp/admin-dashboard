import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addusercomponent',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './addusercomponent.html',
  styleUrl: './addusercomponent.css',
})
export class Addusercomponent implements OnInit {


addform!:FormGroup;
userid:any;
users:any;


ngOnInit(): void {
  
  this.getform();

  this.getid();
}
constructor(private builder:FormBuilder,private api:Apiservice,private active:ActivatedRoute){}


getform():void{

  this.addform=this.builder.group({

    id:['',Validators.required],
        name:['',Validators.required],
    place:['',Validators.required],
    phone:['',Validators.required],
    address:['',Validators.required]

  });
}

adduser():void{

this.api.userlistarray.push({
  id:this.addform.value.id,
    name:this.addform.value.name,
  place:this.addform.value.place,
  phone:this.addform.value.phone,
  address:this.addform.value.address

});

if(this.addform)
{

  this.addform.reset();
}
}


getid():void{


  this.active.paramMap.subscribe(params=>{
  this.userid=Number(params.get('id'));

    this.users=this.api.userlistarray.find(x=>Number(x.id)===this.userid);

    if(this.users)
    {

      this.addform.patchValue(this.users);
           this.api.userlistarray.splice(this.users,1);

    }
  })
}

}
