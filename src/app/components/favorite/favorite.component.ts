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
  downloadImage(obj) {
    let splitbyte = obj.thumbnail.split(',');
    let byteCharacters = atob(splitbyte[1]);
    let byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray], { "type": "image/jpeg" });
    if (navigator.msSaveBlob) {
      let filename = obj.name;
      navigator.msSaveBlob(blob, filename);
    } else {

      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute('visibility', 'hidden');
      link.download = obj.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
