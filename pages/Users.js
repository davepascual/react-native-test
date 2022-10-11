import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'

function Users({ navigation }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json)
            })
    }, [])

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => {
                return (<TouchableHighlight onPress={() => {
                    navigation.navigate("Todos", { userId: item.id })
                }}>
                    <View style={{ backgroundColor: '#ccc', color: '#fff', padding: 20, marginVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ color: '#444' }}>{`${item.username} | ${item.email}`}</Text>
                    </View>
                </TouchableHighlight>)

            }}
        />
    )
}

export default Users