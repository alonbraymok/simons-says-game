/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './src/store/reducers/user';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({userReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
