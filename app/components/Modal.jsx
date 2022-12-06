import { View, Text, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import YouTubePlayer from 'react-native-youtube-iframe'

import {
  COLORS,
  FONTS,
  SIZES,
  FOODSData,
  BEVERAGESData,
  DESSERTSData,
} from 'constants'

const Video = ({ navigation, route, food }) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.light,
        }}
      >
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <StatusBar style='auto' />
          <YouTubePlayer height={300} play={true} videoId={'Ix5Dnud1bl0'} />
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            bottom: 60,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.dark,
            }}
          >
            Instructions:
          </Text>
          <Text>{food.instructions}</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Video
