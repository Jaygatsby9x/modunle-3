import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  keyword = '';
  productFilter: IProduct[];
  imageStatus = false;
  products: IProduct[] = [
    {
      name: 'lamboghini',
      desc: 'car',
      price: 200000000,
      image: 'assets/image/lam.jpg'
    },
    {
      name: 'yamaha R15',
      desc: 'motobike',
      price: 10000000,
      image: 'assets/image/r15.png'
    },
    {
      name: 'boing 370',
      desc: 'plane',
      price: 3000000000,
      image: 'assets/image/boing.jpeg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.productFilter = this.products;
  }

  search(): IProduct[] {
    return this.products.filter((product: IProduct) => product.name.indexOf(this.keyword) !== -1);
  }

  setFilter() {
    if (this.keyword) {
      this.productFilter = this.search();
    } else {
      this.productFilter = this.products;
    }
  }

  delete(i) {
    this.products.splice(i, 1);
  }
  imgToggle() {
    this.imageStatus = ! this.imageStatus;
  }
}

interface IProduct {
  name: string;
  desc: string;
  price: number;
  image: string;
}

