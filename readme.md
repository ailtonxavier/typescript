Configurações do ambiente

arquivo tsconfig.json
  {
    "include":[
      "app/**/*"
    ],
    "compilerOptions": {
      "outDir": "dist/js"
      "target": "ES6",
      "noEmitOnError": true
    }
  }

include = local onde estão os arquivos TS para compilação.
compilerOptions = opções/definições do compilador.
outDir = local da pasta destino do TS compilado.
noEmitOnError = Impede a criação de arquivos JS enquanto tiver erros no TS.

////////////////////////////////////////////////////////////////////////

arquivo package.json
  {
    "name": "alurabank",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "server": "lite-server --baseDir=dist",
      "start": "concurrently \"npm run watch\" \"npm run server\"",
      "compiler": "tsc",
      "watch": "tsc -w"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "concurrently": "^6.0.0",
      "lite-server": "^2.6.1",
      "typescript": "^4.2.2"
    }
  }

name = nome do projeto.
main = módulo principal que será executado.
scripts = comandos do diretos do npm ex: npm init, npm test, npm start.
test = testar.
server = inicializa o server.
start = usa o módulo "concurrently" que comandos simultâneos, neste projeto "watch" e "server".
compiler = compilador TypeScript.
watch = compilador TypeScript em modo assistido, roda sem parar.
devDependencies = módulos que não irão para produção.
concurrently = módulo que serve para rodar mais de um script ao mesmo tempo.
lite-server = módulo que roda o servidor.
typescript = módulo que importa o typescript para o projeto.