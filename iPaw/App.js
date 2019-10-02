//
//  App.js
//  iPaw
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import InitView from "./App/InitView/InitView"
import { Font, DangerZone } from "expo"
import LoginView from "./App/LoginView/LoginView"

const PushRouteOne = createStackNavigator({
	InitView: {
		screen: InitView,
	},
	LoginView: {
		screen: LoginView,
	},
}, {
	initialRouteName: "InitView",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNSText.ttf"),
			".SFNSDisplay": require("./assets/fonts/SFNSDisplay.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<Expo.AppLoading/>); }
		return <AppContainer/>
	}
}
