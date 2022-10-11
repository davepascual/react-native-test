import { Animated, Image, PanResponder, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useRef, useState } from 'react'

const pointsDistance = ([xA, yA], [xB, yB]) => {
    return Math.sqrt(
        Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
    );
};

const MyDayImage = () => {
    const [center, setCenter] = useState(null)
    const dimensions = useWindowDimensions();
    const imageAnimation = useRef(
        {
            scale: new Animated.Value(1),
            position: new Animated.ValueXY(),
            center: new Animated.Value(0)
        }
    ).current

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            const activeTouches = event.nativeEvent.changedTouches.length;

            if (activeTouches === 1) {
                imageAnimation.position.setValue({
                    x: gesture.dx,
                    y: gesture.dy,
                });
            } else if (activeTouches >= 2) {
                const touches = event.nativeEvent.changedTouches;

                const touchA = touches[0];
                const touchB = touches[1];

                const distance = pointsDistance(
                    [touchA.pageX, touchA.pageY],
                    [touchB.pageX, touchB.pageY]
                );

                const center = {
                    x: Math.abs(touchA.pageX - touchB.pageX),
                    y: Math.abs(touchA.pageY - touchB.pageY)
                }

                console.log(center);
                const screenMovedPercents = distance / dimensions.width;
                imageAnimation.scale.setValue(1 + screenMovedPercents);

                imageAnimation.position.setValue({
                    x: Math.abs(touchA.pageX - touchB.pageX) / center.x,
                    y: Math.abs(touchA.pageY - touchB.pageY) / center.y,
                })
            }
        },
        onPanResponderRelease: (event, gesture) => {
            Animated.parallel([
                Animated.spring(imageAnimation.scale, {
                    toValue: 1,
                    useNativeDriver: true
                }),
                Animated.spring(imageAnimation.position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true
                }),
            ]).start()
        }
    })).current
    return (
        <View style={styles.container}>
            <Animated.Image style={[styles.image, {
                transform: [{
                    scale: imageAnimation.scale
                },
                {
                    translateX: imageAnimation.position.x
                }, {
                    translateY: imageAnimation.position.y
                }]
            }]} source={require('../assets/images/image.jpg')}

                resizeMode='contain' {...panResponder.panHandlers} />
        </View>
    )
}

export default MyDayImage

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    image: {
        width: 500,
        height: 500
    }
})