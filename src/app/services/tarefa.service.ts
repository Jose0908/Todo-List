import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private readonly BASE_URL = 'http://localhost:8080/tarefas';

  constructor(private http: HttpClient) {}

  criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const { id, ...tarefaSemId } = tarefa;
    return this.http.post<Tarefa>(this.BASE_URL, tarefaSemId);
  }

  listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.BASE_URL);
  }

  buscarTarefaPorId(id: string): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.BASE_URL}/${id}`);
  }

  atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const { id, ...tarefaSemId } = tarefa;
    return this.http.put<Tarefa>(`${this.BASE_URL}/${id}`, tarefaSemId);
  }

  removerTarefa(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
