### `npx create-react-app .`
Colocando o . ao final criamos o projeto na mesma pasta.\

### `npm start` ou `npm run star`
a palavra run é usada é alguns casos.\

**Note: estado são dados que o componente utiliza**

**Note: Ambos os métodos estão corretos, porem o de baixo é mais usado**

**Note: A chamada da função pode ser feita das duas formas, sendo a segunda a mais comum**

**Note: 'bind' é passar os valores de um componente para outro**

**Note: 'arrowfunctions' não precisam da declaração bind da linha 8**

### State com arrays

Todo array precisa de um atributo `key` para otimizar a performasse
**Note: Essa key precisa ser um dado único do elemento que está sendo retornado.**

### Componente React

Um componente é uma classe que tem um metodo `render` e retorna `jsx` ou\
uma função que também retorna `jsx`.
Posso criar componentes de classe ou de função.
Na duvida, separa o componente

**Note: Função que não é componente, construtora ou classe, escre com CamelCase**

Operador Ternário
!!searchValue ? 1condition : 2condition
Se searchValue for verdadeiro faça a 1 condição
!! True
! False

**Note: Quanto mais componentizado for o sistema melhor para testes, pois, os testes podem ser específicos para o componente teste.**

State só pode ser passado dos componentes pais para os filhos do contrário não é possível
quanto o state muda, o que mudar causa a renderização da página.

É importante saber onde colocar o state, pois, ele causa um efeito, cascata na página

**Note: `ssh-keygen -t rsa -f '~/.ssh/github' -C 'email@email.com` Para gerar uma ssh**

após criada a chave precisa ser ativada no windows
`eval $(ssh-agent -s)`
`ssh-add ~/.ssh/github`

## Tests

`npm test -- --coverage`
`npm test -- --watchAll='false' --coverage`
`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
`npm i prop-types`
`npx eslint src/**/*.jsx --fix`