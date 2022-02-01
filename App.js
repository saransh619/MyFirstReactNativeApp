import React from 'react';
import HoriNVertScrolling from './src/screens/HoriNVertScrolling';
import { View } from 'react-native';
import NetFlixScrolling from './src/screens/NetflixScrolling';
import NetflixCard from './src/components/NetflixCard';

const App = () => {
  return (
    <View>
      {/* <HoriNVertScrolling/> */}
      {/* <NetFlixScrolling/> */}
      <NetflixCard/>
    </View>
  );
}


export default App;