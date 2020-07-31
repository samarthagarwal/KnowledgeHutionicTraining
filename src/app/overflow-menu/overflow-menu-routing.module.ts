import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverflowMenuPage } from './overflow-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OverflowMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverflowMenuPageRoutingModule {}
