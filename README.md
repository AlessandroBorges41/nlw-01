# Projeto Ecoleta - Next Level Week #1

> Projeto construído durante o Next Level Week #NLW01. 

  Na contrução da solução foram demostrados os conceitos e técnicas do uso de NodeJs, JavaScript, TypeScript, React e outros. 
  Em três sub-projetos back-end, front-end(web) e Mobile. 

![](https://user-images.githubusercontent.com/11083462/83936987-317aee00-a79f-11ea-98e2-dd8f1f0ba7db.PNG)
![](https://user-images.githubusercontent.com/11083462/83936992-43f52780-a79f-11ea-9b1a-f94842ea970c.PNG)

## Tecnologias

JavaScript, NodeJs, React, TypeScript, SqlIte e outros:

## Pacotes 

Nodejs (https://nodejs.org/en/download/)
O instalador do Node.js. já inclui o gerenciador de pacotes do NPM.

Express

```sh
npm install express
```
Caso falte alguma dependencia do pacote "express" pode ser instalado como mostrado abaixo:
```sh
npm install @types/expess -D
```
No caso acima o -D é para instalações em ambiente de desevolvimento.

TypeScript

Para rodar e testar código typeScript no Visual Code precisamos instalar o pacote ts-node, da seguinte forma:
```sh
npm install ts-node -D
npm install typescript -D
```
Knex
Para trabalhar com o banco de dados SQLite instalamos o pacote Knex.
```sh
$ npm install knex --save
```
SQLite 
```sh
$ npm install sqlite3
```

Biblioteca para trabalho com mapas

Leaflet
```sh
npm install leaflet react-leaflet
```
Para consumir dados da api com React
```sh
npm install axios
```

O projeto também faz uso da api fornecida pelo IBGE.

```sh
https://servicodados.ibge.gov.br/api/v1/localidades/estados
https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
```

Mobile:

Para cria e trapalhar com o aplicaivo mobile fizemos uso do pacote expo e algumas dependencias, sua form de instalar segue abaixo:

```sh
npm install -g expo-cli
npm install expo-location
```

Para trabalhar com Upload, precisamos usar o pacote "multer".
```sh
npm install multer
```





