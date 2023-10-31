# Beckend Grupo 99

## Explicação do Sistema

O sistema foi desenvolvido com o objetivo de oferecer suporte para a gestão de uma oficina de manutenção de eletrodomésticos.
Os clientes trazem seus aparelhos defeituosos, que passam por uma análise realizada pelos funcionários. Com base nessa análise,
os funcionários propõem um orçamento, que é apresentado ao cliente para sua análise e consideração. O cliente tem a liberdade de
aprovar ou recusar a proposta de orçamento, e também pode acompanhar o progresso e andamento do serviço em tempo real.

## Execução do projeto
- docker-compose up -d
- npm install
- npm start

## Execução dos testes
- npm run test


## Entidades
### `User`
```
 {
  "id": "number",
  "name": "string",
  "email": "string",
  "type": "string (client | employee | admin)",
  "password": "string",
  "phoneNumber": "string (optional)"
}
```
### `Quote`
```
{
  "id": "number",
  "value": "number",
  "hoursExpected": "number",
  "serviceOrderId": "number"
}
```
### `ServiceOrder`
```
{
  "id": "number",
  "device": "string",
  "problemDescription": "string",
  "status": "string (waitingApproval | refused | repairing | finished)",
  "clientId": "number"
}
```

## Rotas

### `GET /`

Retorna 200 OK. Usado para validar se aplicação está de pé.

### `POST /login`

- Body: 
```
{
  "email": "string",
  "password": "string"
}
```

- Response: 
```
{
  "jwt": "string",
}
```

### `POST /user`
- Body: 
```
{
  "name": "teste",
  "email": "client@client.com",
  "type": "client",
  "phoneNumber"?: "31 999999999",
  "password": "client"
}
```

- Response: 
```
{
  "id": "number",
  "name": "string",
  "email": "string",
  "type": "string (client | employee | admin)",
  "password": "string",
  "phoneNumber": "string (optional)"
}
```

### `GET /user`
-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Query: 
```
{
  "name"?: "teste",
  "email"?: "client@client.com",
  "type"?: "client",
  "phoneNumber"?: "31 999999999",
}
```
- Response: 
```
"users": [
  {
    "id": "number",
    "name": "string",
    "email": "string",
    "type": "string (client | employee | admin)",
    "password": "string",
    "phoneNumber": "string (optional)"
  }
]
```

### `POST /serviceOrder`

Cria uma ordem de serviço. Se o tipo de usuário passado no jwt for "client", utiliza o clientId do mesmo.

-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Body: 
```
{
  "device": "string",
  "problemDescription": "string",
  "status": "string (waitingApproval | refused | repairing | finished)",
  "clientId"?: "number"
}
```

- Response: 
```
  {
    "id": "number",
    "device": "string",
    "problemDescription": "string",
    "status": "string (waitingApproval | refused | repairing | finished)",
    "clientId": "number"
  }
```

### `PATCH /serviceOrder/:id`

-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Body: 
```
{
  "device"?: "string",
  "problemDescription"?: "string",
  "status"?: "string (waitingApproval | refused | repairing | finished)",
  "clientId"?: "number"
}
```

- Response: 
```
  {
    "id": "number",
    "device": "string",
    "problemDescription": "string",
    "status": "string (waitingApproval | refused | repairing | finished)",
    "clientId": "number"
  }
```

### `GET /serviceOrder`
Lista as ordems de serviço. Se o tipo de usuário passado no jwt for "client", utiliza o clientId do mesmo.

-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Query: 
```
{
  "device"?: "string",
  "problemDescription"?: "string",
  "status"?: "string (waitingApproval | refused | repairing | finished)",
  "clientId"?: "number"
}
```
- Response: 
```
"serviceOrders": [
  {
    "id": "number",
    "device": "string",
    "problemDescription": "string",
    "status": "string (waitingApproval | refused | repairing | finished)",
    "clientId": "number",
    "quote": {
      "id": "number",
      "value": "number",
      "hoursExpected": "number",
      "serviceOrderId": "number"
    }
  }
]
```

### `POST /quote`

-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Body: 
```
{
  "value": "number",
  "hoursExpected": "number",
	"serviceOrderId": "number"
}
```
- Response: 
```
"serviceOrders": [
  {
    "id": "number",
    "value": "number",
    "hoursExpected": "number",
    "serviceOrderId": "number"
  }
]
```

### `GET /quote`

-header ``authorization: JWT_TOKEN`` (obtido na rota de login)
- Query: 
```
{
  "id"?: "number",
	"serviceOrderId"?: "number"
}
```
- Response: 
```
"serviceOrders": [
  {
    "id": "number",
    "value": "number",
    "hoursExpected": "number",
    "serviceOrderId": "number"
  }
]
```