import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestModalData } from './request-modal.data';
import { Subject } from 'rxjs';
import { HelperValidators } from '../shared/validators/helper-validators'
import { TypeOfPhotoService } from '../services/type-of-photo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss']
})
export class RequestDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  typeOfPhoto = [];
  private destroyed$: Subject<void> = new Subject();

  constructor(
    public dialogRef: MatDialogRef<RequestDialogComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private typeOfPhotoService: TypeOfPhotoService,
    @Inject(MAT_DIALOG_DATA) public data: RequestModalData
  ) { 
    this.form = fb.group({
      name: [null, [
        HelperValidators.noWhitespaceLast,
        HelperValidators.noSymbolAndNumberValidator,
        HelperValidators.noWhitespaceValidator,
        Validators.required]
      ],
      type: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [HelperValidators.emailValidator, Validators.required]],
      comment: [null]
    })
  }

  ngOnInit() {
    this.typeOfPhoto = this.typeOfPhotoService.typeOfPhoto;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  openSnackBar(message: string, result: boolean, action = 'Скрыть'): void {
    if (result) {
      this.snackBar.open(message, action, {duration: 2000, horizontalPosition: 'right', panelClass: 'success-snackbar'});
    } else {
      this.snackBar.open(message, action, {duration: 2000, horizontalPosition: 'right', panelClass: 'fail-snackbar'});
    }
  }

  /**
   * Получаем сообщение об ошибке
   */
  getErrorMessage(control: AbstractControl): string {
    switch (true) {
      case control.hasError('required'):
        return 'Обязательно к заполнению';
      case control.hasError('email'):
        return 'Некорректная почта';
      case control.hasError('whitespace'):
      case control.hasError('whitespaceLast'):
      case control.hasError('symbolAndNumber'):
        return 'Недопустимые символы';
    }
  }

  /**
   * Отправляем форму
   */
  onSubmit(): void {
    if (this.form.valid){
      this.dialogRef.close();
      this.openSnackBar('Ваша заявка отправлена', true)
    } else {
      this.openSnackBar('Заполнены не все обязательные поля', false)
    }
  }

  onCancel(): void {
    this.openSnackBar('Ваша заявка отменена', false)
  }

}
