import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../telas/Detalhes"
import Home from "../telas/home";

export default function rotas(){

    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component = {Home} name = "home" options={{headerShown:false}} />
                <Stack.Screen component = {Detalhes} name = 'Detalhes'/>

                

            </Stack.Navigator>



        </NavigationContainer>
    );
}
