import { Component, OnInit } from '@angular/core';
import itemsData from 'src/assets/itemsData.json'

interface Item {
  name: string;
  image: string;
  price: number;
  addedToCart: boolean;
  desc: string;
}



@Component({
  selector: 'app-chalange1-angular',
  templateUrl: './chalange1-angular.component.html',
  styleUrls: ['./chalange1-angular.component.css']
})

export class Chalange1AngularComponent implements OnInit {
  name = 'Angular';

  items: Item[] = itemsData;


  ngOnInit() { }

}




