import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Userlistcomponent } from "../userlistcomponent/userlistcomponent";
import { Navbarcomponent } from '../navbarcomponent/navbarcomponent';
import { Sidebarcomponent } from '../sidebarcomponent/sidebarcomponent';

@Component({
  selector: 'app-parent-dashcomponent',
  standalone:true,
  imports: [RouterModule,Navbarcomponent,Sidebarcomponent],
  templateUrl: './parent-dashcomponent.html',
  styleUrl: './parent-dashcomponent.css',
})
export class ParentDashcomponent {}
