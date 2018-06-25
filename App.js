import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer } from './todoListRedux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer, undefined, applyMiddleware(thunk));
const persistor = persistStore(store);

import Index from './Index';

const AppWithStore = () => (

    <Provider store={store}>
        <PersistGate  persistor={persistor} >
            <Index />
        </PersistGate>
    </Provider>

    );


export default AppWithStore;

