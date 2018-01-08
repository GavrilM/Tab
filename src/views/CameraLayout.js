import React, { Component } from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet, Dimensions } from 'react-native'

import Camera from 'react-native-camera'

import NavBar from '../components/NavBar.js'
import {Temp} from '../config/theme.js'

export default class CameraLayout extends Component {
    constructor(){
        super()
        this.state = {
            backCamera: true
        }
    }
    flipCamera(){
        this.setState({
            backCamera: !this.state.backCamera
        })
    }
    render(){
            return (
                <View style={styles.container}>
                    <Camera 
                        aspect={Camera.constants.Aspect.fill}
                        type={this.state.backCamera ? "back" : "front"}
                        ref={(cam) => { this.camera = cam }} 
                        style={styles.preview}>
                        <Temp.icon size={30} name="cycle" color="#ffffff" onPress={() => this.flipCamera()} style={styles.refresh}/>
                        <Temp.icon size={30} name="plus" color="#ffffff" onPress={() => this.flipCamera()} style={styles.add}/>
                    </Camera>  
                </View>
            )
    }
}

const styles = StyleSheet.create({
    preview: {
        width: Dimensions.get('screen').width
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    refresh: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 15
    },
    add: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 15
    }
})