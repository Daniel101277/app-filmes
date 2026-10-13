import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles'

export default function Header () {
return(
   
          
          <View style = {styles.viewHeader}>
          
          <Feather name="menu" size={24} color="white" />
    
          <Text style={styles.textHeader}> TECFILMES </Text>
    
         <TouchableOpacity>
    
         </TouchableOpacity>
         </View>
)

}