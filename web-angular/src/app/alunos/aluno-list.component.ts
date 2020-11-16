import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';
import { Aluno } from '../model/aluno';


@Component({
    templateUrl: './aluno-list.component.html'
})

export class AlunoListComponent implements OnInit{

    filteredAlunos: Aluno[] = [];

    _alunos: Aluno[] = [];

    _filterBy:string;

    constructor(private alunoService: AlunoService){
    }
    ngOnInit(): void {
        this.retrieveAll();
        this.qtdlist()
    }

    retrieveAll(): void{
        this.alunoService.retrieveAll().subscribe({
            next: alunos =>{
                this._alunos = alunos;
                this.filteredAlunos = this._alunos;
                this.qtdlist();
            },
            error: err => console.log("Error", err)
        });
    }
    
    deleteById(alunoId: number): void { 
        this.alunoService.deleteById(alunoId).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.retrieveAll();
                this.qtdlist();
            },
            error: err => console.log('Error', err)
        })
    }

    qtd: number;

    qtdlist(): void{
        this.alunoService.qtd().subscribe({
            next: alunos =>{
                this.qtd = alunos.length;
            },
            error: err => console.log("Error", err)
        });
    }
    set filter(value: string){
        this._filterBy = value;

        this.filteredAlunos = this._alunos.filter((aluno: Aluno) =>
             aluno.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }        

    get filter(){
        return this._filterBy;
    }
}
