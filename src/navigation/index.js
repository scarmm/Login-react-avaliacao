import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { telaInicial} from "../view/telaInicial";
import { telaLogin } from "../view/telaLogin";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
return(
    <Stack.Navigator>
        <Stack.Screen name={"Inicio"} component={telaInicial}/>
        <Stack.Screen name={"Login"} component={telaLogin} />
    </Stack.Navigator>
)
}