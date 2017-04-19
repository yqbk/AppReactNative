
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import { NavigatorTabOne } from './tabOne/navigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

const middleware = () => applyMiddleware(logger())

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),

    tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),

    tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action, state),

  }),
  middleware(),
)
