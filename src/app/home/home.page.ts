import { Component } from "@angular/core";
import {
  LoadingController,
  ToastController,
  AlertController,
  ActionSheetController,
} from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private actionsheetCtrl: ActionSheetController
  ) {}

  async showLoading() {
    let loading = await this.loadingCtrl.create({
      spinner: "dots",
      message: "Loading, please wait",
    });

    loading.present();

    // Emulated 5 seconds task
    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    // any code here will be after
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      header: "New Message",
      message: "You have a new message!",
      duration: 3000,
      position: "bottom",
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log("You pressed okay!");
          },
        },
      ],
    });

    toast.present();
  }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: "WiFi Password",
      subHeader: "Please enter the new password",
      message: "Your password seems to have been changed recently.",

      inputs: [{
        name: "password",
        type: "password",
        placeholder: "12345678"
      }],

      buttons: [
        {
          text: "Submit",
          handler: (data) => {
            console.log("You pressed submit");
            
            // prevent alert from dismissing
            if(data.password == null || data.password != "12345678") {
              return false;
            }

            
          },
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("You pressed cancel");
          },
        },
      ],
    });

    alert.present();
  }

  async showActionsheet() {
    let actionsheet = await this.actionsheetCtrl.create({
      header: "Select an option",
      subHeader: "Choose a country",
      buttons: [{
        text: "UK",
        handler: () => {

        }
      }, {
        text: "USA",
        role: "selected",
        handler: () => {
          
        }
      }, {
        text: "India",
        handler: () => {
          
        }
      }]
    });

    actionsheet.present();
  }
}
