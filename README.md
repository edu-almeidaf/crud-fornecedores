## Requisitos funcionais

[x] - Deve ser possível listar fornecedores
[x] - Deve ser possível criar um fornecedor
[ ] - Deve ser possível editar um fornecedor
[ ] - Deve ser possível excluir um fornecedor
[ ] - Ao executar qualquer ação, deve ter uma mensagem de sucesso ou falha
[x] - A lista de fornecedores deve ter um campo de filtro por nome
[x] - Deve ter um campo de CEP para preencher as informações de endereço ao criar ou editar fornecedores.

## Requisitos técnicos

[x] - Utilizar React com Typescript
[x] - Utilizar Styled-components
[x] - Utilizar identidade visual da vexpenses
[x] - Aplicação responsiva (Desktop e mobile)
[ ] - Utilizar a API viacep
[x] - Usar React Hook Form com Yup
[x] - Usar eslint com prettier
[x] - Usar json server
[x] - Usar axios

Interface de Fornecedor:
```typescript
interface Fornecedor {
  nome: string; // Nome do fornecedor (obrigatório, alfanumérico)
  descricao?: string; // Descrição do fornecedor (opcional, alfanumérico)
  contatos: Contato[]; // Lista de contatos (obrigatório ao menos um)
  endereco: Endereco; // Endereço do fornecedor (obrigatório)
}

interface Contato {
  nome: string; // Nome do contato (obrigatório, alfabético)
  telefone: string; // Número de telefone (obrigatório, formatado - (##) #####-####)
}

interface Endereco {
  cep: string; // CEP (obrigatório, formatado - #####-###)
  estado: string; // Estado (obrigatório, 2 caracteres maiúsculos, ex.: SP)
  cidade: string; // Cidade (obrigatório, alfabético)
  logradouro: string; // Logradouro (obrigatório, alfanumérico)
  numero: number; // Número (obrigatório, numérico)
  referencia?: string; // Referência (opcional, alfanumérico)
}

```

## Funcionalidades extras:

[ ] - Abrir contato do fornecedor no whatsapp
[ ] - Método de autenticação
[ ] - Integrar localização do fornecedor com Google Maps
[ ] - Página de not found

## Tentarei adicionar se houver tempo:
[ ] - Testes
[ ] - Backend próprio

## Detalhes extras
[ ] - Inserir ícone de search no input de filtragem pelo nome
[ ] - Inserir paginação na lista de fornecedores
[ ] - Inserir ícone de logout futuramente no header
[ ] - Trabalhar com tratamento de erros e cache na rota de criação de fornecedor