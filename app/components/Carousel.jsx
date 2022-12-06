/* <-- dependencies --> */
import { useState, useEffect, memo } from 'react'
import { View, useWindowDimensions, Text } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated'
import FastImage from 'react-native-fast-image'


/* <-- constant--> */
import { COLORS } from 'theme'

/* <-- component --> */
import { ToastMessage } from 'components/Toast'

/* <-- style --> */
import styles from 'styles/carousel'

const Carousel = ({ data, autoPlay }) => {
  const scrollViewRef = useAnimatedRef(null)
  const [newData] = useState([
    { key: 'spacer-left' },
    ...data,
    { key: 'spacer-right' },
  ])
  const { width } = useWindowDimensions()
  const SIZE = width * 0.7
  const SPACER = (width - SIZE) / 5
  const x = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x
    },
  })

  useEffect(() => {
    if (autoPlay) {
      let offset = 0
      setInterval(() => {
        if (offset === SIZE * (data.length - 1)) {
          offset = 0
        } else {
          offset += SIZE
        }
        scrollViewRef.current.scrollTo({ x: offset, y: 0, animated: true })
      }, 2000)
    }
  }, [SIZE, SPACER, autoPlay, data.length, scrollViewRef])

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={onScroll}
      scrollEventThrottle={16}
      decelerationRate='fast'
      snapToInterval={SIZE}
      snapToAlignment='center'
      horizontal
      bounces={true}
      showsHorizontalScrollIndicator={false}
    >
      {newData.map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.88, 1, 0.88]
          )
          return {
            transform: [{ scale }],
          }
        })
        if (!item.image) {
          return <View style={{ width: SPACER }} key={index} />
        }
        return (
          <View style={{ width: SIZE }} key={index}>
            <Animated.View
              /* <-- set the background color alternate --> */
              style={[ style, styles.imageContainer,
                { backgroundColor: index % 2 === 0 ? COLORS.cahel : COLORS.lightBlue}]}>
              <FastImage
                 resizeMode={FastImage.resizeMode.contain}
                 priority={FastImage.priority.high}
                 source={item.image} style={styles.image} />
            </Animated.View>

            <View style={{ bottom: 430, left: 20 }} >
              {/* <-- invoked the toast component --> */}
              <ToastMessage />
              {/* <---------------------------------> */}
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={[ styles.textInfo,
                  { color: index % 2 === 0 ? COLORS.darkCahel : COLORS.darkBlue}]}>
                {item.time}
              </Text>
              <Text style={[ styles.textInfo,
                  { color: index % 2 === 0 ? COLORS.darkCahel : COLORS.darkBlue}]}>
                {item.capacity}
              </Text>
            </View> 
          </View>
        )
      })}
    </Animated.ScrollView>
  )
}

export default memo(Carousel)
