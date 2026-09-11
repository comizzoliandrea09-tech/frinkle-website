import React from 'react';
import { View, Text, StyleSheet } from 'react-bits';

const Footer = () => {
  return (
    <View className="footer">
      <View className="footer-content">
        <Text variant="p">&copy; 2026 Frinkle. Tutti i diritti riservati.</Text>
        <View className="social-links">
          <Text variant="a" href="#">Instagram</Text>
          <Text variant="a" href="#">TikTok</Text>
          <Text variant="a" href="#">YouTube</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;