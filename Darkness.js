import React from 'react';
import { View, Text } from 'react-native';

const Darkness = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text style={{ color: 'white', fontSize: 20 }}>
      Hello darkness, my old friend.
    </Text>
  </View>
);

export default Darkness;
