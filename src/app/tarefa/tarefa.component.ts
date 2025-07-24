import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  standalone: false,
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent implements OnInit {
  tarefaConcluida = false;
  modoEdicao = false;
  novaDescricao = '';

  @Input() tarefa!: Tarefa;
  @Output() editarTarefa: EventEmitter<Tarefa> = new EventEmitter<Tarefa>();
  @Output() removerTarefa: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.tarefaConcluida = this.tarefa.dataConclusao !== undefined;
    this.novaDescricao = this.tarefa.descricao;
  }

  alterarModoEdicao() {
    this.modoEdicao = !this.modoEdicao;
  }

  salvarTarefa() {
    const desc = this.novaDescricao.trim();
    if (desc.length < 3 || desc.length > 50) {
      return;
    }

    this.tarefa.descricao = desc;
    this.alterarModoEdicao();
    this.editarTarefa.emit(this.tarefa);
  }

  removerTarefaEmitter() {
    this.modoEdicao = true;
    this.removerTarefa.emit(this.tarefa.id);
  }

  marcarComoConcluida() {
    this.tarefaConcluida = !this.tarefaConcluida;
    if (this.tarefaConcluida) {
      this.tarefa.dataConclusao = new Date();
    } else {
      this.tarefa.dataConclusao = undefined;
    }
    this.editarTarefa.emit(this.tarefa);
  }

  get descricaoInvalida(): boolean {
    const desc = this.novaDescricao.trim();
    return this.modoEdicao && (desc.length < 3 || desc.length > 50);
  }
}
