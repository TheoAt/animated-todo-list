import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "./screens/home-screen"
import AboutScreen from './screens/about-screen'
import Sidebar from "./components/sidebar"

const Drawer = createDrawerNavigator()

const App = () => {
    return(
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent={props => <Sidebar {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'back',
                overlayColor: '#000000'
            }
        }>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

export default App