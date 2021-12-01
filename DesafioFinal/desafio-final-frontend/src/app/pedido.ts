import { Produto } from './produto'

export interface Pedido {
  id: number
  dataHora: string
  situacao: string
  itens: { produto: Produto; quantidade: number }[]
}
