import { TabNavigator } from 'react-navigation'

import PurchaseHistory from '../views/History.js'
import CameraLayout from '../views/CameraLayout.js'
import Tools from '../views/Tools.js'

import NavBar from '../components/NavBar.js'

export default TabNavigator({
    List: { screen: PurchaseHistory },
    Home: { screen: CameraLayout },
    Tools:  { screen: Tools }
  },{
    initialRouteName: 'Home',
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarComponent: NavBar
  })