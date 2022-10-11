import { Image, View } from 'react-native'
import React from 'react'
import MyDayImage from '../assets/images/image.jpg'

export default function MyDay() {
    return (
            <View style={{ height: 100, width: 75, backgroundColor: '#333', marginHorizontal: 5, borderRadius: 5, overflow: 'hidden' }}>
                <Image source={MyDayImage} resizeMode="cover" style={{ flex: 1, width: '100%', height: '100%' }} />
            </View>
    )
}