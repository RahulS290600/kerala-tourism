import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-district-list',
    standalone: true,
    templateUrl: './district-list.component.html',
    styleUrl: './district-list.component.scss',
    imports: [CardComponent, NavbarComponent]
})
export class DistrictListComponent {

}
