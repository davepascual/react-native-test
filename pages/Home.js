import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Camera from './Camera';
import NewsFeed from './NewsFeed';
import PostList from './PostList';
import Users from './Users';

const Tab = createBottomTabNavigator();

function Home({ navigation }) {
	return (
		<Tab.Navigator screenOptions={{headerShown:false}}>
			<Tab.Screen name="News Feed" component={NewsFeed} />
			<Tab.Screen name="Post List" component={PostList} />
			<Tab.Screen name="Users" component={Users} />
			<Tab.Screen name="Camera" component={Camera} />
		</Tab.Navigator>
		)
}

export default Home