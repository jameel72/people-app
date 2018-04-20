import { NgModule } from "@angular/core";
import { PeopleRepository } from "./people.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [PeopleRepository, StaticDataSource]
})

export class ModelModule {}