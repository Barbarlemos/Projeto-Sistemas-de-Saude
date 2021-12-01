# Plano de Testes de Software

Para garantir que o sistema possa atender a todos os requisitos funcionais que estão descritos [aqui](especification.md), serão empregados testes manuais.

As funcionalidades que são reponsáveis por cumprir os requisitos funcionais são:
- RF-001
    - Login
    - Cadastro de usuário
- RF-002 e RF-006
    - Filtros na listagem dos postos
- RF-003
    - Abrir localização do posto no google maps
- RF-004
    - Abrir painel com mais informações do posto
- RF-005
    - Cadastro de posto
- RF-007
    - Cadastrar avaliações sobre o posto

## Casos de teste
Todos os casos de testes serão efetuados por todos os 7 usuários abaixo, além dos desenvolvedores:

|#|Nome|Idade|
|---|---|---|
|1|Cristian|20|
|2|Jorge|40|
|3|Leandro|20|
|4|Luciano|18|
|5|Marcelo|21|
|6|Marcos|12|
|7|Viviane|30|

### Login
- Deve permitir login com credenciais válidas
- Não deve permitir login com credenciais inválidas
- Não deve permitir acessar os paineis logados sem realizar o login

### Cadastro de usuário
- Deve permitir o cadastro de um usuário comum
- Não deve permitir o cadastro de usuário que já existe

### Filtros na listagem dos postos
- Ao selecionar os filtros apenas os postos que cumprem todos os requisitos escolhidos devem ser mostrados em tela

### Abrir localização do posto no google maps
- Ao clicar no link deve ser aberto uma nova guia com a localização do posto no google maps 

### Abrir painel com mais informações do posto
- Ao clicar no botão de info na listagem dos postos deve ser aberto uma janela com mais informações do posto

### Cadastro de posto
- Ao realizar o registro de um posto ele deve aparecer na tela de listagem dos postos

### Cadastrar avaliações sobre o posto
- Ao cadastrar avaliação do posto ela deve aparecer na tela de "mais informações do posto"
 
## Registro de Testes de Software

Após a realização de todos os testes foi pedido para que os usuários apontassem uma pontuação de 0 a 10 para cada uma das funcionalidades baseadas nos seguintes atributos:
- Interface
- Intuitividade
- Velocidade

A média de cada pontuação é apresentada na tabela a seguir.
|Atributo|Média|
|---|---|
|Interface|9.4|
|Intuitividade|9.0|
|Velocidade|10|

## Avaliação

Após a visualização dos resultados pode ser notado que o sistema precisa de mais intuitividade, uma solução apontada pelos usuários envolvidos nos testes foi a criação de mensagens descritivas ao lado dos campos de cadastros, e um breve manual de fácil acesso nas telas do sistema. A velocidade em que o sistema devolve as respostas foi um ponto considerado forte durante os testes.

Para as próximas etapas do projeto algumas funcionalidades foram sugeridas:
- Salvar filtros customizados
- Favoritar o posto
- Menu de ajuda
- Possibilidade dos postos responderem as avaliações

## Próximos passos

Para as próximas Sprints de desenvolvimento uma nova coluna de backlog seria adicionada ao projeto para podermos priorizar e desenvolver as tarefas de forma mais acertiva. O uso de pull requests se tornaria mais frequente e adotariamos um modelo de nomeclatura para as branchs.