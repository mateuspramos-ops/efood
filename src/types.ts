export type Prato = {
  id: number
  nome: string
  descricao: string
  preco: number
  imagem: string
}

export type Restaurante = {
  id: number
  nome: string
  tipo: string
  avaliacao: number
  capa: string
  destaque?: string
  tempoEntrega: string
  cardapio: Prato[]
}
