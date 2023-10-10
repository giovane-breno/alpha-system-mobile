import { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';


export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] =  useState('');
  return (
    <View style={styles.root}>
      <Text style={styles.login}>
        Login
      </Text>
      
      <View style={styles.email}>
        <Text style={styles.eMail}>
          E-mail
        </Text>
      <View/>
      
      <TextInput style={styles.input}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
        />
      </View>
      
      <View style={styles.senha2}>
        <Text style={styles.senha}>
          Senha
        </Text>
        <TextInput style={styles.input}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        />
      </View>
      <Text style={styles.esqueceuASenha}>
         Esqueceu a senha? 
        <TouchableOpacity>
          
        <Text style={styles.cliqueAqui}>
          clique aqui
        </Text>
      </TouchableOpacity>
      </Text>
      
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.entrar}> Entrar</Text>    
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
  },
  login: {
    color: '#515151',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 100,
  },
  senha: {
    color: '#515151',
    fontFamily: 'Arial',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  rectangle8: {
    width: 301,
    height: 33,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: 'rgba(87, 87, 87, 0.40)',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  senha2: {
    width: 302,
    height: 57.999,
    flexShrink: 0,
    marginLeft: 50,
  },
  esqueceuASenha: {
    color: '#515151',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',

  },
  cliqueAqui: {
    color: '#008AFF',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',

  },
  rectangle7: {
    width: 200,
    height: 35,
    flexShrink: 0,
    backgroundColor: '#008AFF',
    borderRadius: 4,
  },
  entrar: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',

  },
  botao: {
    width: 200,
    height: 35,
    flexShrink: 0,
    backgroundColor: '#008AFF',
    marginLeft: 100,
    borderRadius: 4,
  },
  eMail: {
    color: '#515151',
    fontFamily: 'Arial',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  input: {
    width: 301,
    height: 33,
    borderWidth: 1,
    borderColor: 'rgba(87, 87, 87, 0.40)',
    padding: 10,
    borderRadius: 6,
  },
  
  email: {
    width: 302,
    height: 57.999,
    flexShrink: 0,
    marginLeft: 50,
  },
  
  logoV2: {
    width: 110,
    height: 126,
    flexShrink: 0,
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
  },
});
