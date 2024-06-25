import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../models/productName.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavbarComponent, CarouselComponent, CardComponent, NgFor],
})
export class HomeComponent {
  
  productName: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    try {
      const response = await fetch('https://e959672273b04c4cbc35272823cf9c03.api.mockbin.io/'
      );
      const data = await response.json();
      this.productName = data.KeralaDistricts;
      console.log(this.productName);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


}
