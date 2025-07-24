
# Nada

Este projeto foi desenvolvido como parte do programa **CAIXAVERSO**, uma iniciativa da **ADA** (Academia do Agilismo) em parceria com a **CAIXA Econômica Federal**.

O sistema é uma aplicação Angular voltada para o gerenciamento de tarefas simples, utilizando integração com APIs REST para fins de aprendizado e prática de desenvolvimento front-end.

---

## 🚀 Tecnologias Utilizadas

- [Angular CLI](https://github.com/angular/angular-cli) versão `19.2.15`
- [JSON Server](https://github.com/typicode/json-server) (para simular backend local)
- [RxJS](https://rxjs.dev/)
- TypeScript

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)
- Angular CLI:

```bash
npm install -g @angular/cli
```

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## ▶️ Como rodar o projeto

O projeto possui dois servidores que podem ser iniciados com um único comando:

```bash
npm start
```

Isso irá:
- Iniciar o **frontend Angular** em `http://localhost:4200`
- Iniciar o **servidor JSON local** (caso esteja usando o `json-server`) em `http://localhost:8080`

Ou, para rodar apenas o Angular:

```bash
npm run start:front
```

---

## 🧪 Testes

### Testes unitários com Karma:

```bash
npm test
```

### Testes e2e (end-to-end)

O Angular 19 não inclui mais o framework de e2e por padrão. Você pode usar Cypress, Playwright ou outro framework à sua escolha.

---

## 🛠️ Comandos úteis

### Gerar um novo componente:

```bash
ng generate component nome-do-componente
```

### Gerar um novo service:

```bash
ng generate service nome-do-service
```

### Build para produção:

```bash
ng build
```

---

## 💡 Recursos adicionais

- [Documentação Angular](https://angular.dev/)
- [Documentação do Angular CLI](https://angular.dev/tools/cli)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📢 Sobre o Programa CAIXAVERSO

O **CAIXAVERSO** é um programa de formação promovido pela **CAIXA Econômica Federal**, em parceria com a **ADA**, com foco em capacitar talentos em tecnologia com ênfase em desenvolvimento web moderno.

Este projeto é parte das atividades práticas do programa.

---
