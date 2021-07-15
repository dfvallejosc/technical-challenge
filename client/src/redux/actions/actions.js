import axios from 'axios';

export const GET_TEXT = 'GET_TEXT';

export function getTexts(text) {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/iecho?text=${text}`)
      .then((response) => {
        console.log(response)
        dispatch({
          type: GET_TEXT,
          payload: response.data.text,
        });
      })
        .catch((err) => { console.log(err); });
    };
  }