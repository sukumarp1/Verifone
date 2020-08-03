import { Component, OnInit } from '@angular/core';
import { searchData } from '../../mockData/sample';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from '../../../core/helper.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data: any = []
  filteredBrands: any = [];
  value: any;
  brand: any = [];
  filteredData: any = [];
  selectedValues: any = []
  selectedCategories: string[] = [];
  display: boolean = false;
  isDisable: boolean = true;
  isListCreate: boolean = false;
  listName: string;
  listValues: any = [];
  selectedImage: any;
  list1: any = [];
  list2: any = [];
  favor1: any;
  favor2: any;
  val1: string;
  isCreateList: boolean = false;
  favoriteList: any = [];
  arr = [];

  constructor(private http: HttpClient, private helper: HelperService, private router: Router) { }

  ngOnInit() {
    this.data = searchData;
  }

  /*filter data based on query*/

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.data.length; i++) {
      let brand = this.data[i].name;
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(this.data[i]);
      }

    }
    if (this.filteredBrands.length == 0) {
      this.filteredBrands.push({ name: "No criteria match" });
    }
  }

  /* Hide the popup and enable the favorite page Link*/
  updateFavoraties(obj) {
    this.selectedImage = obj
    this.display = true;
    this.isDisable = false;
  }

  /*Add Image to Favorite on click of add favorities Hide popup and go back to search page*/
  addAnotherImage() {
    this.display = false;

    this.selectedImage.listName = this.val1;
    this.arr.push(this.selectedImage)
    this.helper.setFavoriteImages(this.arr);
  }

  /*Hide popup and go to Favorite page*/

  goToFavorite() {
    this.display = false;
    this.router.navigate(['favorite'])
  }

  /*select the List*/
  onRadioBtnClick(list) {
    this.val1 = list;
  }
  /*toggle createList */
  createList() {
    this.isCreateList = true;
  }
  /* update the list*/
  updateList() {
    this.listValues.push(this.listName);
    this.isCreateList = false;
  }
}
