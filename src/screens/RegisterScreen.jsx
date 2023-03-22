import { useState } from "react";
import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
export default function RegisterScreen() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro</Paragraph>
        <TextInput label={"E-email"} placeholder="Digite seu e-mail" />
        <TextInput placeholder="Digite sua senha" secureTextEntry={true} />
      </View>
    </View>
  );
}
