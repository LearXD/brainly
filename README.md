# Brainly Api for NodeJs 💚

An api that obtains data from Brainly directly through the API, using NodeJs

## Installation

```bash
npm i brainly-api
```

or

```bash
npm i https://github.com/LearXD/brainly-api
```

## Usage

```js
const brainly = require("brainly-api");

const brainly = new Brainly({ language: 'pt' })

const search = await brainly.search('Who discovered Brazil?')
const answers = await brainly.getQuestionById(search.results[0].question.id)

console.log(`Answer 1: ${answers.data.questionById.answers.nodes[0]?.content}`)
console.log(`Answer 2: ${answers.data.questionById.answers.nodes[1]?.content}`)
```

## Support

Be free to submit PRs and Issues if necessary

## Author

- [LearXD](https://learxd.dev)