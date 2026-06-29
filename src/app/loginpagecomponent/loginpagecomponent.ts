import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-loginpagecomponent',
  standalone:true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './loginpagecomponent.html',
  styleUrl: './loginpagecomponent.css',
})
export class Loginpagecomponent implements OnInit{



  addlog!:FormGroup;



  ngOnInit(): void {
    

    this.getform();


  }


constructor(private builder:FormBuilder,private router:Router){}

  


getform():void{


this.addlog=this.builder.group({

  username:['',Validators.required],
    password:['',Validators.required],

});

}



submit():void{

const data=this.addlog.value;


if(data.username==='admin'&&data.password==='fara')
{
  localStorage.setItem('token','123');

this.router.navigate(['/dash']);
}
else{
  alert("invalid username or password");
}

}


}

