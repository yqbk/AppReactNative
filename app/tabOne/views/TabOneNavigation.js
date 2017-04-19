import React from 'react'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'

const mapStateToProps = state => ({
  navigationState: state.tabOne,
})

class TabOneNavigation extends React.Component {
  // static navigationOptions = {
  //   tabBar:{
  //     label: 'Tab One',
  //     icon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
  //   }
  // }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneNavigation)
