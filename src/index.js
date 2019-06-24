import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PhotosOfInsta from "./components/PhotosOfInsta/PhotosOfInsta";
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  (<Provider store={store}>
    <PhotosOfInsta/>
  </Provider>
)
, document.getElementById('root'));
