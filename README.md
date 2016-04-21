# Politicos-brasileiros

API com todas as informações dos nossos queridos políticos.

Iniciarei esse projeto como exemplo de uma API feita com Node.js e MongoDB utilizando a arquitetura atômica ensinada no [Be MEAN](http://webschool.io/bemean).

## Entidades

Inicialmente definimos qual são as entidades do nosso sistema, você pode pensar nisso como *classes*:

- Partido
- Político
    + Denúncias
    + Condenações
    + Projetos

Percebeu que temos 3 entidades que estão diretamente ligadas à `Político` caso utilizássemos um banco relacional elas seriam tabelas separadas, porém como usaremos o MongoDb que é baseado em documento essas 3 entidades irão virar documentos *embedados* dentro da coleção de `politicos`.

Após definirmos as entidades precisamos definir cada campo(atômico) que os compõe.

### Partido








