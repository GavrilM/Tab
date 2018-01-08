import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default ({ text, navigator }) => (
    <TouchableOpacity onPress={() => navigator.navigate(text)}>
        <View style={styles.item}> 
            <Text>{text} View</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1

    }
})