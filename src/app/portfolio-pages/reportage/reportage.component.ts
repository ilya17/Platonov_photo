import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from 'src/app/services/type-of-photo.service';

@Component({
  selector: 'app-reportage',
  templateUrl: './reportage.component.html',
  styleUrls: ['./reportage.component.scss']
})
export class ReportageComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../../assets/image/backgroundPhoto/reportage.jpg');
  }

}
