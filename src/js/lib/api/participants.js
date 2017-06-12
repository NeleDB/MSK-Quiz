import fetch from 'isomorphic-fetch';

const url = `/api/participants`;

export default {
  read: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  create: (answers, email) => {
    console.log(answers);
    const method = `POST`;
    const body = new FormData();
    answers.forEach(a =>
      body.append(`answers`, a)
    );
    body.append(`email`, email);
    return fetch(url, {method, body})
      .then(r => r.json());
  },

  delete: _id => {
    const method = `DELETE`;
    return fetch(`${url}/${_id}`, {method});
  }
};
