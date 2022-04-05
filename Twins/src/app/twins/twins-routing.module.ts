import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwinsPage } from './twins.page';

const routes: Routes = [
  {
    path: '',
    component: TwinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwinsPageRoutingModule {}
