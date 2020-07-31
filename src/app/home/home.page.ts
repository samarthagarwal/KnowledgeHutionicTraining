import { Component, ViewChild } from "@angular/core";
import {
  ToastController,
  IonInfiniteScroll,
  ModalController,
  IonRouterOutlet,
  PopoverController,
  LoadingController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { PeopleService } from "../people.service";
import { DetailPage } from "../detail/detail.page";
import { OverflowMenuPage } from "../overflow-menu/overflow-menu.page";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  people: any[] = [];

  peopleBackup: any[];

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private peopleService: PeopleService,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private popoverController: PopoverController
  ) {

    this.getPeople()

    
  }

  async getPeople() {

    let loading = await this.loadingCtrl.create({
      message: "Loading, please wait",
      spinner: "dots"
    });

    await loading.present();

    this.peopleService.getPeople().then((data) => {
      this.people = data;
      this.peopleBackup = this.people;
      loading.dismiss();
    })
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

  async navigateToDetail(person: any) {
    // this.router.navigate(['/detail','123'])

    let modal = await this.modalCtrl.create({
      component: DetailPage,
      componentProps: {
        id: person.id,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });

    modal.onDidDismiss().then((response) => {
      console.log(response.data);
    });

    modal.present();
  }

  async showPopover(ev) {
    let popover = await this.popoverController.create({
      component: OverflowMenuPage,
      event: ev,
    });

    popover.onDidDismiss().then((response) => {
      console.log(response.data);
    });

    popover.present();
  }
}
