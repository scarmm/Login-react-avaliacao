import { View, Text, TextInput, Image } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "../lib/styles"

export const telaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img1} source={{uri: require("../imagens/gato.png")}} />
            <Text style={styles.texto}>Informações do miau</Text>
            <View>
            <TextInput style={styles.input} placeholder="nome" />
                <TextInput style={styles.input} placeholder="email" />
                <TextInput style={styles.input} placeholder="Senha" />
                <Button style={styles.botao1} mode="contained" onPress={() => navigation.navigate("Inicio")}>Volte</Button>
            </View>
        </View>
    )
}

