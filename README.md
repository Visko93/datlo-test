# Search App

### Necessidades

- Utilizar Next.js, TypeScript, Ant Design e Styled Components;
- Implementar a funcionalidade de buscar e exibir uma lista de personagens utilizando a
  API GraphQL;
- Exibir os dados de cada personagem, incluindo sua imagem, nome, status e
  localização;
- Adicionar funcionalidade de busca para filtrar a lista de personagens por nome ou
  status;
- Garantir uma interface amigável ao usuário;
- Utilizar o controle de versão Git e disponibilizar o código em um repositório público, no
  GitHub;
- Implementar a funcionalidade de remoção de um personagem da lista;
- Adicionar uma funcionalidade de visualização de detalhes de um personagem ao clicar em um item da lista;

### Ferramentas

- NextJS - Front end framework (in typescript)
- Ant Desgin - Design System Lib
- Styled Components - Customizacao
- React Context + Reducer - Controle de estado
- [use query](https://tanstack.com/query/latest/docs/react/overview) - Data fetching Lib
- [Framer Motion](https://www.framer.com/motion/) - Animation Lib

### Descricao de atividades

- [x] Fazer mockups no figma para a aplicacao
- [x] Criar o projeto base com Nextjs e Typescript
- [x] Instalar bibliotecas [necessarias]()
- [x] Criar Components Base

  - [x] Home
  - [x] SearchInpuSearchList
  - [x] SearchLoading
  - [x] SearchNotFound
  - [x] SearchInitial
  - [x] Drawer
  - [x] EpisodeList
  - [x] DrawerDetails
  - [x] Card
  - [x] CardImage
  - [x] CardDetails
  - [x] CardActionButton

- [ ] Implementar Contexto para

  - [ ] Lista de personagens
  - [x] Detalhe de personagens

- [ ] Implementar conexao API

  - [ ] Atualiza a list de personagens em uma nove pesquisa (nao e o estado)
  - [x] Realiza a chamada de detalhes para 1 personagem

- [ ] (opcional)Implementar animacoes:

  - [ ] Entrada de Cards na lista
  - [ ] Abertura de detalhes
  - [ ] Inicio da pesquisa
  - [ ] Fim da pesquisa
  - [ ] Mount inicial
