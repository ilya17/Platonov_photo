import { Injectable } from '@angular/core';
import { Photo } from '../shared/model/photo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeOfPhotoService {
  public mainPhoto: BehaviorSubject<string> = new BehaviorSubject('');
  public typeOfPhoto: Photo[] = [
    {id: 1, name: 'Агропромышленная фотография', link:'harvest_web', url: '/agricultural'},
    {id: 2, name: 'Фуд-фотография', link:'Burg_web', url: '/food'},
    {id: 3, name: 'Предметы на белом фоне', link:'Bag_web', url: '/white'},
    {id: 4, name: 'Детская фотoграфия', link:'f_web', url: '/child'},
    {id: 5, name: 'Репортажная съемка', link:'humam_web', url: '/reportage'},
    {id: 6, name: 'Предметная фотография', link:'med_web', url: '/object'},
    {id: 7, name: 'Спортивная фотография', link:'paint_web', url: '/sport'},
    {id: 8, name: 'Аэрофотосъемка', link:'ship_web', url: '/aerial'},
    {id: 9, name: 'Архитектурная фотография', link:'sky_web', url: '/architecture'}
  ]

  constructor() { }

  /**
   * Получить тип фото по id
   */
  getTypeById(id: number): Photo {
    return this.typeOfPhoto.find(type => type.id === id)
  }
}
