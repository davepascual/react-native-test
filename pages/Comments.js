import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

function Comments({ navigation, route }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const postId = route.params.postId

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(json => {
                setComments(json)
            })


    }, [route.params.postId])

    return (
        <FlatList
            data={comments}
            renderItem={({ item }) => {
                return (<View style={{ backgroundColor: '#ccc', color: '#fff', padding: 20, marginVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ color: '#666' }}>{item.email}</Text>
                    <Text>{item.body}</Text>
                </View>)

            }}
        />
    )
}

export default Comments