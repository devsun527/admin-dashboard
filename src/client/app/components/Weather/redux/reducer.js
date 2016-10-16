import { FETCH_WEATHER_SUCCEEDED } from './actions.js';

const INITIAL_STATE = {
  data: {
    weatherList: [],
  },
  config: {
    header: true,
    background: true,
    posX: 200,
    posY: 200,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        data: {
          weatherList: [
            ...state.data.weatherList,
            action.payload.data,
          ],
        },
      };
    }

    default: {
      return state;
    }
  }
};
