/* <-- dependencies --> */
import React from 'react'
import { View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

/* <-- styles --> */
import styles from 'styles/landing'

/* <-- slider data --> */
import { SLIDER } from 'constants'
 

const LandingScreen = ({ navigation }) => {
    return (
        <AppIntroSlider
        data={SLIDER}
        renderItem={renderItem}
        onDone={() => navigation.navigate('Login')}
        showSkipButton={true}
        onSkip={() => navigation.navigate('Login')}
        />
    )
}


const renderItem = ({ item }) => {
    return (
        <View
        style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 20,
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}


export default LandingScreen

