import React from 'react';

// import TodoListContainer from '../containers/TodoListContainer.js';
import YoutubePlayer from './YoutubePlayer/YoutubePlayer.jsx';
import SliderContainer from '../containers/SliderContainer.js';
import Greet from './Greet/redux/container.js';
import Quote from './Quote/redux/container.js';
// import Widget from './Widget/Widget.jsx';
import Weather from './Weather/redux/container.js';

const RouteHome = () => (
  <div>
    {/* <TodoListContainer /> */}
    <YoutubePlayer />
    <SliderContainer />
    <Greet />
    <Quote />
    <Weather />
    {/* <Widget title="Widget 1" xPos={100} yPos={100} /> */}
  </div>
);

RouteHome.propTypes = {};

export default RouteHome;
