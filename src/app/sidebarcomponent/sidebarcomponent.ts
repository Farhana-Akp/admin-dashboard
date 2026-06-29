import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-sidebarcomponent',
  standalone:true,
  imports: [RouterLink,RouterModule],
  templateUrl: './sidebarcomponent.html',
  styleUrl: './sidebarcomponent.css',
})
export class Sidebarcomponent {}
