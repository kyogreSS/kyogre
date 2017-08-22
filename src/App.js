/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react"
import {
	AppRegistry
} from "react-native"
import {StackNavigator} from "react-navigation"
import Component from "./configs/components/components"


const SimpleApp = StackNavigator(
	Component
)


AppRegistry.registerComponent("Kyogre", () => SimpleApp)

