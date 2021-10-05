
# Projeto de Interface

Representação da aplicação que pode ser acessada através do navegador. O usuário consegue acessar as informações sobre postos de saúde, sendo possível realizar filtros, salvar suas preferências nos favoritos e visualizar as avaliações que outros usuários cadastraram sobre o posto, além de que o administrador exclusivamente pode gerenciar os registros dos postos de saúde.

## User Flow

Nessa aplicação existe três estados em que um usuário pode se encontrar: **Deslogado**, **Logado como administrador** e **Logado como usuário**.

A usabilidade da aplicação pode ser visualizada [aqui](https://xd.adobe.com/view/1fa69cfe-7b9e-4420-acf0-4e8b20ae8042-4af5/)

![UserFlow](img/userflow.png)

## Wireframes
O objetivo de cada tela em seu respectivo flow pode ser observado nas descrições a seguir.

### Flow Deslogado
Nesse ponto o usuário não realizou o acesso utilizando sua conta, dessa forma nenhuma informação sobre as preferências será salva.

- Homepage
Nessa tela o usuário consegue pesquisar por postos de saúde com base na localidade, tipos de serviços e especialidades além de poder ordenar como desejar.
![homepage](img/wireframes/Wireframe001_HomepageDeslogado-1.jpg)

- Painel do posto
Nessa tela é possível abrir o mapa e visualizar as avaliações do posto.
![](img/wireframes/Wireframe003_Perfildopostodeslogado-1.jpg)

- Login
Nessa tela o usuário informa usuário e senha, caso seja aceito redireciona para a homepage que ele possui permissão (Administrador ou Usuário).
![](img/wireframes/Wireframe002_Login-1.jpg)

- Cadastro Usuário
Nessa tela é possível criar uma conta para o usuário, existem funcionalidades que são exclusivas para quem possui conta.
![](img/wireframes/Wireframe001_Cadastro-1.jpg)

- Resetar Senha
Com as inúmeras senhas que são utilizadas hoje em dia é normal esquecer alguma delas, nessa tela é possível requisitar a redefinição da senha de sua conta.
![](img/wireframes/Wireframe002_RecuperarSenha-1.jpg)

### Flow Admin
Nesse flow o usuário realizou acesso usando conta com privilégios de administrador, ele pode realizar cadastros e editar as informações sobres os postos.

- Homepage
Nessa tela o usuário consegue pesquisar por postos de saúde com base na localidade, tipos de serviços e especialidades além de poder ordenar como desejar.
![](img/wireframes/Wireframe004_HomepageAdmin-1.jpg)

- Painel do posto editável
Permite visualizar informações do posto e possui botões para abrir o mapa, excluir e abrir a página de edição do cadastro.
![](img/wireframes/Wireframe004_HomepageAdmin(Perfil)-1.jpg)

- Editar informações do posto
Nessa tela todos os campos do cadastro base do posto podem ser editados.
![](img/wireframes/Wireframe004_Criar-EditarPosto-1.jpg)

- Cadastrar novo posto
Permite o usuário inserir um novo registro de algum posto de saúde.
![](img/wireframes/Wireframe004_Criar-EditarPosto-1.jpg)

### Flow Usuário
Nessa parte o usuário realizou o acesso utilizando uma conta sem privilégios de administrador, ele pode avaliar e salvar postos em seus favoritos

- Homepage
Nessa tela o usuário consegue pesquisar por postos de saúde com base na localidade, tipos de serviços e especialidades além de poder ordenar como desejar.
![](img/wireframes/Wireframe003_HomepageUsuárioFavoritado-1.jpg)

- Painel do posto
Nessa tela é possível adicionar o posto aos favoritos, ir para a tela de avaliações e abrir o mapa.
![](img/wireframes/Wireframe003_HomepageUsuário(Perfil_Favorito)–1-1.jpg)

- Deixar avaliação
Permite o usuário expressar se gostou ou não dos serviços e anotar suas observações.
![](img/wireframes/Wireframe003_Avaliar-1.jpg)