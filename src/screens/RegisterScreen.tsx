import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  onGoBack: () => void;

  onRegister: (
    email: string,
    password: string
  ) => void;
};

const RegisterScreen = ({
  onGoBack,
  onRegister,
}: Props) => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >

          {/* HEADER */}
          <View style={styles.header}>

            <Text style={styles.logo}>
              NovaBank
            </Text>

            <Text style={styles.subtitle}>
              Crea tu cuenta
            </Text>

          </View>

          {/* CARD */}
          <View style={styles.card}>

            <Text style={styles.title}>
              Registro
            </Text>

            {/* NOMBRE */}
            <Text style={styles.label}>
              Nombre
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingrese su nombre"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={setName}
            />

            {/* APELLIDO */}
            <Text style={styles.label}>
              Apellido
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingrese su apellido"
              placeholderTextColor="#9CA3AF"
              value={lastName}
              onChangeText={setLastName}
            />

            {/* TELÉFONO */}
            <Text style={styles.label}>
              Número de teléfono
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingrese su número"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

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

            {/* CÉDULA */}
            <Text style={styles.label}>
              Número de identificación
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Ingrese su identificación"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              value={idNumber}
              onChangeText={setIdNumber}
            />

            {/* PASSWORD */}
            <Text style={styles.label}>
              Contraseña
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Crear una contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* BOTÓN */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => onRegister(email, password)}
            >

              <Text style={styles.buttonText}>
                Crear una cuenta
              </Text>

            </TouchableOpacity>

            {/* VOLVER */}
            <TouchableOpacity
              onPress={onGoBack}
            >

              <Text style={styles.backText}>
                Ya tengo una cuenta
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </SafeAreaView>

    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 30,
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
    marginBottom: 20,
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

  backText: {
    marginTop: 24,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 30,
  },

});