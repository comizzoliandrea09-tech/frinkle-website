import React from 'react';
import { View, Text, StyleSheet } from 'react-bits';

const About = () => {
  return (
    <View className="about">
      <Text variant="h2">La Filosofia Frinkle</Text>
      <Text variant="p">Crediamo che ogni sorso debba essere un momento di piacere puro. Per questo selezioniamo solo gli ingredienti più fini, combiniamo tradizione e innovazione, e prestiamo attenzione assoluta a ogni dettaglio del processo produttivo.</Text>
      <View className="about-stats">
        <View className="stat">
          <Text variant="h3">100%</Text>
          <Text variant="p">Naturale</Text>
        </View>
        <View className="stat">
          <Text variant="h3">0</Text>
          <Text variant="p">Additivi</Text>
        </View>
        <View className="stat">
          <Text variant="h3">3</Text>
          <Text variant="p">Gusti Unici</Text>
        </View>
      </View>
    </View>
  );
};

export default About;