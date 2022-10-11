import { View, Text } from 'react-native'
import React from 'react'
import PostTextInput from './PostTextInput'
import MyDayContainer from './MyDayContainer'

const NewsFeedHeader = () => {
    return (
        <View>
            <PostTextInput />
            <View>
                <Text style={{ fontWeight: "bold", marginBottom: 5, padding: 3 }}>Stories</Text>
            </View>
            <MyDayContainer />
        </View>
    )
}

export default NewsFeedHeader