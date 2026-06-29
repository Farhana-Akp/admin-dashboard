import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarcomponent',
  standalone:true,
  imports: [],
  templateUrl: './navbarcomponent.html',
  styleUrl: './navbarcomponent.css',
})
export class Navbarcomponent {

constructor(private router:Router){}

  logout():void{


localStorage.removeItem('token');

alert("logout");

this.router.navigate(['/']);
    
  }
}
