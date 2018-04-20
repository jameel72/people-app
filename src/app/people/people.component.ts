import { Component, Inject } from "@angular/core";
import { People } from "../model/people.model";
import { PeopleRepository } from "../model/people.repository";
import { Router } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewExampleDialog } from "./dialog.component";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
    selector: "people",
    templateUrl: "people.component.html",
    styleUrls: ["people.style.css"],
    moduleId: module.id
})

export class PeopleComponent {
    responsiveCols: number = 1;
    constructor(private repository: PeopleRepository, private router: Router, public dialog: MatDialog, private breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe([
          Breakpoints.HandsetLandscape,
          Breakpoints.HandsetPortrait
        ]).subscribe(result => {
          if (result.matches) {
            this.responsiveCols = 4;
          }
        });
        
        breakpointObserver.observe([
          Breakpoints.TabletLandscape,
          Breakpoints.TabletPortrait
        ]).subscribe(result => {
          if (result.matches) {
            this.responsiveCols = 2;
          }
        });
    }
    
    get people(): People[] {
        return this.repository.getPeople();
    }
    
    editPeople(p: People) {
        this.repository.currEditPeople = p;
        this.router.navigateByUrl("/editPeople");
    }
    
    openDialog(p: People): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px', data: { msg: "Are you sure you want to delete this?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "OK")
        this.repository.deletePeople(p.id).subscribe(p => {
                
            });
    });
  }
}