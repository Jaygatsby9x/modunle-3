import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productFilter: IProduct[];
  imageStatus = false;
  background = '#e2f0e9';
  products: IProduct[] = [
    {
      name: 'lamboghini',
      desc: 'car',
      price: 200000000,
      image: 'assets/image/lam.jpg',
      status: 'active'
    },
    {
      name: 'yamaha R15',
      desc: 'motobike',
      price: 10000000,
      image: 'assets/image/r15.png',
      status: 'active'
    },
    {
      name: 'boing 370',
      desc: 'plane',
      price: 3000000000,
      image: 'assets/image/boing.jpeg',
      status: 'not active'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.productFilter = this.products;
  }

  search(keyword): IProduct[] {
    return this.products.filter((product: IProduct) => product.name.indexOf(keyword) !== -1);
  }

  setFilter(keyword) {
    if (keyword) {
      this.productFilter = this.search(keyword);
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
  onChange(value: any) {
    this.background = value;
  }

  setFilterStatus(keyword) {
    if (keyword) {
      this.productFilter = this.products.filter((product: IProduct) => product.status === keyword);
    } else {
      this.productFilter = this.products;
    }
  }
}
interface IProduct {
  name: string;
  desc: string;
  price: number;
  image: string;
  status: string;
}

