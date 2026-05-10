import React, { useEffect } from "react";

import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  onFinish: () => void;
};

const SplashScreen = ({
  onFinish,
}: Props) => {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#020617"
      />

      <View style={styles.logoCircle}>

        <Text style={styles.logo}>
          N
        </Text>

      </View>

      <Text style={styles.title}>
        NovaBank
      </Text>

      <Text style={styles.subtitle}>
        Secure Mobile Banking
      </Text>

      <ActivityIndicator
        size="large"
        color="#60A5FA"
        style={{ marginTop: 40 }}
      />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },

  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2563EB",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 30,
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginTop: 10,
  },

});