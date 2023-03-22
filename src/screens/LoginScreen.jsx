import { signInWithEmailAndPassword } from "firebase/auth";
import { View, } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { auth } from "../config/firebase";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(){
   signInWithEmailAndPassword(auth, email, senha)
   .then((userLogin) =>{
       console.log("Usuário logado com sucesso!")
   })
   .catch((error) =>{
       console.log("Erro ao logar usuário", error);
   });

  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Faça Login</Paragraph>
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
         <Button onPress={handleLogin}>Faça login </Button>
      </View>
    </View>
  );
}