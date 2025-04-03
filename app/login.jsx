import { View, Text, StyleSheet, Pressable, Button, Image, TextInput } from "react-native";
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Jour.png')}
        style={{ width: 200, height: 100, marginBottom: 20 }}
      />
      <View style={styles.form}>
        <Text styles={styles.formLoginIntroductionText}>Formulário de Login</Text>
        <TextInput placeholder="Email" style={styles.formLoginTextInput} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.formLoginTextInput} />
        <Pressable style={styles.formLoginButton} onPress={() => alert("Login realizado com sucesso!")}>
          <Text style={styles.formLoginButtonTextStyle}>Entrar</Text>
        </Pressable>
      </View>
      <Text>Ou registre com</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Pressable onPress={() => alert("Login com Google!")} style={styles.registerWithCard}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' }}
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
        </Pressable>
        <Pressable onPress={() => alert("Login com Facebook!")} style={styles.registerWithCard}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' }}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
        <Pressable onPress={() => alert("Login com Apple")} style={styles.registerWithCard}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: 40,
    marginTop: 20,
    borderRadius: 20,
  },
  formLoginIntroductionText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  formLoginTextInput: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    border: '1px solid #1eb2ba',
    paddingLeft: 10,
    marginTop: 20,
  },
  formLoginButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#1eb2ba',
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLoginButtonTextStyle: {
    color: '#fff',
    fontWeight: 'bold',

  },
  registerWithCard: {
    width: 100,
    height: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    border: '1px solid #1eb2ba ',
  },

});