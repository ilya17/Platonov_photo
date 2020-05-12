import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { TypeOfPhotoService } from '../services/type-of-photo.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-image-category',
  templateUrl: './top-image-category.component.html',
  styleUrls: ['./top-image-category.component.scss']
})
export class TopImageCategoryComponent implements OnInit {
  public image: string;
  private destroyed$: Subject<void> = new Subject();

  constructor(
    private typeOfPhotoService: TypeOfPhotoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.typeOfPhotoService.mainPhoto
    .pipe(takeUntil(this.destroyed$))
    .subscribe(res => {
      this.image = res;
      console.log(this.image)
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  openDialog() {
    let dialogRef = this.dialog.open(RequestDialogComponent, {data: {title: 'Заявка на фотосъемку'}})
  }
}
