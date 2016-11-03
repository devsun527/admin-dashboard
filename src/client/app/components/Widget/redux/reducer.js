import {
  UPDATE_WIDGET_CONFIG,
} from './actions';

const INITIAL_STATE = {
  widgetGreet: {
    position: {
      right: 60,
      bottom: 60,
    },
    components: {},
    dimensions: {},
  },
  widgetBlog: {
    components: {
      body: true,
    },
    dimensions: {
      width: 300,
      height: 300,
    },
    position: {
      bottom: 100,
      left: 40,
    },
    // transparentBg: true,
    transparentScrollbar: true,
    displaySettings: true,
  },
  widgetQuote: {
    position: {
      bottom: 60,
      left: 60,
    },
    components: {},
    dimensions: {},
  },
  widgetWeather: {
    components: {
      body: true,
    },
    position: {
      top: 400,
      left: 40,
    },
    dimensions: {},
    transparent: true,
  },
  widgetColorPicker: {
    position: {
      right: 0,
      top: '50%',
    },
    components: {},
    dimensions: {},
  },
  widgetToastMessages: {
    position: {
      right: 20,
      top: 20,
    },
    components: {},
    dimensions: {},
  },
  widgetSettings: {
    components: {
      body: true,
    },
    position: {
      top: 20,
      left: 40,
    },
    dimensions: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG: {
      const { widgetName, widgetConfig: { key, value, category } } = action;
      let configToUpdate;

      if (category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [category]: {
              ...state[widgetName][category],
              [key]: !value,
            },
          },
        };
      }

      if (!category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [!category && key]: [!category] && !value,
          },
        };
      }

      return {
        ...state,
        ...configToUpdate,
      };
    }

    default: {
      return state;
    }
  }
};