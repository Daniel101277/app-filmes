import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles_details';

export default function Detalhes() {
  const route = useRoute();
  const titulo = route?.params?.titulo ?? 'Título não encontrado';
  const imagem = route?.params?.imagem ?? '';
  const nota = route?.params?.nota ?? 'Sem nota';

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagemFundo}
        source={{ uri: imagem }}
      />

      <View style={styles.conteudo}>
        <Image
          style={styles.capa}
          source={{ uri: imagem }}
        />

        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.categoria}>Nota: {nota}</Text>
        <Text style={styles.subtitulo}>Sinopse</Text>
        <Text style={styles.descricao}>
          Essa é a tela de detalhes do filme {titulo}. Aqui você pode exibir mais informações, avaliações e outros dados do título selecionado.
        </Text>
      </View>
    </View>
  );
}