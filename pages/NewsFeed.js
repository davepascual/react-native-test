import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import PostContent from '../components/PostContent'
import NewsFeedHeader from '../components/NewsFeedHeader'

const NewsFeed = () => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <FlatList
                    ListHeaderComponent={<NewsFeedHeader />}

                    data={[...Array(20)]}
                    renderItem={item => {
                        return <PostContent />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>

        </View>
    )
}

export default NewsFeed