import CoolKidsDiscussion from './../assets/images/screens/courses/coolKidsDiscussion.svg';

import CoolKidsHighTech from './../assets/images/screens/courses/coolKidsHighTech.svg';

import CoolKidsAloneTime from './../assets/images/screens/courses/coolKidAloneTime.svg';

import CoolKidsPerforming from './../assets/images/screens/courses/coolKidsPerforming.svg';

import CoolKidsAloneTime2 from './../assets/images/screens/courses/coolKidsAloneTIme2.svg';
import Svg from 'react-native-svg';

interface FeatureImgObj {
  "cool kids discussion": Svg;
  "cool kids high tech": Svg;
  "cool kids performing": Svg;
  "cool kids alone time 2": Svg;
  "cool kids alone time": Svg;

}

const featureImgObj: FeatureImgObj = {
  'cool kids discussion': CoolKidsDiscussion,

  'cool kids high tech': CoolKidsHighTech,

  'cool kids performing': CoolKidsPerforming,

  'cool kids alone time 2': CoolKidsAloneTime2,

  'cool kids alone time': CoolKidsAloneTime,
};

export { featureImgObj };
