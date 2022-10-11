import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Pressable, RefreshControl, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

function PostList({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const searchTextInput = useRef(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
                setFilteredPosts(json)
                setLoading(false)
            })
    }, [])

    const postList = () => {
        return loading ? <ActivityIndicator size='large' /> : (<FlatList data={filteredPosts} renderItem={({ item }) => {
            return <Pressable >
                <View style={{ paddingHorizontal: 20, paddingVertical: 15, marginVertical: 5, borderBottomWidth:1, borderBottomColor:'#ccc' }}>
                    <Text >{item.title}</Text>
                    <View style={{marginTop:20, flexDirection: 'row', justifyContent:'flex-end', borderColor:'transparent', borderTopColor: '#ddd', borderWidth: 1}}>
                        <TouchableHighlight style={{padding:10}} onPress={()=>{
                            navigation.navigate("Post Comments", {postId: item.id})
                        }}>
                            <Text style={{color:'blue'}}>Comments</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Pressable>
        }}
            refreshControl={<RefreshControl
                refreshing={false}
                onRefresh={
                    () => {
                        setFilteredPosts(posts)
                        searchTextInput.current.clear()
                    }
                } />}
        />)
    }


    return (
        <>
            <TextInput
                onChangeText={text => {
                    setName(text)
                    const filteredPosts = posts.filter(post => {
                        return post.title.toLowerCase().includes(text.toLowerCase())
                    })
                    setFilteredPosts(filteredPosts)
                }}
                placeholder="Search post"
                style={styles.textInput}
                ref={searchTextInput}

            />

            {postList()}
        </>
    )
}

export default PostList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50,
        justifyContent: 'center',
    },
    textInput: {
        borderColor: '#000',
        borderWidth: 1,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginVertical: 10
    }
});