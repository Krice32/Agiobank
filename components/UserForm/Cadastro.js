import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button,} from 'react-native';
import * as yup from "yup";


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      password,
      email,
      cpf,
      phone,
      confirmPassword
    }

    setUsers(data);
  }

  return (
    <View style={styles.container}>
  
      <Text>Cadastrar Usuario</Text>

      <Text>Email</Text>
       <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        type="email"
        required
        style={styles.TextInput}
        />
      
     
     
      <Text>Nome Completo</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.TextInput}
      />
    
     
      <Text>CPF</Text>
      <TextInput 
        onChangeText={(text) => setCpf(text)}
        value={cpf}
        style={styles.TextInput}
        type="number"
      />

      
      <Text>Telefone</Text>
      <TextInput
        onChangeText={(text) => setPhone(text)}
        value={phone}
        style={styles.TextInput}
        type="number"
      />

      <Text>Senha</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.TextInput}
          type="password"
        />

      <Text>Confirme a senha</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.TextInput}
        />

      
      <View style={styles.button}>
        <Button onPress={() => setModalVisible(!modalVisible)} title="Confirmar"/>
      </View>     
 
    </View>
   
  );
}

const styles = StyleSheet.create({
container: {
display: "flex",
flexDirection: "column",
alignItems: "center",
},

TextInput: {
backgroundColor: "#D9D9D9",
borderRadius: "90px",
borderShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
height: "30px",
width: 250
},

button: {
  backgroundColor: "#318FFE",
  color: '#fff',
  fontSize: 15,
  width: 200,
  height: 35,
  marginTop: 20,
  marginHorizontal: 20,
  textAlign: 'center',
  alignSelf: 'center',
  borderRadius: 105 
  }, 
})

