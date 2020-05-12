import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from '../services/type-of-photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../assets/image/backgroundPhoto/top_bg.jpg');
  }

}
