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

### Ensinar o computador

- Algoritmos: Sequênica de passos, con

