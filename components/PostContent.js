import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const PostContent = () => {
    const [likes, setLikes] = useState(0)
    return (
        <View style={{ backgroundColor: "#fff", padding: 10, marginVertical: 5 }}>
            <Text style={{ fontWeight: "bold", paddingBottom: 5 }}>John Doe</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>October 2, 2022</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            <View style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", borderTopColor: "#ccc", borderTopWidth: 1, marginTop: 5, paddingTop: 5 }}>
                <TouchableOpacity onPress={()=>{
                    setLikes(state=> state +1)
                }}>
                    <Text>{`${likes} Like`}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostContent