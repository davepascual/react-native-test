import React, { useEffect, useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

function TodoContainer({ todo }) {
    const [_todo, setTodo] = useState({})

    useEffect(() => {
        setTodo(todo)
    }, [todo])

    return (
        <TouchableHighlight onPress={()=>{
            setTodo(state => ({...state, completed: !state.completed}))
        }}>
            <View style={{ backgroundColor: _todo.completed ? 'green' : '#ccc', padding: 20, marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: _todo.completed ? '#fff' : '#000' }}>{_todo.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default TodoContainer