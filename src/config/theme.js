import Entypo from 'react-native-vector-icons/Entypo'

export const Temp = {
    icon: Entypo,
    primary: '#fff',
    getIcon: (name) => mapping[name]
}

const mapping = {
    Home: 'camera',
    List: 'list',
    Tools: 'cog'
}