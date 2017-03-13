import 'publicPath.js';
import store from './react/store';
import Container from './react/container';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
		<Container />
	</Provider>,
  document.getElementById('root')
);
