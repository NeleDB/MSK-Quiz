import {observable, action} from 'mobx';
import participantsAPI from '../lib/api/participants';
import data from '../../assets/data/quiz.json';
import {browserHistory} from 'react-router';


class Store {

  init = () => {
    participantsAPI.read().then(d => console.log(d.participants));
  }

  constructor() {
    this.init();
  }

  @observable
  name = `msk-quiz`

  @observable
  currentQuestion = 0

  selectedAnswer = ``;
  answers = [];

  @action
  nextQuestion = () => {
    this.answers.push(this.selectedAnswer);

    if (this.currentQuestion + 1 === data.vragen.length) {
      // window.location.pathname = `/send`;
      browserHistory.push(`/end`);
    }
    this.currentQuestion++;
  }

  @action
  handleAnswer = answer => {
    this.selectedAnswer = answer;
  }

  @action
  handleEmail = email => {
    console.log(this.answers);
    participantsAPI.create(this.answers, email).then(a => console.log(a));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
