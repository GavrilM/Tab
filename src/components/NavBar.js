import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

import { Temp } from '../config/theme.js'

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            centerButton: styles.button
        }
    }
    render() {
        return (
            <View style={styles.navContainer}>
                <View style={styles.navbar}>
                    {this.props.navigation.state.routes.map((route, index) => {
                        return (
                            <TouchableNativeFeedback
                                key={route.key}
                                onPress={ () => this.props.navigation.navigate(route.routeName) }>
                                <View style={styles.button}>
                                    <Temp.icon name={Temp.getIcon(route.key)} color="#ffffff" size={20} />
                                </View>
                            </TouchableNativeFeedback>  
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navContainer: {
        height: 60,
        backgroundColor: 'lightblue',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleButton: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 45,
    }
})

function getStyle(name, current) {
    console.log(current)
    if(name !== 'Home' && current === 'Home')
        return styles.button, styles.circleButton
    return styles.button
}