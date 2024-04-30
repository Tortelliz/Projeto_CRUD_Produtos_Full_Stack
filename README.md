# Projeto Full Stack com Java Spring e React

Este projeto é uma aplicação de inicialização no desenvolvimento web full stack, utilizando Java Spring para o back-end e React JS para o front-end. O objetivo do software é fornecer um sistema CRUD de produtos.

---

## Requisitos do Sistema

Para executar este projeto em sua máquina, certifique-se de ter instalado:

- Java Development Kit (JDK) versão 8 ou superior
- Node.js e npm (Node Package Manager)
- IDE de sua preferência (recomendado: IntelliJ IDEA para o back-end e Visual Studio Code para o front-end)

---

## Configuração do Back-end

1. **Clonar o repositório:**

- git clone https://github.com/Tortelliz/Projeto_CRUD_Produtos_Full_Stack.git

2. **Configurar o arquivo `application.properties`:**
- No diretório `src/main/resources`, localize o arquivo `application.properties`.
- Abra o arquivo `application.properties` e atualize as configurações do banco de dados conforme necessário, incluindo o nome do usuário, senha e nome do projeto.
- Certifique-se de também atualizar o arquivo `application.properties` no diretório `target/classes` se estiver realizando alterações de configuração.

3. **Criar as tabelas no banco de dados:**
- Utilize o MySQL ou qualquer outra ferramenta de gerenciamento de banco de dados para criar as tabelas necessárias de acordo com o modelo de dados do projeto.
- Certifique-se de que o banco de dados esteja configurado corretamente e acessível pelo back-end.

4. **Instalar dependências:**
- Certifique-se de que o Lombok está configurado corretamente em sua IDE.

5. **Executar o aplicativo:**
- Navegue até o diretório: Projeto_CRUD_Produtos_Full_Stack\Back-end\produtos
- Execute o aplicativo Spring Boot através da sua IDE ou usando o seguinte comando:

./mvnw spring-boot:run

O back-end estará disponível em `http://localhost:8080`.

---

## Configuração do Front-end

1. **Instalar dependências:**
- Navegue até o diretório: Projeto_CRUD_Produtos_Full_Stack\Front-end
- Execute o seguinte comando para instalar as dependências do Node.js:

npm install

2. **Executar o aplicativo:**
- Inicie o servidor de desenvolvimento do React com o seguinte comando:

npm start

O front-end estará disponível em `http://localhost:3000`.

---

Com estas instruções, o projeto certamente estará funcionando em sua própria máquina. Se precisar de mais ajuda, me coloco inteiramente à disposição no que for necessário.
Sinta-se a vontade para implementar quaisquer tipos de melhorias e aprimoramentos ao projeto.
Divirta-se desenvolvendo! 🚀

Saudações, Tortelliz!
