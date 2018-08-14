import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DsiPage } from './dsi';

@NgModule({
  declarations: [
    DsiPage,
  ],
  imports: [
    IonicPageModule.forChild(DsiPage),
  ],
})
export class DsiPageModule {}
