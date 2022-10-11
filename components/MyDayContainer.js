import { FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyDay from './MyDay'
import { NavigationContext } from '@react-navigation/native'

const MyDayContainer = () => {
    const navigation = useContext(NavigationContext)
    return (
        <SafeAreaView style={{ marginBottom: 20 }}>
            <FlatList
                data={[...Array(10)]}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => {
                        navigation.navigate("MyDayImage")
                    }}>
                <MyDay />
            </TouchableOpacity>)
                }}
            horizontal
            />
        </SafeAreaView>
    )
}

export default MyDayContainer