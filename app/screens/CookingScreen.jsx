import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import YouTubePlayer from 'react-native-youtube-iframe'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const Video = () => {

  return (
    <>
      <SafeAreaView>
        <View>

          <Text style={{ fontSize: SIZES.medium }}>
            Video
          </Text>
          <Icon name='dots-vertical' size={25}  />
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20, borderRadius: 10}}>
          <YouTubePlayer height={300} play={true} videoId={youtubeID} />
        </View>

        <View style={{ flex: 1, paddingHorizontal: 20, bottom: 60 }}>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 20 }} >
            How to Cook Adobo
          </Text>
          
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text
              style={{
                fontSize: SIZES.name,
                color: `${THEME.text}`,
                textAlign: 'justify',
                letterSpacing: 0.8,
              }}
            >
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}
export default Video
