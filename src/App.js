/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'

import Navigator from './config/NavigatorConfig.js'
import Store from './store'

export default () => (
    <Provider store={Store}>
        <Navigator />
    </Provider>
)