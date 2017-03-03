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
      header: true,
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
    // transparentScrollbar: true,
    displaySettings: true,
  },
  widgetBookmarks: {
    components: {
      body: true,
      header: true,
    },
    dimensions: {
      width: 700,
      height: 400,
    },
    position: {
      top: 100,
      left: 100,
    },
    transparentBg: true,
    transparentScrollbar: true,
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
  widgetSidebar: {
    components: {
      // body: true,
    },
    position: {
      top: 0,
      bottom: 0,
      left: 0,
    },
    dimensions: {
      // width: 200,
    },
  },
  widgetSlider: {
    components: {
      // body: true,
    },
    position: {
      right: 0,
      bottom: 0,
      left: 0,
    },
    dimensions: {
      // height: 90,
    },
  },
  widgetYoutubePlayer: {
    components: {
      body: true,
    },
    dimensions: {
      width: 500,
      height: 650,
    },
    position: {
      top: 20,
      left: 40,
    },
    transparentScrollbar: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG: {
      // console.log('REDUCER', action)
      const { widgetName, widgetConfig: { key, value, category } } = action;
      const valueTest = typeof value === 'boolean' ? !value : value;
      let configToUpdate;

      if (category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [category]: {
              ...state[widgetName][category],
              [key]: valueTest,
            },
          },
        };
      }

      if (!category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [!category && key]: [!category] && valueTest,
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
