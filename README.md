# Node com SQLite
Apenas uma demo de como gravar no SQLite usando WebApi com Express.

Antes de tentar excutar usando o `npm run start`, execute o `npm install` para instalar todas dependências.


##### Listar todos os logs.
```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/relatorio",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "0b9dc0f5-1f74-4060-a639-4b4f4c97777f"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

##### Enviar um log de registro.
```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/relatorio",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "Postman-Token": "670c19d3-1e3c-4a9e-817f-435efedc9b86"
  },
  "processData": false,
  "data": "{\n\t\"action\": 1,\n\t\"input\": 44,\n\t\"description\": \"Banheiro\",\n\t\"datetime\": \"2018-11-25T18:25:10.994Z\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

##### No JSON enviado
1. `action` É `0` e `1` onde 0 é desligar e 1 é ligado.
2. `input` É o id do pino ou relé que irá ser registrado.
3. `description` Uma descrição qualquer como: `Lâmpaada da Sala`.
4. `datetime` É a data do evento no formato `ISO 8601` criando pelo JavaScript usado em JSON com exemplo `2018-11-25T18:25:10.994Z`


##### Realizar uma pesquisa nos registros.
```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/relatorio/filter",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "Postman-Token": "8350f1b2-e7b2-41aa-911d-61e1e2198ec9"
  },
  "processData": false,
  "data": "{\n\t\"action\": 1,\n\t\"input\": 26,\n\t\"start\": \"2018-11-25T18:17:09.036Z\",\n\t\"end\": null\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```