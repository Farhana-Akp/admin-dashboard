import { Routes } from '@angular/router';
import { ParentDashcomponent } from './parent-dashcomponent/parent-dashcomponent';
import { Component } from '@angular/core';
import { Navbarcomponent } from './navbarcomponent/navbarcomponent';
import { Sidebarcomponent } from './sidebarcomponent/sidebarcomponent';
import { Userlistcomponent } from './userlistcomponent/userlistcomponent';
import { Productlistcomponent } from './productlistcomponent/productlistcomponent';
import { Addusercomponent } from './addusercomponent/addusercomponent';
import { Addprocomponent } from './addprocomponent/addprocomponent';
import { Loginpagecomponent } from './loginpagecomponent/loginpagecomponent';
import { authGuard } from './auth-guard';

export const routes: Routes = [

    {path:'dash',component:ParentDashcomponent,
     canActivate:[authGuard],

        children:[
           { path:'userlist',component:Userlistcomponent},
           { path:'',component:Userlistcomponent},

           {path:'productlist',component:Productlistcomponent}
        ]
    },

{path:'adduser',component:Addusercomponent},
{path:'adduser/:id',component:Addusercomponent},
{path:'addpro',component:Addprocomponent},
{path:'addpro/:id',component:Addprocomponent},
{path:'',component:Loginpagecomponent}
];
