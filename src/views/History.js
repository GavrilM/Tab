import React from 'react'

import {
    FlatList,
    Text
} from 'react-native'

import BasicListItem from '../components/BasicListItem.js'

const data = [
    { key: 'Camera' },
    { key: 'Tabbed' },
    { key : 'Drawer'}
  ] 

export default ({ navigation }) => (
    <FlatList 
        data = {data}
        renderItem = {({item}) => (<BasicListItem { ...item } text={item.key} navigator={navigation}/>)}
    />
)