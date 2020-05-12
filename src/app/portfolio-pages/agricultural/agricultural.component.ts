import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from 'src/app/services/type-of-photo.service';

@Component({
  selector: 'app-agricultural',
  templateUrl: './agricultural.component.html',
  styleUrls: ['./agricultural.component.scss']
})
export class AgriculturalComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../../assets/image/backgroundPhoto/harvest.jpg');
  }

}
