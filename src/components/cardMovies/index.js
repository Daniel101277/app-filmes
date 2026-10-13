import React from 'react';
import {Image,Text,TouchableOpacity} from 'react-native';

import styles from './styles';
import { useNavigation} from '@react-navigation/native'

export default function CardMovies({ titulo, nota, imagem }) {
const Navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.containerFilmes} onPress={() => Navigation.navigate('Detalhes', {titulo, imagem, nota})}>

      <Image
        style={styles.images}
        source={{ uri: imagem }}
      />

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.textNota}>
         {nota}
      </Text>

    </TouchableOpacity>
  );
}
