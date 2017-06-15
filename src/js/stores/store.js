import {observable, action} from 'mobx';
import participantsAPI from '../lib/api/participants';
import data from '../../assets/data/quiz.json';

class Store {

  @observable
  name = `msk-quiz`

  @observable
  currentQuestion = 0

  @observable
  selectedAnswer = ``;

  @observable
  answers = [];

  @observable
  lastAnswer = false;

  @observable
  currentImage = `metafloristiek`;

  @action
  nextQuestion = () => {
    this.answers.push(this.selectedAnswer);
    this.selectedAnswer = ``;

    if (this.currentQuestion + 1 === data.vragen.length) {
      this.lastAnswer = true;
      return;
    }
    this.currentQuestion++;
  }

  @action
  handleAnswer = answer => {
    this.selectedAnswer = answer;
  }

  @action
  handleEmail = email => {
    participantsAPI.create(this.answers, email);
  }

  @action
  setImage = img => {
    this.currentImage = img;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
