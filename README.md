﻿<h1 align="center">
    Markdown Colaborativo
</h1>
<p align="center">Projeto que formata um texto para markdow, e permite edição compartilhada</p>

<h4 align="center"> 
	Projeto Concluído 
</h4>

### Features

- [x] Converter texto para markdown
- [x] Edição em tempo real
- [x] Conexão com banco de dados
- [x] Imprimir markdown renderizado

### Pré-requisitos 
<p>Antes de começar você precisar ter instalado em sua máquina as sequintes ferramentas:</p>
<ul>
  <li> <a href='https://git-scm.com'>Git</a> </li>
  <li> <a href='https://nodejs.org/en/'>Node</a> </li>
  <li>Além disto é bom ter um editor para trabalhar com o código como <a href='https://code.visualstudio.com/'>VSCode</a></li>
</ul>

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/FelipeConsorte2001/projeto_websocket.git>

# Acesse a pasta do projeto no terminal/cmd

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Tecnologias
- <a href='https://nodejs.org/en/'>Node</a>
- <a href='https://getbootstrap.com/'>Bootstrap</a>
- <a href='https://vuejs.org/'>Vue.js</a>
- <a href='https://expressjs.com/pt-br/'>Express</a>
- <a href='https://github.com/markedjs/marked'>Marked</a>
- <a href='https://mongoosejs.com/'>Mongoosejs</a>
- <a href='http://showdownjs.com/'>Showdown</a>
- <a href='https://socket.io/'>Socket.io</a>
- <a href='https://www.mongodb.com/atlas/database'>Mongo Atlas</a>
- <a href='https://expressjs.com/en/resources/middleware/cors.html'>Cors</a>
- <a href='https://jquery.com/'>Jquery</a>

### Visualizar banco de dados
Para visualizar o banco de dados você deve: 
1. Criar uma conta no <a href='https://www.mongodb.com/atlas/database'>Mongo Atlas</a>
2. Cria um projeto 
3. Criar um Cluster
4. Criar uma collections
5. Criar um database
6. Substituir a string de conexão do projeto pela nova que você acabou de criar 
```
mongodb+srv://felipe:<password>@cluster0.npf7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
7. Para completar a string de conexão e torná-la válida, substitua ```<password>``` pela senha do seu próprio usuário do banco de dados e ```<dbname>``` por sample_mflix  
8. No cmd executar npm start