import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  favoriteImages$: BehaviorSubject<any> = new BehaviorSubject([]);
  favoriteImages = this.favoriteImages$.asObservable();
  setFavoriteImages(value) {
    this.favoriteImages$.next(value);
  }

  getFavoriteImages() {
    return this.favoriteImages$.getValue();
  }

}