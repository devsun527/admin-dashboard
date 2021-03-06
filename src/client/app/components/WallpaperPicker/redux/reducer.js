import {
  GET_ACTIVE_WALLPAPER_REQUESTED,
  GET_ACTIVE_WALLPAPER_SUCCEEDED,
  GET_ACTIVE_WALLPAPER_FAILED,

  GET_WALLPAPERS_REQUESTED,
  GET_WALLPAPERS_SUCCEEDED,
  GET_WALLPAPERS_FAILED,

  GET_PINNED_WALLPAPERS_REQUESTED,
  GET_PINNED_WALLPAPERS_SUCCEEDED,
  GET_PINNED_WALLPAPERS_FAILED,

  TOGGLE_PINNED_WALLPAPERS,

  PIN_WALLPAPER_REQUESTED,
  PIN_WALLPAPER_SUCCEEDED,
  PIN_WALLPAPER_FAILED,

  SET_WALLPAPER,

  SAVE_WALLPAPER_REQUESTED,
  SAVE_WALLPAPER_SUCCEEDED,
  SAVE_WALLPAPER_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetWallpaperPicker',
  widgetName: 'Wallpaper picker',
  activeWallpaperObj: {},
  wallpapers: Array(20).fill({}),
  pinnedWallpapers: [],
  pinToggledWallpaper: {},
  showPinnedWallpapers: false,
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,

    pinWallpaper: {
      inProgress: false,
      error: false,
      errorMessage: undefined,
    },

    saveWallpaper: {
      inProgress: false,
      error: false,
      errorMessage: undefined,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACTIVE_WALLPAPER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_WALLPAPER_SUCCEEDED: {
      return {
        ...state,
        activeWallpaperObj: action.data,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load image',
        },
      };
    }


    case GET_WALLPAPERS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_WALLPAPERS_SUCCEEDED: {
      const mappedWallpapers = action.data.data.response.map(d => ({
        id: d.id,
        url: d.image.url,
        thumbUrl: d.image.thumb.url,
      }));

      return {
        ...state,
        wallpapers: [
          ...mappedWallpapers,
        ],
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_WALLPAPERS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load image',
        },
      };
    }


    case GET_PINNED_WALLPAPERS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_PINNED_WALLPAPERS_SUCCEEDED: {
      const pinnedWallpapers = Object.keys(action.data).map(wallpaper => action.data[wallpaper]) || [];
      return {
        ...state,
        pinnedWallpapers,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_PINNED_WALLPAPERS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load pinned wallpapers',
        },
      };
    }


    case TOGGLE_PINNED_WALLPAPERS: {
      return {
        ...state,
        showPinnedWallpapers: !state.showPinnedWallpapers,
      };
    }


    case PIN_WALLPAPER_REQUESTED: {
      return {
        ...state,
        pinToggledWallpaper: action.wallpaperObj,
        asyncStatus: {
          ...state.asyncStatus,
          pinWallpaper: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case PIN_WALLPAPER_SUCCEEDED: {
      let newState = [];
      if (action.alreadyPinned) {
        newState = state.pinnedWallpapers.filter(wallpaper => wallpaper.id !== action.data.id);
      } else {
        newState = [
          ...state.pinnedWallpapers,
          action.data,
        ];
      }

      return {
        ...state,
        pinnedWallpapers: [
          ...newState,
        ],
        asyncStatus: {
          ...state.asyncStatus,
          pinWallpaper: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case PIN_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          pinWallpaper: {
            inProgress: false,
            error: false,
            errorMessage: 'Pin wallpaper failed',
          },
        },
      };
    }


    case SET_WALLPAPER: {
      return {
        ...state,
        activeWallpaperObj: action.wallpaperObj,
      };
    }

    case SAVE_WALLPAPER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          saveWallpaper: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case SAVE_WALLPAPER_SUCCEEDED: {
      return {
        ...state,
        activeWallpaperObj: action.data,
        asyncStatus: {
          ...state.asyncStatus,
          saveWallpaper: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case SAVE_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          saveWallpaper: {
            inProgress: false,
            error: true,
            errorMessage: 'Save wallpaper failed',
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
