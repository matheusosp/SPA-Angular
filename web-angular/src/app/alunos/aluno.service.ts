import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../model/aluno';

@Injectable({
    providedIn: 'root'
})
export class AlunoService{

    private alunoUrl: string = 'http://localhost:3100/api/alunos'

    constructor(private HttpClient: HttpClient){}
    
    retrieveAll(): Observable<Aluno[]> {
        return this.HttpClient.get<Aluno[]>(this.alunoUrl); 
    }

    retriveById(id: number): Observable <Aluno> {
        return this.HttpClient.get<Aluno>(` ${this.alunoUrl}/${id} `);
    }

    save(aluno: Aluno):Observable<Aluno>{
        if (aluno.id){
            return this.HttpClient.put<Aluno>(`${this.alunoUrl}/${aluno.id}`, aluno);
        }else{
            return this.HttpClient.post<Aluno>(`${this.alunoUrl}`, aluno);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.HttpClient.delete<any>(`${this.alunoUrl}/${id}`);
    }

    qtd(): Observable<Aluno[]> {
        return this.HttpClient.get<Aluno[]>(this.alunoUrl); 
    }
    
}