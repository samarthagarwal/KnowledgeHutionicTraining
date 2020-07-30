import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  person: any = {};

  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) {

    let id = this.activatedRoute.snapshot.paramMap.get("id");
    
    this.person = this.peopleService.getPerson(id);

    console.log(this.person);


  }

  ngOnInit() {
  }

}
