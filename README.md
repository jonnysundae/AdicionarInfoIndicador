# AdicionarInfoIndicador

Anos atrás eu criei uma aplicação em PHP enquanto trabalhava em uma agência de veículos no qual tinha a função de adicionar o nome e telefone do vendedor ou indicador nas artes que eu criava. Porque eu fazia os criativos para a equipe compartilhar nas redes sociais, mas eles sempre pediam para adicionar essas informações.

Imagina uma equipe de 10 pessoas, eu com um programa pesado adicionando o nome e telefone de cada? Seria um bom tempo gasto, agora pense isso em um grupo de lojas... Com isto veio esta ideia.

Hoje pego esta ideia do passado e utilizo para adquirir conhecimento enquanto treino minhas novas habilidades. Tenho uma visão de uma aplicação maior, agora utilizando **React**, no qual servirá para centenas de lojas, me fazendo explorar mais sobre **bancos de dados**, **autenticação** e **autorização**. 

## v0.01

- Criado dois componentes no React, sendo um pai e outro filho: **`imprimirImagem`** e **`gerarImagem`**:
	O componente **`gerarImagem`** é o responsável por receber do usuário os valores de texto, altura e largura e envia para o **`imprimirImagem`**, que retorna um `canvas` no qual sempre será atualizado toda vez que os valores forem alterados, assim mostrando como ficaria aquele texto naquela posição na imagem.

A ideia é utilizar esses componentes para adquirir informações pro banco de dados, que futuramente será construído.
