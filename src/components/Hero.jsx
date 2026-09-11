import React from 'react';
import { View, Text, StyleSheet } from 'react-bits';

const Hero = () => {
  return (
    <View className="hero">
      <View className="hero-content">
        <Text variant="h2">Assapora l'Extraordinario</Text>
        <Text variant="p">Tre gusti esclusivi. Un'esperienza indimenticabile.</Text>
        <View className="flavor-indicators">
          <View className="indicator strawberry" />
          <View className="indicator apple" />
          <View className="indicator blueberry" />
        </View>
      </View>
      <View className="hero-bg" />
    </View>
  );
};

export default Hero;