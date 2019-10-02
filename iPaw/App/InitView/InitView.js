//
//  InitView
//  iPaw
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import React from "react"
import { LinearGradient } from "expo"


export default class InitView extends React.Component {

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

	onFbbuttonPressed = () => {
	
	}

	onLoginbuttonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("LoginView")
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
							source={require("./../../assets/images/noise.png")}
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
						<Image
							source={require("./../../assets/images/illustration.png")}
							style={styles.illustrationImage}/>
						<Text
							style={styles.welcomeToIpawPetText}>Welcome to iPaw.{"\n"}Pet health. Redefined.</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 48,
								marginLeft: 30,
								marginRight: 29,
								marginBottom: 29,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<TouchableOpacity
								onPress={this.onFbbuttonPressed}
								style={styles.fbbuttonButton}>
								<Text
									style={styles.fbbuttonButtonText}>Facebook</Text>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.accbuttonView}>
								<Text
									style={styles.createAccountText}>Create Account</Text>
							</View>
						</View>
						<TouchableOpacity
							onPress={this.onLoginbuttonPressed}
							style={styles.loginbuttonButton}>
							<Text
								style={styles.loginbuttonButtonText}>Already have an account? Login</Text>
						</TouchableOpacity>
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
		backgroundColor: "transparent",
		opacity: 0.02,
		resizeMode: "cover",
		height: 667,
	},
	mainView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 55,
		height: 612,
	},
	logoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 49,
		height: 64,
		marginRight: 161,
	},
	path683Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		height: 22,
		marginLeft: 17,
		marginRight: 7,
	},
	path684Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 12,
		width: 12,
		top: 0,
		height: 15,
	},
	path685Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 14,
		top: 9,
		height: 13,
	},
	path687Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 2.8,
		backgroundColor: "transparent",
	},
	illustrationImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 184,
		marginTop: 104,
	},
	welcomeToIpawPetText: {
		color: "white",
		fontFamily: ".SFNSDisplay",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 30,
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 275,
		marginTop: 34,
	},
	fbbuttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	fbbuttonButton: {
		backgroundColor: "rgb(54, 83, 162)",
		borderRadius: 4,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 30,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 155,
		height: 48,
	},
	fbbuttonButtonText: {
		color: "white",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	accbuttonView: {
		backgroundColor: "white",
		borderRadius: 4,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 30,
		shadowOpacity: 1,
		width: 154,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	createAccountText: {
		backgroundColor: "transparent",
		color: "rgb(70, 72, 85)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	loginbuttonButton: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 60,
		marginLeft: 1,
	},
	loginbuttonButtonText: {
		color: "white",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	loginbuttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
