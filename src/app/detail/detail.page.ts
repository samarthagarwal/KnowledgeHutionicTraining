import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "../people.service";
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  person: any = {};

  @Input('id') id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService,
    private modalCtrl: ModalController
  ) {
    // let id = this.activatedRoute.snapshot.paramMap.get("id");
    
  }

  ngOnInit() {
    this.person = this.peopleService.getPerson(this.id);
    console.log(this.person);
  }

  close(param) {
    this.modalCtrl.dismiss(param);
  }
}
