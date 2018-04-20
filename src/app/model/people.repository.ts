import { Injectable } from "@angular/core";
import { People } from "./people.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PeopleRepository {
    private peopleList: People[];
    private _currEditPeople: People;
    constructor(private dataSource: StaticDataSource) {
        dataSource.getPeople().subscribe(data => {
            this.peopleList = data;
        });
    }
    
    get currEditPeople(): People {
        return this._currEditPeople;
    }
    
    set currEditPeople(p: People) {
        this._currEditPeople = p;
    }
    
    getPeople(): People[] {
        return this.peopleList;
    }
    
    addPeople(people: People): Observable<People> {
        people.id = this.peopleList.length + 1;
        this.peopleList.push(people);
        return Observable.from([people]);
    }
    
    editPeople(p: People): Observable<People> {
        let currPeople = this.peopleList.find(people => people.id == p.id);
        currPeople.name = p.name;
        currPeople.surname = p.surname;
        currPeople.gender = p.gender;
        currPeople.best_friend = p.best_friend;
        return Observable.from([currPeople]);
    }
    
    deletePeople(id: number): Observable<People[]> {
        let currIndex = this.peopleList.findIndex(people => people.id == id);
        let newArr = this.peopleList.splice(currIndex, 1);
        return Observable.from([newArr]);
    }
}