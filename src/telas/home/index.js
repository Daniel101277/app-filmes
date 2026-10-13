import React from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';


import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Search from '../../components/Search';
import CardMovies from '../../components/cardMovies';
import filmes from '../../../movies';


export default function App() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        <Header />

        <Search />

        <Banner />

        <View style={styles.lista}>
          <FlatList
            data={filmes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.nome}
                imagem={item.Imagem}
                nota={item.nota}
              />
            )}
          />
        </View>

      </View>
    </ScrollView>
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