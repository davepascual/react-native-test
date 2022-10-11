import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Comments from './pages/Comments';
import Home from './pages/Home';
import MyDayImage from './pages/MyDayImage';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Todos from './pages/Todos';
import Users from './pages/Users';

const Stack = createNativeStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<StatusBar style="light" backgroundColor='#000' translucent={false} barStyle={setStatusBarStyle('dark')} animated={true} />
			<View style={{ flex: 1 }}>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
					<Stack.Screen name="Post List" component={PostList} options={{ title: "Posts" }} />
					<Stack.Screen name="Post Detail" component={PostDetail} />
					<Stack.Screen name="Post Comments" component={Comments} options={{ title: "Comments" }} />
					<Stack.Screen name="Users List" component={Users} options={{ title: "Users" }} />
					<Stack.Screen name="Todos" component={Todos} />
					<Stack.Screen name="MyDayImage" component={MyDayImage} />
				</Stack.Navigator>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 20,
		paddingTop: 50,
		// justifyContent: 'center',
	},
});
