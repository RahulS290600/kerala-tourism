import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { LoginComponent } from './components/login/login.component';
import { DistrictDetailComponent } from './pages/district-details/district-details.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, CarouselComponent,LoginComponent,DistrictDetailComponent]
})
export class AppComponent {
  title = 'kerala-tourism';
}
