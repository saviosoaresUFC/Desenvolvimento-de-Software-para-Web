# Sistema de Listagem de Alunos

## Introdução

Este é um projeto simples que demonstra o funcionamento de uma aplicação web **Full-Stack**.

O sistema é composto por duas partes principais:

1.  **Backend (Servidor)**: Desenvolvido com **Node.js** e **Express**, sua única função é fornecer uma lista de alunos através de uma API na rota `/alunos`.
2.  **Frontend (Cliente)**: Desenvolvido com **React**, ele consome os dados do backend, exibe os alunos em uma tabela e calcula a média de seus Índices de Rendimento Acadêmico (IRA).

O objetivo principal é exemplificar de forma clara a comunicação entre o cliente e o servidor.

---

## Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em sua máquina.

### Pré-requisitos

Antes de começar, garanta que você tenha o **[Node.js](https://nodejs.org/en/)** (versão 14 ou superior) instalado.

### 1. Executando o Backend (Servidor)

O backend precisa estar rodando para que o frontend possa buscar os dados.

1.  Abra seu terminal e navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2.  Instale as dependências necessárias:
    ```bash
    npm install
    ```

3.  Inicie o servidor:
    ```bash
    node server.js
    ```
> O terminal deverá exibir a mensagem: `Backend rodando em http://localhost:3001`. **Deixe este terminal aberto e rodando em segundo plano.**

### 2. Executando o Frontend (Cliente)

Agora, vamos iniciar a interface que será exibida no navegador.

1.  Abra um **novo terminal** (mantenha o terminal do backend aberto) e navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Inicie a aplicação React:
    ```bash
    npm start
    ```
> Seu navegador será aberto automaticamente no endereço `http://localhost:3000`. A página exibirá a tabela com a lista de alunos e a média dos IRAs.

Pronto! O sistema está totalmente funcional.