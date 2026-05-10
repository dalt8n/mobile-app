import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  onRegisterPress: () => void;

  onLogin: (
    email: string,
    password: string
  ) => void;
};

const LoginScreen = ({
  onRegisterPress,
  onLogin,
}: Props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.logo}>
            NovaBank
          </Text>

          <Text style={styles.subtitle}>
            Banca móvil segura
          </Text>

        </View>

        {/* CARD */}
        <View style={styles.card}>

          <Text style={styles.title}>
            Bienvenido de nuevo
          </Text>

          {/* EMAIL */}
          <Text style={styles.label}>
            Correo electrónico
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Introduce tu correo"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* PASSWORD */}
          <Text style={styles.label}>
            Contraseña
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Introduce tu contraseña"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* BOTÓN */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => onLogin(email, password)}
          >

            <Text style={styles.buttonText}>
              Acceso
            </Text>

          </TouchableOpacity>

          {/* REGISTER */}
          <TouchableOpacity
            onPress={onRegisterPress}
          >

            <Text style={styles.registerText}>
              No tengo una cuenta
            </Text>

          </TouchableOpacity>

        </View>

      </SafeAreaView>

    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B132B",
  },

  header: {
    padding: 30,
    marginTop: 25,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#C5CAE9",
    marginTop: 6,
    fontSize: 16,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 28,
    marginTop: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 35,
  },

  label: {
    marginBottom: 8,
    color: "#1F2937",
    fontWeight: "600",
    fontSize: 15,
  },

  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginBottom: 22,
    fontSize: 16,
    color: "#111827",
  },

  button: {
    backgroundColor: "#0B132B",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  registerText: {
    marginTop: 24,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
  },

});