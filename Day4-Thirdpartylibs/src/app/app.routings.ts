import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

import {ServicesComponent } from './services/services.component';
import {CareerComponent } from './career/career.component';
import {ContactusComponent } from './contactus/contactus.component';

const routes:Routes=[
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'career',
        component:CareerComponent
    },
    {
        path:'contactus',
        component:ContactusComponent
    }

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingsModule{}
export const routingComponents =[
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CareerComponent,
    ContactusComponent,
]