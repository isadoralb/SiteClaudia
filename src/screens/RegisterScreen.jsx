import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { styles } from "../utils/styles";
export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister(){
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) =>{
        console.log("Usuário logado com sucesso!")
    })
    .catch((error) =>{
        console.log("Erro ao logar usuário", error);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro</Paragraph>
        <TextInput 
        label={"E-mail"} 
        placeholder="Digite seu e-mail" 
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        />

        <TextInput 
        label={"Senha"} 
        placeholder="Digite sua senha" 
        secureTextEntry={true}
         value={senha} 
         onChangeText={setSenha}
         mode="outlined"
         />

      </View>
    </View>
  );
}
