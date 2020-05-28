/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import resultReducer from './src/store/reducers/results';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({resultReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
