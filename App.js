import React, { Component } from 'react';
import { createStore } from 'redux';
import { reducer } from './todoListRedux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

import Index from './Index';

const AppWithStore = () =>
    <Provider store={store}>
         <Index/>
    </Provider>

export default AppWithStore;