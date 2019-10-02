//
//  LoginView
//  iPaw
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { View, StyleSheet, Image, TextInput, Text } from "react-native"
import { LinearGradient } from "expo"


export default class LoginView extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <LinearGradient
				start={{
					x: 0.5,
					y: 0,
				}}
				end={{
					x: 0.5,
					y: 1,
				}}
				locations={[0, 1]}
				colors={["rgb(35, 33, 44)", "rgb(62, 67, 83)"]}
				style={styles.viewViewLinearGradient}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/noise-2.png")}
							style={styles.noiseImage}/>
					</View>
					<View
						style={styles.mainView}>
						<View
							style={styles.logoView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/path-683.png")}
									style={styles.path683Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 2,
									right: 2,
									top: 0,
									bottom: 3,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 22,
										marginRight: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 24,
											height: 22,
										}}>
										<Image
											source={require("./../../assets/images/path-684.png")}
											style={styles.path684Image}/>
										<Image
											source={require("./../../assets/images/path-685.png")}
											style={styles.path685Image}/>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/path-687.png")}
										style={styles.path687Image}/>
								</View>
								<Image
									source={require("./../../assets/images/path-686.png")}
									style={styles.path686Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.ipawText}>iPAW</Text>
							</View>
						</View>
						<View
							style={styles.cardsView}>
							<View
								style={styles.cardThreeView}>
								<Text
									style={styles.welcomeBackSignIText}>Welcome back!{"\n"}Sign in to continue to iPaw.</Text>
								<TextInput
									autoCorrect={false}
									placeholder="E-mail address"
									style={styles.inputTextInput}/>
								<TextInput
									autoCorrect={false}
									placeholder="Password"
									secureTextEntry={true}
									style={styles.inputTwoTextInput}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.cardTwoView}/>
							<View
								style={styles.cardView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/pagination.png")}
							style={styles.paginationImage}/>
					</View>
				</View>
			</LinearGradient>
	}
}

const styles = StyleSheet.create({
	viewView: {
		width: "100%",
		height: "100%",
	},
	viewViewLinearGradient: {
		flex: 1,
	},
	noiseImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.02,
		height: 667,
	},
	mainView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		right: 20,
		top: 55,
		height: 569,
		alignItems: "center",
	},
	logoView: {
		backgroundColor: "transparent",
		width: 49,
		height: 64,
	},
	path683Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		height: 22,
		marginLeft: 17,
		marginRight: 7,
	},
	path684Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 12,
		width: 12,
		top: 0,
		height: 15,
	},
	path685Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 14,
		top: 9,
		height: 13,
	},
	path687Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 10,
		height: 14,
		marginTop: 4,
	},
	path686Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 13,
		height: 11,
		marginLeft: 1,
		marginTop: 2,
	},
	ipawText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 2.8,
	},
	cardsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 440,
		marginTop: 21,
	},
	cardThreeView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.3)",
		shadowRadius: 40,
		shadowOpacity: 1,
		height: 420,
	},
	welcomeBackSignIText: {
		backgroundColor: "transparent",
		color: "rgb(36, 33, 52)",
		fontFamily: ".SFNSDisplay",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 32,
		alignSelf: "center",
		width: 275,
		marginTop: 63,
	},
	inputTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(36, 33, 52)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 31,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 103,
	},
	inputTwoTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(172, 172, 172)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 31,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 29,
	},
	cardTwoView: {
		backgroundColor: "white",
		opacity: 0.4,
		shadowColor: "rgba(0, 0, 0, 0.3)",
		shadowRadius: 40,
		shadowOpacity: 1,
		height: 10,
		marginLeft: 20,
		marginRight: 20,
	},
	cardView: {
		backgroundColor: "white",
		opacity: 0.1,
		shadowColor: "rgba(0, 0, 0, 0.3)",
		shadowRadius: 40,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 255,
		height: 10,
	},
	paginationImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 44,
		height: 4,
	},
})
