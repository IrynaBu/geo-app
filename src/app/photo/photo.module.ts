import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [PhotoComponent, PhotoListComponent]
})
export class PhotoModule { }
