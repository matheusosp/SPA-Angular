import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { error404Component } from './components/404/error-404.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NavBarComponent,
        error404Component
    ],
    imports:[
        RouterModule.forChild([
            {
              path:'**', component:error404Component
            }
        ])
    ],
    exports:[
        NavBarComponent
    ]
})

export class CoreModule{}