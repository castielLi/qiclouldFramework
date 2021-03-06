/**
 * Created by apple on 2017/6/6.
 */
'use strict';

import React, {
    Component
} from 'react';
import {
    Provider
} from 'react-redux';
import Root from './modules/Root/root'
import configureStore from './store'
import configureNetwork from './Core/Networking/configureNetwork'
// import FMDB from './Core/DatabaseHelper'
import BaseComponent from './Core/Component'
import Route from './Core/route/router'
import * as router from './modules/routerMap'



export default function App() {


    let store = configureStore();

    //初始化app的http组件
    configureNetwork({
        "Content-Type": "application/json"
    }, 'fetch', false)

    //初始化app的database
    // FMDB.initDatabase()

    //初始化路由表
    Route.initRouteMap(router);


    class InitApp extends BaseComponent {
        constructor() {
            super();

            this.state = {
                isLoading: true,
                store: configureStore(() => {
                    this.setState({
                        isLoading: false
                    })
                })
            }
        }

        render() {

            return (<Provider store={this.state.store}>
                <Root/>
            </Provider>)
        }
    }
    return InitApp;
}