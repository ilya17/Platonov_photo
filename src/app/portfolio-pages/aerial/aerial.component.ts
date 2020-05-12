import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from 'src/app/services/type-of-photo.service';

@Component({
  selector: 'app-aerial',
  templateUrl: './aerial.component.html',
  styleUrls: ['./aerial.component.scss']
})
export class AerialComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../../assets/image/backgroundPhoto/aerial.jpg');
  }

}
