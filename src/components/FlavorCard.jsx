import React from 'react';
import { View, Text, StyleSheet } from 'react-bits';

const FlavorCard = ({ id, name, description, details, color }) => {
  return (
    <View className="flavor-card" id={id}>
      <View className="flavor-content">
        <Text variant="h3">{name}</Text>
        <Text variant="p">{description}</Text>
        <View className="flavor-details">
          {details.map((detail, index) => (
            <Text key={index} variant="span">• {detail}</Text>
          ))}
        </View>
      </View>
      <View className="flavor-3d">
        <View className={`bottle ${id}-bottle`}>
          <View className={`liquid ${id}-liquid`} />
          <View className="bubble" />
          <View className="bubble" />
          <View className="bubble" />
          {/* Decorative elements using basic View components */}
          <View className="shape-decoration" />
        </View>
      </View>
    </View>
  );
};

export default FlavorCard;