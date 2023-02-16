import { View, Text, TextInput } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "../lib/styles"

export const telaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>🐵👍</Text>
            <View>
            <TextInput style={styles.input} placeholder="Digite seu Nome..." />
                <TextInput style={styles.input} placeholder="Digite seu E-mail..." />
                <TextInput style={styles.input} placeholder="Senha" />
                <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Login")}>Clique me</Button>
            </View>
        </View>
    )
}

