/* <-- dependencies --> */
import React, { useState, useContext, useMemo } from 'react'
import { SafeAreaView, View, FlatList} from 'react-native'

/* <-- components --> */
import SearchRecipe from 'components/Search'
import Card from 'components/Card'

/* <-- navigation --> */
import CustomTab from 'navigation/CustomTab'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { FOODSData, BEVERAGESData, DESSERTSData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

const MenuScreen = ({ navigation }) => {


  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  const [category, setCategory] = useState('All')
  const [dataList, setDataList] = useState([...FOODSData, ...BEVERAGESData,...DESSERTSData])

  /* <-- filter based on the category --> */
  const setCategoryFilter = (category) => {
    category === 'All' ? setDataList([...FOODSData, ...BEVERAGESData, ...DESSERTSData])
      : setDataList([...FOODSData, ...BEVERAGESData, ...DESSERTSData].filter((item) => item.category === category))
      setCategory(category)
  }

  /* <-- filter search --> */
  const handleSearch = (value) => {
    value === setDataList([...FOODSData, ...BEVERAGESData, ...DESSERTSData])

    const sortData = [...FOODSData, ...BEVERAGESData, ...DESSERTSData].filter(
      (item) => item.name.toLowerCase().includes(value.toLowerCase())
    )

    /* <-- 1 line using ternary operator  --> */
    sortData.length !== 0 ? setDataList(sortData) : setDataList(FOODSData)
  }


  /* <-- used useMemo hook to memoize the card component --> */
  const memoizedRenderItem = useMemo(() => ({ item }) => <Card food={item}
  navigation={navigation} />, [])


  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }} >
        {/* <-- invoked the header component -->  */}
        <SearchRecipe onSearch={handleSearch} navigation={navigation} />

        {/* <---------------------------------->  */}
        <View style={styles.categoryContainer}>
          {/* <-- invoked the custom tab navigation -->  */}
          <CustomTab
            category={category}
            setCategoryFilter={setCategoryFilter}
          />
          {/* <-------------------------------------->  */}

          <View style={{marginBottom: 10}}>
            <FlatList
              updateCellsBatchingPeriod={10}
              maxToRenderPerBatch={10}
              initialNumToRender={4}
              data={dataList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={memoizedRenderItem}
              showsVerticalScrollIndicator={true}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default MenuScreen
