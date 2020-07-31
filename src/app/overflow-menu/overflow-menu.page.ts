import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-overflow-menu',
  templateUrl: './overflow-menu.page.html',
  styleUrls: ['./overflow-menu.page.scss'],
})
export class OverflowMenuPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  close(param: string) {
    this.popoverCtrl.dismiss(param);
  }

}
