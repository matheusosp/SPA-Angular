import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../model/aluno';
import { AlunoService } from './aluno.service';



@Component({
    templateUrl:'./aluno-info.component.html'
})
export class AlunoInfoComponent implements OnInit{

    aluno: Aluno;

    constructor( private route: ActivatedRoute, private alunoService: AlunoService){}

    ngOnInit(): void {

        this.alunoService.retriveById(+this.route.snapshot.paramMap.get('id')).subscribe({
            next : aluno => this.aluno = aluno, 
            error: err => console.log('Erro ', err)
        })

    }
    save(): void {
        this.alunoService.save( this.aluno ).subscribe({
            next : aluno => console.log('saved with sucess', aluno),
            error: err => console.log('Error ', err)
        })
    }

}