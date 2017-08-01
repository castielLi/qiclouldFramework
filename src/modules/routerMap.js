/**
 * Created by apple on 2017/6/7.
 */

/**
 * 所有 component 整个框架内只有此处引入
 * navigator 统一进行路由显示
 * 将全部 component 的引用从老式的层级式改为统一入口的扁平式
 */
/*
 * 路由配置项
 * 可配置默认参数 props: params
 */
import Login from './Login/page/login'
import MainTabbar from './MainTabbar/page/mainTabbar'
import TabOneContent from './TabOneConent'

export const MainPage = {
    key: 'Root',
    routeId: 'Root'
}


export const InitialRoute = {
    key: 'Root',
    routeId: 'Root'
}

export const RouteMap = {
    'Root': {
        'Root': {
            component: MainTabbar,
            params: {}
        }
    },
    'MainTabbar': {
        'TabOne': {
            component: TabOneContent,
            params: {}
        },
        'TabTwo': {
            component: TabOneContent,
            params: {}
        }
    },
    'Login': {
        'Login': {
            component: Login,
            params: {}
        }
    }
};