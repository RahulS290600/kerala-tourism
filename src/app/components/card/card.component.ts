import { Component, Input } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { Product } from '../../models/productName.interface';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HomeComponent,RouterModule,NgFor],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  productName: Product[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    try {
      const response = await fetch('https://e959672273b04c4cbc35272823cf9c03.api.mockbin.io/');
      const data = await response.json();
      this.productName = data.KeralaDistricts;
      console.log(this.productName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  viewDistrictDetails(index: number): void {
    this.router.navigate(['/district-details', index]);
  }
}
