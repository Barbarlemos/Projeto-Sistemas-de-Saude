# Especificações do Projeto

Visando o caos gerado pela pandemia do vírus Covid-19, que teve início em março de 2020, vivenciamos uma grande demanda por informações a respeito do sistema de saúde. Pareado a esse caos social também podemos observar uma grande quantidade de ruído que acompanha grandes fluxos de informação.

Atualmente temos dois canais principais para acessarmos informações a respeito do sistema de saúde de Belo Horizonte. São eles o Conecte Sus e o website da prefeitura de BH.

• Conecte Sus
Conecte SUS é um aplicativo do Ministério da Saúde que registra toda a trajetória de quem busca atendimento no SUS. Mostra, por exemplo, dados de atendimentos e internações do paciente e dados relacionados. Permite consultar disponibilidade medicamentosa, verificar exames feitos e também o agendamento de consultas na rede pública de saúde (SUS). Ele também dá acesso à Carteira Nacional Digital de Vacinação, permitindo que os brasileiros consultem vacinas aplicadas nas redes pública e privada, incluindo a da Covid-19.

• Website da Prefeitura
O website da prefeitura oferece um índice das unidades de saúde ordenadas por região. Essas tabelas contêm localização, telefone e horários de funcionamento.

- https://prefeitura.pbh.gov.br/saude/informacoes/atencao-a-saude/atencao-primaria/centro-de-saude.

Diante disso e de um breve estudo sobre nosso possível usuário elaboramos as personas, os requisitos e restrições do projeto como são apresentados abaixo:

## Persona 1
- Nome: Cristian;

- Gênero: Masculino;

- Idade: 20 anos;

- Estado civil: Solteiro;

- Cargo: Ajudante de marceneiro;

- Educação: Ensino médio completo e cursa ensino técnico em marcenaria no SENAI;

- Hábitos: Gosta de tomar cerveja com os amigos e jogar futebol na quadra comunitária do seu bairro;

- Frustrações: Acha muito trabalhoso o processo de ser atendido em uma unidade de saúde e por isso somente busca atendimento médico em casos graves;

- Desafios: Precisa tomar mais cuidados com sua saúde;

- Estilo de vida: Sua vida está concentrada no que acontece dentro do seu bairro, Cristian tem amigos que conhece desde pequeno porque moram próximos uns dos outros e se encontram para beber e jogar bola quase todo fim de semana;

- Tecnologias que mais usa: Faz uso quase que exclusivo do celular para busca de informações e contato com seus amigos e parentes.

## Persona 2
- Nome: Viviane;

- Gênero: Feminino;

- Idade: 30 anos;

- Estado Civil: Casada;

- Cargo: Professora de inglês

- Educação: Ensino superior Completo;

- Hábitos: Gosta de praticar exercícios físicos e frequenta a igreja todos fins de semana;

- Frustrações: Sempre que tem um problema de saúde e necessita de atendimento médico, ela gasta um dia útil completo para buscar informações, marcar um atendimento e ser atendida;

- Desafios: Achar uma maneira mais prática de ser atendida no sistema de saúde mais próximo e conseguir repousar e se tratar nos momentos que está doente;

- Estilo de vida: Vivane tem seu círculo de amigos em volta dos membros de sua igreja bem como seus colegas de trabalho. Porém a maior parte do seu tempo livre ela dedica a manter sua saúde através de caminhadas e exercícios musculares além de se fazer presente para sua família;

- Tecnologias que mais usa: Vivane tenta não usar muito seu smartphone pois acredita que as pessoas estão viciadas nesse tipo de aparelho. Em vez disso, ela reserva momentos do seu dia para usar seu notebook e acessar seus meios de comunicação.

## Persona 3
- Nome: Jorge;

- Gênero: Masculino;

- Idade: 40 anos;

- Estado Civil: Divorciado;

- Cargo: Dono de padaria;

- Educação: Ensino médio completo;

- Hábitos: Gosta de conversar com familiares pelo whatsapp e de assistir filmes;

- Frustrações: Fica perdido ao procurar medicamentos e serviços no posto público de sua região e quando consegue informação sobre o local em pouco tempo a informação fica desatualizada;

- Desafios: Manter-se informado sobre o posto de saúde de sua região sem precisar visitar o local somente com essa finalidade;

- Estilo de vida: Jorge concentra seu estilo de vida em volta de sua padaria. Nela trabalham seus filhos e também é pelo ambiente do comércio que ele mantém contato com seus amigos, todos também moradores do bairro;

- Tecnologias que mais usa: Jorge utiliza as redes do whatsapp e do facebook para se manter informado e em contato com seus amigos e familiares.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                     |PARA ... `MOTIVO/VALOR`                           |
|--------------------|--------------------------------------------------------|--------------------------------------------------|
|Usuário do sistema  | Localizar postos que tenham o atendimento que preciso  | Não ter que consultar multiplos postos           |
|Usuário do sistema  | Localizar postos de saúde rapidamente                  | Não perder tempo útil com esse tipo de pesquisa  |
|Administrador       | Cadastrar novos postos de saúde                        | Tornar a solução relevante para o usuário        |
|Administrador       | Atualizar postos de saúde existentes                   | Manter a solução relevante para o usuário        |

## Requisitos

As tabelas seguintes apresentam requisitos funcionais e não funcionais detalhando o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                            | Prioridade |
|------|-----------------------------------------------------------------------------------------------------|----|
|RF-001| Permitir que o usuário cadastre perfil com localizazção                                             | ALTA  | 
|RF-002| Disponibilizar visualização de postos de saúde ativos                                               | ALTA  |
|RF-003| Mostrar mapa com localização dos postos                                                             | ALTA  |
|RF-004| Mostrar dados individuais de cada posto (Localização, telefone, horários e serviços,                | ALTA  |
|RF-005| Sistema deve permitir que o próprio usuário faça requisição de cadastro de um novo posto            | ALTA  |
|RF-006| Permitir busca e filtro de postos por serviços e especialidades                                     | MÉDIA |
|RF-007| Permitir que o usuário deixe uma nota e review sobre cada posto                                     | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel                            | MÉDIA | 
|RNF-002| Sitema deve recomendar postos melhores avaliados e mais próximos do usuário                  | BAIXA |
|RNF-003| O sistema deve possiuir integração com Google maps para mostrar rota até o posto selecionado | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


