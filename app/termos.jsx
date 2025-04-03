import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TermosDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introdução</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso aplicativo. Ao utilizar nossos serviços, você concorda com estes termos de uso.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso do Aplicativo</Text>
        <Text style={styles.sectionText}>
          Você se compromete a usar o aplicativo de forma ética, legal e de acordo com todas as leis e regulamentos aplicáveis.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Privacidade</Text>
        <Text style={styles.sectionText}>
          Respeitamos sua privacidade. Os dados pessoais são tratados de acordo com nossa Política de Privacidade.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Limitação de Responsabilidade</Text>
        <Text style={styles.sectionText}>
          Nosso aplicativo é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Modificações</Text>
        <Text style={styles.sectionText}>
          Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas aos usuários.
        </Text>
      </View>
     
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: "#1eb2ba",
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "Times New Roman",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 15,
    color: "#1eb2ba",
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#1eb2ba',
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});