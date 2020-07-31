import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: any = [];

  constructor(private httpClient: HttpClient) {
  }

  getPeople(): Promise<any> {

    return new Promise<any>(async (res, rej) => {
      this.people = await this.httpClient.get("http://www.json-generator.com/api/json/get/bUKvqKOrFK?indent=2").toPromise();
      res(this.people);
    })
  }

  getPerson(id: string) {
    for (let index = 0; index < this.people.length; index++) {
      if(this.people[index].id == id) {
        return this.people[index];
      }
    }

    return null;
  }
}
