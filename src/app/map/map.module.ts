import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AnneOfGreenGablesModule } from 'anne-of-green-gables';




@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AnneOfGreenGablesModule 
  ]
})
export class MapModule { }
