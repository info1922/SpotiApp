import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../app/components/home/home.component';
import { SearchComponent } from '../app/components/search/search.component';
import {ArtistaComponent} from '../app/components/artista/artista.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent}, // El artista recive un ID del artista
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true });
