import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from '../services/type-of-photo.service';

@Component({
  selector: 'app-portfolio-menu',
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.scss']
})
export class PortfolioMenuComponent implements OnInit {

  typesOfPhotos = [];

  constructor(
    private typeOfPhotoService: TypeOfPhotoService,
  ) { }

  ngOnInit() {
    this.typesOfPhotos = this.typeOfPhotoService.typeOfPhoto;
  }

}
