import { Component, ViewChild } from "@angular/core";
import {
  ToastController,
  IonInfiniteScroll,
  ModalController,
  IonRouterOutlet,
  PopoverController,
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
    private router: Router,
    private peopleService: PeopleService,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private popoverController: PopoverController
  ) {
    this.people = this.peopleService.people;
    this.peopleBackup = this.people;

    // console.log("Before executing...");
    // this.myFunction().then((num) => {
    //   console.log("Resolved with " + num);
    // }).catch((ex) => {
    //   console.log("Rejected with " + ex);
    // }).finally(() => {
    //   console.log("After execution...");
    // });

    console.log("Before execution...");

    this.myObservableFunction()
      .toPromise()
      .then((value) => {
        console.log(value);
      });

    console.log("After execution...");
  }

  // myFunction(): Promise<number> {
  //   return new Promise<number>((resolve, reject) => {
  //     setTimeout(() => {
  //       reject(1907);
  //     }, 2000);
  //   });
  // }

  myObservableFunction(): Observable<number> {
    return new Observable<number>((observer) => {
      let num = 1;

      setInterval(() => {
        if (num > 100) {
          observer.complete();
        }

        observer.next(num);
        num = num + num;
      }, 1000);
    });
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
