Q01 - Para mudar a cor de um site dinamicamente, usamos condições onde se atende uma condição ela ativa o código, por exemplo: condição 1 sucesso = document.body.style.background = '#73E0E8', isso altera a cor de fundo
Q02 - Para inserir uma imagem fizemos o seguintes passos:
    1 - Criar variavel e atribuir o comando : let img = window.document.createElement('img')
    2 - Configurar os atributos dessa variavel : img.setAttribute('id', 'foto') PS: Em HTML seria por exemplo <section id="foto">
    3 - E por fim configurar na condição qual imagem: img.setAttribute('src', 'img/mas/criancaM.png')
Q03 - Sim, foi usado bastante IF = condição simples, IF e ELSE = Condição composta, IF e ELSE {IF} = condição aninhada e IF, ELSE IF e ELSE = condição aninhada
___________________________________________________________________________

O Construtor  new Date()  retorna um OBJETO de DATA com: DIA da SEMANA, DATA, HORA ATUAL e FUSO HORÁRIO. Ex:

Fri Nov 04 2022 08:30:47 GMT-0300 (Horário Padrão de Brasília)



  Por ser um Construtor,  new Date()  permite-nos criar OBJETOS de DATA ESPECÍFICOS A PARTIR DELE. Para fazer isto, primeiramente, para facilitar, guarda-se o  new Date()  dentro de uma variável, desta forma:

data = new Date()

  E depois você pode usar algum destes MÉTODOS:

data.getFullYear()         Retorna o ANO atual (yyyy)

data.getMonth()	         Retorna o MÊS atual (0-11)

data.getDate()	         Retorna o DIA atual (1-31)

data.getDay()	         Retorna o DIA da SEMANA atual como um NÚMERO (0-6)

*0 = domingo; 6 = sábado.

data.getHours()	         Retorna a HORA atual (0-23)

data.getMinutes()         Retorna os MINUTOS atuais (0-59)

data.getSeconds()        Retorna os SEGUNDOS atuais (0-59)

data.getMilliseconds() Retorna os MILISSEGUNDOS atuais (0-999)

data.getTime()	         Retorna os MILISSEGUNDOS desde o dia 1 de Janeiro de 1970 (WTF? xD)