import { AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import { AnneOfGreenGablesComponent,Point2D } from 'anne-of-green-gables';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  
  @ViewChild('reyhanNeshan', { static: false })
  public map!: AnneOfGreenGablesComponent;
  public specialPoint = {lat:35.6997, lng:51.3380} as Point2D;
  
  constructor() {
  }
  
  ngAfterViewInit(): void {
    console.log(this.map); 
    (this.map as unknown as AnneOfGreenGablesComponent).concatMarkers3(this.specialPoint);
  }
}
