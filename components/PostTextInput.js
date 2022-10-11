import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const PostTextInput = () => {
    return (
        <View style={{ marginVertical: 10, marginHorizontal: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", borderWidth: 1, borderRadius: 10 }}>
            <TextInput style={{ paddingVertical: 5, paddingHorizontal: 10, height: 30, flexGrow: 1 }} placeholder="What is on your mind?" />
            <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: "#2196f3", height: "100%", borderTopEndRadius: 10, borderBottomEndRadius: 10 }}>
                <Text style={{ color: "#fff", }}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PostTextInput