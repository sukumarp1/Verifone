import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../core/helper.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favoriteImages: any = [];
  result: any = [];
  data: any = {}
  constructor(private helper: HelperService, private router: Router) { }

  ngOnInit() {
    this.helper.favoriteImages$.subscribe(result => {

      this.favoriteImages = result;
      if (result != undefined) {
        this.favoriteImages = result;
      }
      else if (result.length == 0) {
        this.router.navigate(['search'])
      }
    });
  }
}
