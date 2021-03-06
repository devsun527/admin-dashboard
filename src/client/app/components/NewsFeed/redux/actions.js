export const SET_FILTERS = 'SET_FILTERS';
export const TOGGLE_ACTIVE_VIEW = 'TOGGLE_ACTIVE_VIEW';
export const GET_SOURCES_FAILED = 'GET_SOURCES_FAILED';
export const GET_ACTIVE_SOURCES_FAILED = 'GET_ACTIVE_SOURCES_FAILED';
export const GET_FILTERED_SOURCES_FAILED = 'GET_FILTERED_SOURCES_FAILED';
export const GET_FILTERED_CATEGORIES_FAILED = 'GET_FILTERED_CATEGORIES_FAILED';
export const GET_SOURCE_LOGOS_FAILED = 'GET_SOURCE_LOGOS_FAILED';
export const SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW';
export const SET_SOURCES = 'SET_SOURCES';
export const SET_VISIBLE_SOURCES = 'SET_VISIBLE_SOURCES';
export const SET_VISIBLE_ARTICLES = 'SET_VISIBLE_ARTICLES';
export const GET_SOURCES_AND_FILTERS_REQUESTED = 'GET_SOURCES_AND_FILTERS_REQUESTED';

export const GET_ARTICLES_REQUESTED = 'GET_ARTICLES_REQUESTED';
export const GET_ARTICLES_SUCCEEDED = 'GET_ARTICLES_SUCCEEDED';
export const GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED';

export const ADD_FILTERED_CATEGORY_REQUESTED = 'ADD_FILTERED_CATEGORY_REQUESTED';
export const ADD_FILTERED_CATEGORY_SUCCEEDED = 'ADD_FILTERED_CATEGORY_SUCCEEDED';
export const ADD_FILTERED_CATEGORY_FAILED = 'ADD_FILTERED_CATEGORY_FAILED';

export const REMOVE_FILTERED_CATEGORY_REQUESTED = 'REMOVE_FILTERED_CATEGORY_REQUESTED';
export const REMOVE_FILTERED_CATEGORY_SUCCEEDED = 'REMOVE_FILTERED_CATEGORY_SUCCEEDED';
export const REMOVE_FILTERED_CATEGORY_FAILED = 'REMOVE_FILTERED_CATEGORY_FAILED';

export const ADD_FILTERED_SOURCE_REQUESTED = 'ADD_FILTERED_SOURCE_REQUESTED';
export const ADD_FILTERED_SOURCE_SUCCEEDED = 'ADD_FILTERED_SOURCE_SUCCEEDED';
export const ADD_FILTERED_SOURCE_FAILED = 'ADD_FILTERED_SOURCE_FAILED';

export const REMOVE_FILTERED_SOURCE_REQUESTED = 'REMOVE_FILTERED_SOURCE_REQUESTED';
export const REMOVE_FILTERED_SOURCE_SUCCEEDED = 'REMOVE_FILTERED_SOURCE_SUCCEEDED';
export const REMOVE_FILTERED_SOURCE_FAILED = 'REMOVE_FILTERED_SOURCE_FAILED';

export const ADD_SOURCE_REQUESTED = 'ADD_SOURCE_REQUESTED';
export const ADD_SOURCE_SUCCEEDED = 'ADD_SOURCE_SUCCEEDED';
export const ADD_SOURCE_FAILED = 'ADD_SOURCE_FAILED';

export const REMOVE_SOURCE_REQUESTED = 'REMOVE_SOURCE_REQUESTED';
export const REMOVE_SOURCE_SUCCEEDED = 'REMOVE_SOURCE_SUCCEEDED';
export const REMOVE_SOURCE_FAILED = 'REMOVE_SOURCE_FAILED';


export const setFilters = filters => ({
  type: SET_FILTERS,
  filters,
});


export const toggleActiveView = view => ({
  type: TOGGLE_ACTIVE_VIEW,
  view,
});


export const getSourcesFailed = error => ({
  type: GET_SOURCES_FAILED,
  error,
});


export const getActiveSourcesFailed = error => ({
  type: GET_ACTIVE_SOURCES_FAILED,
  error,
});


export const getFilteredCategoriesFailed = error => ({
  type: GET_FILTERED_CATEGORIES_FAILED,
  error,
});


export const getFilteredSourcesFailed = error => ({
  type: GET_FILTERED_SOURCES_FAILED,
  error,
});


export const setActiveView = activeSourcesKeys => ({
  type: SET_ACTIVE_VIEW,
  activeSourcesKeys,
});


export const setVisibleSources = () => ({
  type: SET_VISIBLE_SOURCES,
});


export const setVisibleArticles = () => ({
  type: SET_VISIBLE_ARTICLES,
});


export const setSources = data => ({
  type: SET_SOURCES,
  data,
});


export const getSourceLogosFailed = error => ({
  type: GET_SOURCE_LOGOS_FAILED,
  error,
});


export const getArticlesRequested = () => ({
  type: GET_ARTICLES_REQUESTED,
});

export const getArticlesSucceeded = payload => ({
  type: GET_ARTICLES_SUCCEEDED,
  payload,
});

export const getArticlesFailed = error => ({
  type: GET_ARTICLES_FAILED,
  error,
});


export const getSourcesAndFiltersRequested = () => ({
  type: GET_SOURCES_AND_FILTERS_REQUESTED,
});


export const addFilteredCategoryRequested = category => ({
  type: ADD_FILTERED_CATEGORY_REQUESTED,
  category,
});

export const addFilteredCategorySucceeded = payload => ({
  type: ADD_FILTERED_CATEGORY_SUCCEEDED,
  payload,
});

export const addFilteredCategoryFailed = error => ({
  type: ADD_FILTERED_CATEGORY_FAILED,
  error,
});


export const removeFilteredCategoryRequested = category => ({
  type: REMOVE_FILTERED_CATEGORY_REQUESTED,
  category,
});

export const removeFilteredCategorySucceeded = payload => ({
  type: REMOVE_FILTERED_CATEGORY_SUCCEEDED,
  payload,
});

export const removeFilteredCategoryFailed = error => ({
  type: REMOVE_FILTERED_CATEGORY_FAILED,
  error,
});


export const addFilteredSourceRequested = source => ({
  type: ADD_FILTERED_SOURCE_REQUESTED,
  source,
});

export const addFilteredSourceSucceeded = payload => ({
  type: ADD_FILTERED_SOURCE_SUCCEEDED,
  payload,
});

export const addFilteredSourceFailed = error => ({
  type: ADD_FILTERED_SOURCE_FAILED,
  error,
});


export const removeFilteredSourceRequested = source => ({
  type: REMOVE_FILTERED_SOURCE_REQUESTED,
  source,
});

export const removeFilteredSourceSucceeded = payload => ({
  type: REMOVE_FILTERED_SOURCE_SUCCEEDED,
  payload,
});

export const removeFilteredSourceFailed = error => ({
  type: REMOVE_FILTERED_SOURCE_FAILED,
  error,
});


export const addSourceRequested = (source, activeSources) => ({
  type: ADD_SOURCE_REQUESTED,
  source,
  activeSources,
});

export const addSourceSucceeded = source => ({
  type: ADD_SOURCE_SUCCEEDED,
  source,
});

export const addSourceFailed = error => ({
  type: ADD_SOURCE_FAILED,
  error,
});


export const removeSourceRequested = (source, activeSources) => ({
  type: REMOVE_SOURCE_REQUESTED,
  source,
  activeSources,
});

export const removeSourceSucceeded = id => ({
  type: REMOVE_SOURCE_SUCCEEDED,
  id,
});

export const removeSourceFailed = error => ({
  type: REMOVE_SOURCE_FAILED,
  error,
});
