import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwinsPageRoutingModule } from './twins-routing.module';

import { TwinsPage } from './twins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwinsPageRoutingModule
  ],
  declarations: [TwinsPage]
})
export class TwinsPageModule {}
