import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { AlunoListComponent } from './aluno-list.component';
import { AlunoInfoComponent } from './aluno-info.component';


@NgModule({
    declarations: [
        AlunoListComponent,
        AlunoInfoComponent,
    ], 
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path:'', redirectTo:'/alunos',pathMatch: 'full'
            },
            {
                path: 'alunos', component: AlunoListComponent
            },
            {
                path: 'alunos/info/:id', component: AlunoInfoComponent
            }
        ])
    ]
})
export class AlunoModule { 

}