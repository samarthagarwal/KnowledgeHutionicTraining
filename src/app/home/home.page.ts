import { Component, ViewChild } from "@angular/core";
import { ToastController, IonInfiniteScroll } from "@ionic/angular";
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  people: any[] = [];

  peopleBackup: any[];

  constructor(private toastCtrl: ToastController, private router: Router, private peopleService: PeopleService) {

    this.people = this.peopleService.people;
    this.peopleBackup = this.people;
  }

  refresh(ev) {
    console.log("Refreshing the page...");

    setTimeout(() => {
      this.people = this.people.reverse();
      ev.target.complete();
      console.log("Page refreshed!");
    }, 2000);
  }

  async loadMore(ev) {
    console.log("Loading more data...");

    setTimeout(async () => {
      this.people = this.people.concat(this.peopleBackup);
      ev.target.complete();
      console.log("More data loaded!");

      if (this.people.length >= 100) {
        ev.target.disabled = true;
        // this.infiniteScroll.disabled = true;

        let toast = await this.toastCtrl.create({
          message: "No more data to be loaded",
          duration: 2000,
        });

        toast.present();
      }
    }, 2000);
  }

  navigateToDetail(person: any) {

    this.router.navigate(['/detail','123'])

  }
}
