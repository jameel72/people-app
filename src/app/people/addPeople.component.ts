import { Component } from "@angular/core";
import { PeopleRepository } from "../model/people.repository";
import { NgForm } from "@angular/forms";
import { People } from "../model/people.model";
import { Router } from "@angular/router";

@Component({
    selector: "add-people",
    templateUrl: "addPeople.component.html",
    styleUrls: ["addPeople.style.css"],
    moduleId: module.id
})

export class AddPeopleComponent {
    public newPeople: People;
    genders = [
        {value: 'Male', viewValue: 'Male'},
        {value: 'Female', viewValue: 'Female'},
        {value: 'Other', viewValue: 'Other'}
      ];
      
    constructor(private repository: PeopleRepository, private router: Router) {
        this.newPeople = new People();
    }
    
    get peopleNames(): string[] {
        return this.repository.getPeople().map(p => p.name+" "+p.surname);
    }
    
    submitPeople(form: NgForm) {
        if(form.valid) {
            this.repository.addPeople(this.newPeople).subscribe(p => {
                this.router.navigateByUrl("/people");
            });
        }
    }
}