import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeopleModule } from "./people/people.module";
import { RouterModule } from "@angular/router";
import { PeopleComponent } from "./people/people.component";
import { AddPeopleComponent } from "./people/addPeople.component";
import { EditPeopleComponent } from "./people/editPeople.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, PeopleModule, RouterModule.forRoot([
        { path: "people", component: PeopleComponent },
        { path: "addPeople", component: AddPeopleComponent },
        { path: "editPeople", component: EditPeopleComponent },
        { path: "**", redirectTo: "/people" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
