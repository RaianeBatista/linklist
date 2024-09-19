### O que é HTML?

- Estruturar texttos, criar links, imagens vídeos, etc...
- Hypertext Markup Language: linguagem de marcação de texto
- Hipertexto
- Texto que contém links

### Markup

- MArcação do texto
- Elemento HTML ou tag: <br>
  Existem inúmeras tags e cada uma delas irá servir para um determindao propósito. Ex: imagem, texto grande, link, parágrafo, etc...

### Sintaxe de uma tag

- Como escrevemos tags HTML?
<p>conteúdo</p>
<!-- Aqui vem um comentário -->

### Atributos

- Adicionam informações e/ou configurações à uma tag<br>
  Como escrevemos atributos?<br>
  <a href='https://rocketseat.com.br'>Ver site</a>
  <img src='https://th.bing.com/th/id/OIP.wUIQXfnxYPrgF6yp6jPzmwHaDf?w=306&h=165&c=7&r=0&o=5&dpr=1.4&pid=1.7'/>

 <p>Escrever um parágrafo</p>

## O que é CSS:

- Estilos para o HTML
- Cascading Styles Sheets
  Folha de Estilo em Cascata
- Apresentação visual para o cliente

### Declaração

Pedaço de código que irá ditar as propriedades e valores a serem aplicadas a uma elemento HTML

- Como escrevemos?
  body {
  background: black;
  <!-- color: green: Essa linha será ignorada -->
  }

### Cascata

Quando há 2 (ou mais) delcarações a última será maais relevante

body {
background:red;
}
body {
background: blue;
}

### Specificity

- Especialidade: cada seletor tem um peso e a soma dos pesos, será levada em conta para que determinada declaração seja mais específica.
  #id {
  peso 100
  }
  .class {
  peso 10
  }
  element {
  peso 1
  }

- A cascata perde prioridade e é priorizada a especialidade da declaração

### Box Model

- Tudo são caixas <br>
  Todos os elementos HTML serão considerados em uma caixa, assim como uma caixa de papelão

- Caixas possuem determinadas propriedades </br>
  Conteúdo, largura, altura, borda, preenchimento (espaço interno), espaçamento (espaço externo)

### Algoritmos, Lógia de porgramação e Sintaxe

- O que é programação? Ensinar o computador

### Ensinar o computador

- Algoritmos: Sequência de passos, conjuntos de regras
- Lógia de programação: Maneira de pensar
  \_ Sintaxe: Maneira correta de escrever

# O que é JavaScript

- Linguagem de programação: interpretada e executada pelo navegadores
- A inteligência da tríade: HTML é a estrutura, CSS é belezaa e JS é a inteligência
- Não é Java: Apesar do nome ser semelhante, são linguagens diferentes

### Por que JS?

- Aplicativos: para Web, Desktop (Electron) e Mobile (React Native)
- Empresas famosas: Instagram, Google, Netflix, TikTok
- Moderna e Viva: Comunidade e linguagem que cresce cada vez mais

### Instruções e sintaxe

- Toda linguagemé escrita com esses 2 princípios -> alert('Fala, Dev!)//Fala, Dev
- Instrução (declarações): ordens ao computador -> alert(10\*100 + ' abraços')// 1000 abraços!
- Sintaxe: Maneira correta de escrever
- ! Existem palavras reservadas da linguagem. Elas são responsáveis em dar significado a diversas instruções.

### Executadno Javascript

- Podemos executar diretamente no Navegador
- Ferramenta Devtools: apertando o atalho f12 no seu teclado
- Platafomra online: fronteditor.dev, codepen.io
- Projeto local: Arquivos no computador
- Executando no computador
  <!-- em um arquivo index.html -->
  <!-- executa js direto no arquivo .html -->
- <script>alert('Olá!')</script>
<!-- importa um arquivo .js no seu .html -->
- <script src= './script.js'></script>

### Variáveis

- Informações que podem ser em textos, númerosm booleanos (valores lógicos: verdadeiro ou falso) ou dados mais estruturados

### Variáveis e Tipos de dados

- Declaro e atribuo valor:
- let boasVindas = 'Fala, Dev!';
- boasVindas = 'Fala, Dev! Beleza?!'
- Consante não pode mudar o valor
- const serHumano = true;
- serHumano = false -> Erro!
- String -> "", '', ``
- Number -> 1;1.2
- Boolean -> true our false

### Funções

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções
- Usando uma função: alert('Fala, Dev!')
- Criando uma função: function sayHello (text) { return text}
- Criando uma função: function sayHello () { alert('Olá')}
- function sayHello(name) { alert('Olá ' + name )} => sayHello('Raiane')
- function soma(a,b){return a + b} => soma(2,2)
- let resultado = soma(3,56) => alert(resultado)

### Objetos
- Atributos: São as propriedades de um objeto
- Métodos: São as funcionalidade de um objeto
- Criando um objeto: const person = { age:18, drive: function(){}}
- Usando um objeto: person.drive()
- const celular = {<br>
  cor: 'preto',
  ligar: function(){<br>
    alert('Ligando...')<br>}<br>
}<br>
celular.cor<br>
celular.ligar()
- document.querySelector('a').click()

### Introdução ao GitHub
- Repository: Local onde ficará o histótico do seu projeto
- Branch: Linha do tempo
- Commit: Pontos na história
- Stage: Preparação do que será enviado para o ponto na história
- Comandos: 
- git init: inicia o git (repositório) no seu projeto
- git add . : adiciona todos os arquivos modificados, ao stage
- git commit -m 'message here': cria e descreve um ponto na história
- git push: envia alterações para o repositório remoto

### O que é?
- Paltaforma online para colocar seus códigos: através do Git;
- Trabalhar em diversos projetos: Profissional para colaborar em projetos ou trabalhos com times;
- Perfil para mostrar seu trabalho: Portfólio


