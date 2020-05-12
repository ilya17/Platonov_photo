import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from 'src/app/services/type-of-photo.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../../assets/image/backgroundPhoto/food.jpg');
  }
}
