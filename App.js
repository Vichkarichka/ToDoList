import React, { Component } from 'react';
import { createStore } from 'redux';
import { reducer } from './todoListRedux'

const store = createStore(reducer);

import Index from './Index';

const AppWithStore = () => <Index store={store} />;


export default AppWithStore;