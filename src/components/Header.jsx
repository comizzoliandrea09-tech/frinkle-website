import React from 'react';
import { View, Text, StyleSheet } from 'react-bits';

const Header = () => {
  return (
    <View className="header">
      <Text variant="logo">Frinkle</Text>
      <View className="nav">
        <View>
          <Text variant="a" href="#strawberry">Fragola</Text>
        </View>
        <View>
          <Text variant="a" href="#apple">Mela</Text>
        </View>
        <View>
          <Text variant="a" href="#blueberry">Mirtillo</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;