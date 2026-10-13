import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles'





export default function Search () {
return(
 <View style = {styles.containerSearch}>
      <TextInput 
      placeholder= 'Buscar filme... '
      style = {styles.inputSearch}
      ></TextInput>

      <TouchableOpacity>
      <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
     </View>
     )
    }
