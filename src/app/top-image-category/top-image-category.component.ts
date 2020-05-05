import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Component({
  selector: 'app-top-image-category',
  templateUrl: './top-image-category.component.html',
  styleUrls: ['./top-image-category.component.scss']
})
export class TopImageCategoryComponent implements OnInit {
  @Input() image: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(RequestDialogComponent, {data: {title: 'Заявка на фотосъемку'}})
  }
}
