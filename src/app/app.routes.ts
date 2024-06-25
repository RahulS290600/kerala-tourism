import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictListComponent } from './pages/district-list/district-list.component';
import { DistrictDetailComponent } from './pages/district-details/district-details.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



export const routes: Routes = [

    {
        path:'', component:HomeComponent
    },
    {
        path:'list', component:DistrictListComponent
    },
    {
        path:'district-details/:id', component:DistrictDetailComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'**', component:NotFoundComponent
    }
];

