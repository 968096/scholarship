export class Scholarship {
  constructor(
    public id: number | null,
    public title: string,       // Título da bolsa de iniciação científica
    public description: string, // Descrição do projeto e atividades
    public amount: number       // Valor do auxílio mensal em euros
  ) {}
}
