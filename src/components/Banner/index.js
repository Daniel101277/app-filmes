import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles'

export default function Banner () {
    return(
      <View>
        <Text style ={styles.textBanner}> Em cartaz </Text>

        <Image style = {styles.imageBanner}
        source = {require("../../../assets/bannerNovo.jpg")}     
        />
        </View>
    )
    
    }