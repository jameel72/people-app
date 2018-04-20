import { Component } from "@angular/core";
import { PeopleRepository } from "../model/people.repository";
import { NgForm } from "@angular/forms";
import { People } from "../model/people.model";
import { Router } from "@angular/router";

@Component({
    selector: "edit-people",
    templateUrl: "editPeople.component.html",
    styleUrls: ["editPeople.style.css"],
    moduleId: module.id
})

export class EditPeopleComponent {
    public editPeople: People;
    genders = [
        {value: 'Male', viewValue: 'Male'},
        {value: 'Female', viewValue: 'Female'},
        {value: 'Other', viewValue: 'Other'}
      ];
      
    constructor(private repository: PeopleRepository, private router: Router) {
        this.editPeople = this.repository.currEditPeople;
    }
    
    get peopleNames(): string[] {
        return this.repository.getPeople().map(p => p.name+" "+p.surname);
    }
    
    submitEditPeople(form: NgForm) {
        if(form.valid) {
            this.repository.editPeople(this.editPeople).subscribe(p => {
                this.router.navigateByUrl("/people");
            });
        }
    }
}