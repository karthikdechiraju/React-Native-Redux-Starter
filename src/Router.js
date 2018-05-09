import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';


const RouterComponent = () => {
	return(
		<Router>
			<Scene key="Test">
				<Scene key="Home" component={Home} hideNavBar initial />
			</Scene>
		</Router>
	)
};


export default RouterComponent;