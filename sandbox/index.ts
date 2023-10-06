import Brainly from "../src/utils/brainly";

const instance = new Brainly({ language: 'en' })
const search = await instance.search('What is the meaning of life?')
const answers = await instance.getQuestionById(search.results[0].question.id)

console.log(`Answer 1: ${answers.data.questionById.answers.nodes[0].content}`)
console.log(`Answer 2: ${answers.data.questionById.answers.nodes[1].content}`)