import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverflowMenuPageRoutingModule } from './overflow-menu-routing.module';

import { OverflowMenuPage } from './overflow-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverflowMenuPageRoutingModule
  ],
  declarations: [OverflowMenuPage]
})
export class OverflowMenuPageModule {}
