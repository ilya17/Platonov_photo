import { Component, OnInit } from '@angular/core';
import { TypeOfPhotoService } from 'src/app/services/type-of-photo.service';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  constructor(
    private typeOfPhotoService: TypeOfPhotoService
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto.next('../../../assets/image/backgroundPhoto/architecture.jpg');
  }

}
