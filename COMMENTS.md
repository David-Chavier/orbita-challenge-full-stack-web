# Comentários do Projeto

Este projeto foi desenvolvido em dois repositórios distintos e, em seguida, clonado para este local. Os links dos repositórios são:

- [Front-end](https://github.com/David-Chavier/grupoafront)
- [Back-end](https://github.com/David-Chavier/grupoABack)

---

## Front-end

### Decisão da Arquitetura Utilizada

A arquitetura do projeto foi baseada na separação de responsabilidades para garantir um código organizado e escalável. Utilizei o padrão de componentização do Vue.js para dividir a interface em componentes reutilizáveis. Isso permite uma maior flexibilidade e manutenção do projeto a longo prazo.

Além disso, separei o código em camadas distintas: **views**, **components**, e **services**. Essa abordagem ajuda a manter o código modular, facilitando testes unitários e futuras expansões.

#### Estrutura de Pastas

- **components/**: Contém componentes reutilizáveis da interface.
- **views/**: Contém as páginas principais da aplicação.
- **services/**: Responsável pelas requisições a APIs externas.
- **router/**: Gerencia o roteamento da aplicação.
- **model/**: Define as interfaces e tipos usados no TypeScript para maior tipagem estática e segurança no código.

### Lista de Bibliotecas de Terceiros Utilizadas

- **Vue.js**: Framework utilizado para a criação da interface e gestão do fluxo de dados.
- **Vue Router**: Gerenciamento de rotas da aplicação.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **TypeScript**: Para garantir tipagem estática e maior segurança ao manipular dados complexos.

### O que Eu Melhoraria se Tivesse Mais Tempo

1. **Testes Automatizados**: Adicionaria mais cobertura de testes unitários e de integração para garantir que todas as funcionalidades estejam devidamente testadas e funcionando conforme o esperado.
   
2. **Responsividade**: Melhoraria a responsividade da aplicação para atender melhor a diferentes tamanhos de tela.
   
3. **Validações**: Adicionaria mais validações nos formulários para garantir a integridade dos dados.

### Requisitos Obrigatórios que Não Foram Entregues

- **Vuetify**: Não usei o framework Vuetify; a estilização foi feita apenas com CSS.

---

## Back-end

### Decisão da Arquitetura Utilizada

A arquitetura foi estruturada em pastas distintas: **BusinessRules**, **Controllers**, **Data**, **DTOs**, **Models** e **Repository**. Estou utilizando o Swagger para documentação das APIs. 

Essa abordagem modular tem várias vantagens:

1. **Separação de Responsabilidades**: Cada camada tem uma responsabilidade específica, o que facilita a manutenção e o entendimento do código.

2. **Facilidade de Testes**: A separação clara entre as diferentes camadas permite que cada parte da aplicação seja testada de forma independente.

3. **Escalabilidade e Manutenção**: Uma estrutura modular torna mais fácil a adição de novas funcionalidades e a realização de manutenções.

### O que Eu Melhoraria se Tivesse Mais Tempo

- **Validações**: Adicionaria mais validações nas entradas dos dados para aumentar a segurança e a integridade das operações.
