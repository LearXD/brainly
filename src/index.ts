import Brainly from "./utils/brainly";

(async () => {
  const instance = new Brainly();
  const response = await instance.search('Quem foi o primeiro presidente do Brasil?');
  const question = await instance.getQuestionById(response.results[0].question.id) //

  console.log(question.data.questionById.answers)
})()

