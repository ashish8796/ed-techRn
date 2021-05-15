import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ScrollViewComponent,
} from 'react-native';
import {customStyles} from '../utils/styles';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Button from '../components/Screens/Button';
import Intro3 from './Intro3';
import Pagination from '../components/Pagination';

export default function EdTechIntro() {
  const scrollRef = useRef(undefined);
  const [introNum, setIntroNum] = useState<number>(0);

  const setPage = (width: number, x: number): void => {
    let param = x / width;

    setIntroNum(param <= 0 ? 0 : Math.floor(x / width));
  };

  const handleOnPress = (): void => {
    // if(introNum){} else

    scrollRef.current.scrollTo({x: (introNum + 1) * 388});
  };

  return (
    <View style={styles.introContainer}>
      <Button
        label="Skip"
        handlePress={() => {}}
        buttonStyle={styles.skipButtonStyle}
        textStyle={styles.skipTextStyle}
      />

      <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const {layoutMeasurement, contentOffset} = e.nativeEvent;
            const {width, x} = {...layoutMeasurement, ...contentOffset};

            setPage(Number(width), Number(x));
          }}
          scrollEventThrottle={10}
          centerContent>
          <Intro1 />
          <Intro2 />
          <Intro3 />
        </ScrollView>
        <Pagination currentPage={introNum} />
      </View>

      <Button
        label={introNum !== 2 ? 'Next' : "Let's Start"}
        handlePress={handleOnPress}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scrollContainer: {
    alignItems: 'center',
    maxHeight: 446,
    marginTop: 32,
  },

  buttonStyle: customStyles.buttonStyle,

  buttonText: {...customStyles.buttonText},

  skipButtonStyle: {...customStyles.skip.buttonStyle},
  skipTextStyle: {...customStyles.skip.textStyle},
});
