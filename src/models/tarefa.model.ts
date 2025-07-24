export interface Tarefa {
  id?: string;
  descricao: string;        
  dataCriacao: Date;       
  dataConclusao?: Date;     
  prioridade?: 'baixa' | 'media' | 'alta';  
}