### Grupo
- Giuliano Penido de Paula Júnior ( Fullstack )
- Pedro Henrique Alves Moutinho ( Fullstack )
- Rafael Neves ( Fullstack )
- Mateus Brandão Damasceno Góes ( Backend )

### Descrição do Projeto
O objetivo do sistema é de oferecer suporte para a gestão de uma oficina de manutenção de eletrodomésticos. Os clientes trazem seus aparelhos defeituosos, que passam por uma análise realizada pelos funcionários. Com base nessa análise, os funcionários propõem um orçamento, que é apresentado ao cliente para sua análise e consideração. O cliente tem a liberdade de aprovar ou recusar a proposta de orçamento, e também pode acompanhar o progresso e andamento do serviço em tempo real.

### Principais Features
- Solicitar Orçamento
- Acompanhar Status da Manutenção
- Aprovar Orçamento
- Gerar Orçamento
- Finalizar Serviço
- Logar como funcionário
- Logar como cliente

### Tecnologias
- Vue
- Postgres
- Github
- Typescript

### Link figma
https://www.figma.com/file/onuOYXS4jN1Y540ymszFVZ/Trabalho-PDS?type=design&node-id=0-1&mode=design&t=4kaRnzJHNfqL095D-0

### Backlog do Produto
- Como funcionário, eu gostaria de criar novos usuários 
- Como cliente, eu gostaria de solicitar um novo serviço 
- Como cliente, eu gostaria de acompanhar o andamento dos serviços que solicitei
- Como cliente, eu gostaria de aprovar ou recusar um orçamento para um serviço que eu solicitei
- Como funcionário, eu gostaria de visualizar os serviços para os quais o orçamento não foi criado
- Como funcionário, eu gostaria de iniciar um novo serviço e atualizar o andamento do mesmo 
- Como cliente, eu gostaria de receber notificações por e-mail quando houver uma atualização no status de um serviço que solicitei.
- Como funcionário, eu gostaria de visualizar as peças disponíveis no estoque
- Como funcionário, eu gostaria de alocar peças do estoque para um reparo
- Como cliente, eu gostaria de avaliar um serviço
- Como funcionário, eu gostaria de receber notificações por e-mail quando um cliente aprovar um orçamento para um serviço.
- Como funcionário, eu gostaria de registrar o tempo gasto em cada etapa de um serviço para fins de relatório e análise.
- Como funcionário, eu gostaria de gerar relatórios mensais sobre o desempenho da equipe e o status dos serviços em andamento. 
- Como cliente, eu gostaria de solicitar um novo orçamento sem precisar preencher todos os dados novamente

### Backlog do Sprint 1
#### História 1:  Como usuário, eu gostaria de me logar no sistema
Tarefas:

- Preparação do ambiente Node.js, Express e Postgres [ Rafael ] ✅
- Preparação do ambiente Vue.js [ Pedro ] ✅
- Criação da entidade de Usuário [ Rafael ] ✅
- Criação de rota para cadastrar cliente [ Rafael ] ✅
- Criação de rota para logar no sistema [ Rafael ] ✅
- Criação da tela de cadastro de usuários [ Pedro ] ✅
- Criação da tela de login [ Pedro ] ✅

#### História 2: Como funcionário, eu gostaria de criar novos usuários
Tarefas:

- Criar tela que lista os usuários [ Pedro ] ✅
- Criar rota que lista os usuários [ Rafael ] ✅
- Criar rota que salva um novo usuário [ Rafael ] ✅
- Criar formulário para inserção de novo usuário [ Pedro ] ✅


#### História 3: Como cliente, eu gostaria de solicitar um novo serviço
Tarefas:

- Criar a entidade de Serviço [ Giuliano ] ✅
- Adicionar botão de solicitar novo serviço a tela inicial do cliente [ Pedro ] ✅
- Criar tela para solicitação de novo serviço [ Pedro ] ✅
- Criar tela para detalhamento de um serviço [ Pedro ]
- Criar rota para criação de novo serviço [ Giuliano ]

#### História 4: Como cliente, eu gostaria de acompanhar o andamento dos serviços que solicitei
Tarefas:

- Criar um componente de serviço [ Giuliano ]
- Criar componente de lista de serviços [ Giuliano ]
- Adicionar à tela inicial do cliente uma lista dos serviços em aberto [ Rafael ]
- Adicionar à tela inicial do cliente uma lista dos serviços já concluídos do cliente [ Rafael ]
- Criar endpoint que retorna a lista de serviços [ Mateus ]
- Adicionar à tela inicial do cliente um filtro para os serviços [ Rafael ]


#### História 5: Como cliente, eu gostaria de aprovar ou recusar orçamento para um serviço que eu solicitei
Tarefas:

- Implementar tela para visualização do orçamento [ Giuliano ]
- Implementar rota de aprovação/reprovação do orçamento [ Pedro ]
- Implementar botão para aprovar orçamento [ Giuliano ]
- Implementar botão para reprovar orçamento [ Giuliano ]

#### História 6: Como funcionário, eu gostaria de visualizar os serviços para os quais o orçamento não foi criado
Tarefas:

- Criar entidade de Orçamento [ Pedro ] ✅
- Criar tela para listagem de serviços pendentes de orçamento [ Rafael ]
- Implementar rota que lista serviços pendentes de orçamento [ Pedro ]
- Implementar rota de criação de orçamento [ Pedro ]
- Implementar tela com formulário para criação de orçamento [ Giuliano ]


#### História 7: Como funcionário, eu gostaria de iniciar um novo serviço e atualizar o andamento do mesmo
Tarefas:

- Criar rota para atualizar status do serviço [ Pedro ]
- Criar tela que lista serviços que já passaram da etapa de orçamento [ Rafael ]
- Implementar ação de “iniciar serviço” [ Giuliano ]
- Implementar ação de “serviço aguardando peças” [ Giuliano ]
- Implementar ação de “serviço finalizado” [ Giuliano ]
- Implementar ação de “serviço entregue” [ Giuliano ]


#### História 8: Como cliente, eu gostaria de receber notificações por e-mail quando houver uma atualização no status de um serviço que solicitei.
Tarefas:

- Configurar serviço de smtp [ Pedro ]
- Enviar e-mail para cliente cadastrado sempre que houver uma atualização no serviço [ Pedro ]
 
