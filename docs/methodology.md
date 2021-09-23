
# Metodologia

Pré-requisitos: [Documentação de Especificação](/docs/especification.md)

A equipe vai utilizar uma variação do framework de desenvolvimento de projetos **SCRUM** com suporte da ferramenta *Automated Kanban* que fica disponível na aba *Projects* da plataforma GitHub. Todos os desenvolvedores terão acesso ao progresso do desenvolvimento e terão autonomia para realizar *Commits*, não irá existir o processo de Pull Request ou Code review a cada nova *Feature*, porém a medida em que os desenvolvedores notarem a necessidade de refatoração a mesma irá ser aplicada.

Serão realizadas reuniões semanais via plataforma Teams para alinhamentos mais complexos. Durante a semana a medida em que os integrantes vão progredindo nas tarefas ou dificuldades aparecem eles vão informando o time via WhatsApp para juntos tomarem as providencias necessárias.


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo o [Github](https://github.com) a plataforma escolhida para hospedagem do repositório.

### Branchs
O projeto segue a seguinte convenção para o nome de branchs:

- `main`: Versão estável já testada do software
- `dev`: Versão em desenvolvimento da aplicação
- `feat/<name-feature>`: Desenvolvimento das features específicas do projeto
- `fix/<name-fix>`: Correções em problemas específicos
- `refactor/<name-refactor>`: Melhorias no código existente que não alteram o comportamento. 

### Issues
Quanto à gerência de issues, o projeto adota a seguinte convenção para as etiquetas:

- `documentation`: mudanças em relação a documentação
- `feature`: uma nova funcionalidade precisa ser introduzida
- `bug`: comportamento incorreto em uma funcionalidade
- `enhancement`: melhoria de uma funcionalidade

### Tags
As tags que representam as releases possuem o seguinte formato `v0.0` onde a parte inteira do número representa grandes mudanças no comportamento da aplicação e a parte fracionária representa correções de bugs ou ajustes que afetam poucas features.

## Gerenciamento de Projeto
### Processo

O projeto será implementado com o auxílio da ferramenta **Automated Kanban** do GitHub e será composto por 5 Sprints, sendo elas:

| Etapa | Descrição |
| --- | --- |
| 1º | Análise e especificação do Problema |
| 2º | Projeto dos requisitos e de artefatos do sistema |
| 3º | Desenvolvimento da solução |
| 4º | Implantação e testes funcionais |
| 5º | Testes de usabilidade e apresentação da solução |

Para cada etapa, irá ocorrer um *brainstorming* que definirá os Backlogs, suas datas de entrega e seus responsáveis.

### Ferramentas
Para a execução do projeto serão necessárias algumas ferramentas, para diversas tarefas desde comunicação à prototipação.

- Comunicação
    - WhatsApp
    - Microsoft Teams
- Codificação
    - Visual Studio Code
- Prototipação
    - Figma
    - Adobe XD

O **Figma** e **Adobe XD** foram escolhidos pelo fato de os integrantes do time possuirem expertise nas duas ferramentas e ambas trabalharem bem em conjunto.

O **Visual Studio Code** foi escolhido pelo fato de ser um editor de código *open source*, gratuito, multi-linguagem e multi-plataforma que pode ser adaptado para usos específicos com a adição de extenções.

O **Whatsapp** foi escolhido como uma das ferramentas de comunicação por ser o mais utilizado por todos da equipe.

O **Teams** foi escolhido por possuir recursos que facilitam a gerência do trabalho em equipe como calendários e arquivos compartilhados.
