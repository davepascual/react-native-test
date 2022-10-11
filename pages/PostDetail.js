import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Pressable, Text, View } from 'react-native'

function PostDetail({ navigation, route }) {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const postId = route.params.postId
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => {
                setPost(json)
            })
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setComments(json)
            })


    }, [route.params.postId])


    return (
        <>
            <View style={{padding:20}}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{post.title}</Text>
                <Text>{post.body}</Text>
            </View>

            <FlatList
                data={comments}
                renderItem={({ item }) => {
                    return <Pressable onPress={() => {
                        Alert.alert(item.email, item.body)
                    }}>
                        <View style={{ backgroundColor: '#ccc', color: '#fff', padding: 20, marginVertical: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                            <Text style={{ color: '#666' }}>{item.email}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    </Pressable>
                }}
            />
        </>
    )
}

export default PostDetail