import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-district-details',
    standalone: true,
    templateUrl: './district-details.component.html',
    styleUrls: ['./district-details.component.scss'],
    imports: [NavbarComponent, NgIf, NgFor, CardComponent]
})
export class DistrictDetailComponent {
    id!: number;
    productName: any[] = [];
    districtDetails: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const idParam = params.get('id');
            if (idParam) {
                this.id = +idParam;
                console.log('Detail Component ID:', this.id);
                this.fetchDetails(this.id);
            } else {
                console.error('ID param is missing!');
            }
        });
    }

    fetchDetails(id: number): void {
        this.getData().then(() => {
            this.districtDetails = this.productName.find(item => (item.id+1) === id);
            if (!this.districtDetails) {
                console.error('District details not found!');
            } else {
                console.log('Fetched details:', this.districtDetails);
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    async getData(): Promise<void> {
        try {
            const response = await fetch('https://e959672273b04c4cbc35272823cf9c03.api.mockbin.io/');
            const data = await response.json();
            this.productName = data.KeralaDistricts;
            console.log('Fetched data:', this.productName);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
