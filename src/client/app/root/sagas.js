import { fork } from 'redux-saga/effects';

import { saga as todoSagas } from '../components/Todo';
import { saga as quoteSagas } from '../components/Quote';
import { saga as youtubePlayerSagas } from '../components/YoutubePlayer';
import { saga as greetSagas } from '../components/Greet';
import { saga as wallpaperSagas } from '../components/WallpaperPicker';
import { saga as newsFeedSagas } from '../components/NewsFeed';

function* rootSagas() {
  yield* [
    fork(todoSagas),
    fork(quoteSagas),
    fork(youtubePlayerSagas),
    fork(greetSagas),
    fork(wallpaperSagas),
    fork(newsFeedSagas),
  ];
}

export default rootSagas;
