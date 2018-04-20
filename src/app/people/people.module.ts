import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { PeopleComponent } from "./people.component";
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from "./menu.component";
import {MatInputModule} from '@angular/material/input';
import { AddPeopleComponent } from "./addPeople.component";
import { EditPeopleComponent } from "./editPeople.component";
import { RouterModule } from "@angular/router";
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, MatListModule, MatCardModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatInputModule, RouterModule, MatSelectModule, MatAutocompleteModule, MatDialogModule, LayoutModule],
    declarations: [ PeopleComponent, MenuComponent, AddPeopleComponent, EditPeopleComponent, DialogOverviewExampleDialog ],
    exports: [ PeopleComponent, AddPeopleComponent, EditPeopleComponent ],
    entryComponents: [DialogOverviewExampleDialog]
})

export class PeopleModule {}