import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { telaInicial } from "../view/telaInicial";
import { telaLogin } from "../view/telaLogin";

const Tab= createMaterialBottomTabNavigator();

export const RootNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{tabBarIcon:"cat"}} name={"Inicio"} component={telaInicial} />
            <Tab.Screen options={{tabBarIcon:"cat"}} name={"Login"} component={telaLogin} />
        </Tab.Navigator>
    );
};


