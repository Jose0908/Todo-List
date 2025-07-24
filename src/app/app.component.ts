import { Component } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  tarefas: Tarefa[] = [];
  tarefasConcluidas: number = 0;
  formTarefa: FormGroup;

  constructor(private fb: FormBuilder, private tarefaService: TarefaService) {
    this.formTarefa = this.fb.group({
      descricao: ['', [Validators.minLength(3), Validators.maxLength(30)]]
    });
  }

  ngOnInit() {
    this.atualizaTarefas();
  }

  atualizaTarefas() {
    this.tarefaService.listarTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
      this.atualizarNumeroTarefasConcluidas();
    });
  }

  get descricao() {
    return this.formTarefa.get('descricao')!;
  }

  adicionarTarefa() {
    if (this.formTarefa.invalid) {
      this.formTarefa.markAllAsTouched();
      return;
    }

    if (this.descricao?.value.trim() === '') {
      this.formTarefa.get('descricao')?.setErrors({ required: true });
      return;
    }

    const descricao = this.descricao?.value;
    const novaTarefa: Tarefa = {
      descricao: descricao,
      dataCriacao: new Date()
    };

    this.tarefaService.criarTarefa(novaTarefa).subscribe(() => {
      this.atualizaTarefas();
    });
    this.formTarefa.reset();
  }

  removerTarefa(id: string) {
    console.log(`id: ${id}`);
    this.tarefaService.removerTarefa(id).subscribe(() => {
      this.atualizaTarefas();
      this.atualizarNumeroTarefasConcluidas();
    });
  }

  editarTarefa(tarefa: Tarefa) {
    this.tarefaService.atualizarTarefa(tarefa).subscribe(() => {
      this.atualizaTarefas();
    });
  }

  atualizarNumeroTarefasConcluidas() {
    this.tarefasConcluidas = this.tarefas.filter(tarefa => tarefa.dataConclusao !== undefined).length;
  }
}