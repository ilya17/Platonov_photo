import { Injectable } from '@angular/core';
import { Photo } from '../shared/model/photo';

@Injectable({
  providedIn: 'root'
})
export class TypeOfPhotoService {

  public typeOfPhoto: Photo[] = [
    {id: 1, name: 'Агропромышленная фотография', link:'harvest_web'},
    {id: 2, name: 'Фуд-фотография', link:'Burg_web'},
    {id: 3, name: 'Предметы на белом фоне', link:'Bag_web'},
    {id: 4, name: 'Детская фотoграфия', link:'f_web'},
    {id: 5, name: 'Репортажная съемка', link:'humam_web'},
    {id: 6, name: 'Предметная фотография', link:'med_web'},
    {id: 7, name: 'Спортивная фотография', link:'paint_web'},
    {id: 8, name: 'Аэрофотосъемка', link:'ship_web'},
    {id: 9, name: 'Архитектурная фотография', link:'sky_web'}
  ]

  constructor() { }
}
