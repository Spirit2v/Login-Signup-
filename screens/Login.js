import React from 'react'
import { View, Text } from 'react-native'

export default function Login({navigation,route}) {
    const { username } = route.params;
    return (
        <View>
            <Text>WWelcom{JSON.stringify(username)}</Text>
        </View>
    )
}
