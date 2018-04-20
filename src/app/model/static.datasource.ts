import { Injectable } from "@angular/core";
import { People } from "./people.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private peopleList: People[] = [
        new People(1, "John", "Miller", "Male", "Brett Lee"),
        new People(2, "Sam", "Johnes", "Male", "Robert Carlos"),
        new People(3, "Anna", "Marie", "Female", "Katie Cruz"),
        new People(4, "Sean", "Slinger", "Male", "Matt Prior"),
        new People(5, "Victoria", "Johannes", "Female", "Maria Maria")
    ];
    
    getPeople(): Observable<People[]> {
        return Observable.from([this.peopleList]);
    }
}