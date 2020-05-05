import { FormControl } from '@angular/forms';

/**
 * Различные варианты валидаций для формы
 */

export class HelperValidators {

  /**
  * Валидатор на пробел в конце
  */
  public static noWhitespaceLast(control: FormControl) {
    const regex = new RegExp(/\s$/i)
    const isValid = !(regex.test(control.value));
    return isValid ? null : { 'whitespaceLast': true };
  }

  /**
  * Валидатор на пробел в начале, конце и двойной
  */
  public static noWhitespaceValidator(control: FormControl) {
    const regex = new RegExp(/^\s+|\s(?=\s)/i)
    const isValid = !(regex.test(control.value));
    return isValid ? null : { 'whitespace': true };
  }

  /**
  * Валидатор на спецсимовлы(пропускаем буквы, пробел, цифры и "-")
  */
  public static noSymbolValidator(control: FormControl) {
    const regex = new RegExp(/^([a-zа-яё0-9- ]*)$/i);
    const isValid = (regex.test(control.value));
    return isValid ? null : { 'symbol': true }
  }

  /**
  * Валидатор названия дома (буквы, пробел, "/", "\", цифры и "-")
  */
  public static houseNameValidator(control: FormControl) {
    const regex = new RegExp(/^([a-zа-яё0-9-\\\/— ]*)$/i);
    const isValid = (regex.test(control.value));
    return isValid ? null : { 'symbol': true }
  }

  /**
  * Валидатор на спецсимовлы и цифры(пропускаем буквы и некоторые символы(№ . , - : ;))
  */
  public static noSomeSymbolAndNumberValidator(control: FormControl) {
    const regex = new RegExp(/^([a-zа-яё№.,-:; ]*)$/i);
    const isValid = (regex.test(control.value));
    return isValid ? null : { 'someSymbolAndNumber': true }
  }

  /**
  * Валидатор на спецсимовлы и цифры(пропускаем буквы, пробел и "-")
  */
  public static noSymbolAndNumberValidator(control: FormControl) {
    const regex = new RegExp(/^([a-zа-яё -]*)$/i);
    const isValid = regex.test(control.value);
    return isValid ? null : { 'symbolAndNumber': true }
  }

  /**
  * Валидатор на заполненность поля одними нулями
  */
  public static allZeros(control: FormControl) {
    const regex = /^0*$/i;
    if (control.value) {
      if (control.value.match(regex)) {
        return { 'zero': true };
      };
      return null;
    }
  }

  /**
  * Валидатор почты
  */
  public static emailValidator(control: FormControl) {
    const regex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i);
    if (control.value) {
      const isValid = (regex.test(control.value));
      return isValid ? null : { 'email': true }
    }
    return null
  }
}