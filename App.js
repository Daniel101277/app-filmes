import React from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';

import Feather from '@expo/vector-icons/Feather'
import Header from './src/components/Header'        
import Banner from './src/components/Banner'
import Search from './src/components/Search'                                  
import CardMovies from './src/components/cardMovies'
import filmes from './movies'
import Rotas from './src/rotas'



export default function App() {
  return (
   <Rotas>  </Rotas>


  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#01072c',
  },

  container: {
    flex: 1,
    backgroundColor: '#01072c',
    alignItems: 'center',
  },

  lista: {
    width: '90%',
  },
});