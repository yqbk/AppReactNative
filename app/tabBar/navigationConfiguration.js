'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'
import TestScreen from '../testScreen'


const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  TabThreeNavigation: { screen: TabThreeNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: '#81D4FA',
// background color is for the tab component
    showIcon: true,
    showLabel: false,
    labelStyle: {
    },
    indicatorStyle: {
      // todo disable indicator at all
      height: 0,
    },
    style: {
      height: 40,
      backgroundColor: '#0288D1'
    }
  },
   tabBarPosition: 'bottom'
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
