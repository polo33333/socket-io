import { NgModule,ModuleWithProviders}             from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';

const routes: Routes = [
    { path: '', component:Page1Component},
    { path: 'page2', component:Page2Component},
    
];

export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules});