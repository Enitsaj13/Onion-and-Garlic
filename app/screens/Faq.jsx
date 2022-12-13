/* <-- dependencies --> */
import { useContext } from 'react'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AccordionList } from 'react-native-accordion-list-view'
import { BackButton } from 'components/BackButton'
import { FAQS } from 'constants'


import ThemeContext from 'theme/ThemeContext'
/* <-- theme --> */
import { SIZES, COLORS } from 'theme'

const Accordion = ({ navigation }) => {

    /* <-- theme state--> */
    const THEME = useContext(ThemeContext)

    return (
      <SafeAreaView style={{ backgroundColor: `${THEME.background}` }}>
          <View style={styles.container}>
              <View style={styles.header}>
                <BackButton navigation={navigation} />
                <Text style={[styles.title, {color: `${THEME.text}`}]} >Frequently Asked Questions</Text>
                <Icon name="help-circle-outline" size={25} color={`${THEME.text}`} />
              </View>
              <View style={styles.faqContainer}>
                <AccordionList
                  showsVerticalScrollIndicator={false}
                  data={FAQS}
                  customTitle={item => <Text style={[styles.title, {color: `${THEME.text}`}]}>{item.title}</Text>}
                  customBody={item => <Text style={[styles.body, {color: `${THEME.text}`}]}>{item.body}</Text>}
                  animationDuration={400}  
                  keyExtractor={item => item.id}
                  containerItemStyle={[styles.containerItemStyle, 
                  {borderBottomColor: `${THEME.placeholder}`}]}
                  customIcon={item => <Icon name="chevron-right" size={25} color={`${THEME.text}`} style={styles.icon} />}
                />
              </View>
          </View>
    </SafeAreaView>
    );
};

export default Accordion;

const styles = StyleSheet.create({
    container: {
      paddingVertical: '2%',
      paddingHorizontal: SIZES.padding,
      height: '100%',
    },
    containerItemStyle: {
      borderBottomWidth: 0.2,
      backgroundColor: 'transparent',

    },
    faqContainer: {
      paddingVertical: '5%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: '2%',
    },
    title: {
      fontSize: SIZES.name,
      fontWeight: 'bold',
      paddingVertical: '5%',
      lineHeight: 30,
    },
    body: {
      fontSize: SIZES.name,
      color: 'black',
      marginVertical: '5%',
      lineHeight: 25,
      textAlign: 'justify',
    },
    icon: {
      left: 8,
    }, 

});