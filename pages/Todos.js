import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import TodoContainer from '../components/TodoContainer'

function Todos({ route }) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const userId = route.params.userId
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(response => response.json())
            .then(json => {
                setTodos(json)
            })
    }, [route.params.userId])

    return (
        <>
            <FlatList
                data={todos}
                renderItem={({ item }) => {
                    return (<TodoContainer todo={item}/>)

                }}
            />
        </>
    )
}

export default Todos