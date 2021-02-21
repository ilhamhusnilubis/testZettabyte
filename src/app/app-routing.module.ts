import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Challange2Component } from './challange2/challange2.component';
import { Challange3Component } from './challange3/challange3.component';
import { Chalange1AngularComponent } from './chalange1-angular/chalange1-angular.component';


const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'challange2', component: Challange2Component },
  { path: 'challange3', component: Challange3Component },
  { path: 'chalange1Angular', component: Chalange1AngularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
