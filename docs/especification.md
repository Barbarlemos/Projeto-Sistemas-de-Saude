# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Nome: Cristian

Gênero: Masculino

Idade: 20 anos

Estado civil: Solteiro

Cargo: Ajudante de marceneiro

Educação: Ensino médio completo e cursa ensino técnico em marcenaria no SENAI

Hábitos: Gosta de tomar cerveja com os amigos e jogar futebol na quadra comunitária do seu bairro.

Frustrações: Acha muito trabalhoso o processo de ser atendido em uma unidade de saúde e por isso somente busca atendimento médico em casos graves.

Desafios: Precisa tomar mais cuidados com sua saúde

Estilo de vida: Sua vida está concentrada no que acontece dentro do seu bairro, Cristian tem amigos que conhece desde pequeno porque moram próximos uns dos outros e se encontram para beber e jogar bola quase todo fim de semana. 

Tecnologias que mais usa: Faz uso quase que exclusivo do celular para busca de informações e contato com seus amigos e parentes.

------------------------------------------------------------------------------------------------

Nome: Vivian

Gênero: Feminino

Idade: 30 anos

Estado Civil: Casada

Cargo: Professora de Inglês

Educação: Ensino Superior Completo.

Hábitos: Gosta de praticar exercícios físicos e frequenta a igreja todos fins de semana.

Frustrações: Sempre que tem um problema de saúde e necessita de atendimento médico, ela gasta um dia útil completo para buscar informações, marcar um atendimento e ser atendida.

Desafios: Achar uma maneira mais prática de ser atendida no sistema de saúde mais próximo e conseguir repousar e se tratar nos momentos que está doente.

Estilo de vida: Vivan tem seu círculo de amigos em volta dos membros de sua igreja bem como seus colegas de trabalho. Porém a maior parte do seu tempo livre ela dedica a manter sua saúde através de caminhadas e exercícios musculares além de se fazer presente para sua família.

Tecnologias que mais usa: Vivan tenta não usar muito seu smartphone pois acredita que as pessoas estão viciadas nesse tipo de aparelho. Em vez disso, ela reserva momentos do seu dia para usar seu notebook e acessar seus meios de comunicação.

-----------------------------------------------------------------------------------------------

Nome: Jorge

Gênero: Masculino

Idade: 40 anos

Estado Civil: Divorciado

Cargo: Dono de Padaria

Educação: Ensino Médio completo

Hábitos: Gosta de conversar com familiares pelo whatsapp e de assistir filmes.

Frustrações: Fica perdido ao procurar medicamentos e serviços no posto público de sua região e quando consegue informação sobre o local em pouco tempo a informação fica desatualizada.

Desafios: Manter-se informado sobre o posto de saúde de sua região sem precisar visitar o local somente com essa finalidade.

Estilo de vida: Jorge concentra seu estilo de vida em volta de sua padaria. Nela trabalham seus filhos e também é pelo ambiente do comércio que ele mantém contato com seus amigos, todos também moradores do bairro.

Tecnologias que mais usa: Jorge utiliza as redes do whatsapp e do facebook para se manter informado e em contato com seus amigos e familiares.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
