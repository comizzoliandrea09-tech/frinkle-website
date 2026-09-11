import React from 'react';
import { View } from 'react-bits';
import Header from './components/Header';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import About from './components/About';
import Footer from './components/Footer';
import './styles/frinkle.css';

function App() {
  return (
    <View className="App">
      <Header />
      <Hero />
      <Flavors />
      <About />
      <Footer />
    </View>
  );
}

export default App;