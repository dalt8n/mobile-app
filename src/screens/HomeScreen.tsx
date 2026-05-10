import React, { useEffect, useState } from "react";

import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  onLogout: () => void;
};

const HomeScreen = ({ onLogout }: Props) => {

  const [loading, setLoading] = useState(true);

  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  // LOADING SCREEN
  if (loading) {

    return (

      <View style={styles.loadingContainer}>

        <StatusBar
          barStyle="light-content"
          backgroundColor="#020617"
        />

        <View style={styles.loadingCircle}>

          <Text style={styles.loadingLogo}>
            N
          </Text>

        </View>

        <Text style={styles.loadingText}>
          NovaBank
        </Text>

        <Text style={styles.loadingSubtitle}>
          Banca móvil inteligente
        </Text>

        <ActivityIndicator
          size="large"
          color="#60A5FA"
          style={{ marginTop: 35 }}
        />

      </View>
    );
  }

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#020617"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Bienvenido
            </Text>

            <Text style={styles.name}>
              Dalton 👋
            </Text>

          </View>

          <TouchableOpacity style={styles.profileCircle}>

            <Text style={styles.profileText}>
              D
            </Text>

          </TouchableOpacity>

        </View>

        {/* BALANCE CARD */}
        <View style={styles.balanceCard}>

          <View style={styles.balanceTop}>

            <Text style={styles.balanceLabel}>
              Saldo disponible
            </Text>

            <TouchableOpacity
              onPress={() =>
                setShowBalance(!showBalance)
              }
            >

              <Text style={styles.hideText}>
                {showBalance
                  ? "🙈 Ocultar"
                  : "👁️ Mostrar"}
              </Text>

            </TouchableOpacity>

          </View>

          <Text style={styles.balance}>

            {showBalance
              ? "$ 8.450.000"
              : "••••••••"}

          </Text>

          <Text style={styles.account}>
            Cuenta Premium • 4589
          </Text>

          {/* MINI CARD */}
          <View style={styles.miniCard}>

            <View>

              <Text style={styles.cardSmallText}>
                Tarjeta virtual
              </Text>

              <Text style={styles.cardNumber}>
                **** **** **** 4589
              </Text>

            </View>

            <Text style={styles.cardBrand}>
              VISA
            </Text>

          </View>

        </View>

        {/* QUICK ACTIONS */}
        <View style={styles.actionsContainer}>

          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              💸
            </Text>

            <Text style={styles.actionText}>
              Transferir
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              📲
            </Text>

            <Text style={styles.actionText}>
              Recargar
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              💳
            </Text>

            <Text style={styles.actionText}>
              Pagar
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionIcon}>
              🏦
            </Text>

            <Text style={styles.actionText}>
              Bancos
            </Text>

          </TouchableOpacity>

        </View>

        {/* MOVEMENTS */}
        <View style={styles.transactionsCard}>

          <View style={styles.transactionsHeader}>

            <Text style={styles.transactionsTitle}>
              Últimos movimientos
            </Text>

            <Text style={styles.seeAll}>
              Ver todo
            </Text>

          </View>

          {/* ITEM */}
          <View style={styles.transactionItem}>

            <View style={styles.transactionLeft}>

              <View style={styles.iconCircle}>
                <Text>🎬</Text>
              </View>

              <View>

                <Text style={styles.transactionName}>
                  Netflix
                </Text>

                <Text style={styles.transactionDate}>
                  Hoy • 8:30 PM
                </Text>

              </View>

            </View>

            <Text style={styles.expense}>
              - $39.900
            </Text>

          </View>

          {/* ITEM */}
          <View style={styles.transactionItem}>

            <View style={styles.transactionLeft}>

              <View style={styles.iconCircle}>
                <Text>💰</Text>
              </View>

              <View>

                <Text style={styles.transactionName}>
                  Transferencia recibida
                </Text>

                <Text style={styles.transactionDate}>
                  Ayer • 3:20 PM
                </Text>

              </View>

            </View>

            <Text style={styles.income}>
              + $500.000
            </Text>

          </View>

          {/* ITEM */}
          <View style={styles.transactionItem}>

            <View style={styles.transactionLeft}>

              <View style={styles.iconCircle}>
                <Text>🛒</Text>
              </View>

              <View>

                <Text style={styles.transactionName}>
                  MercadoPago
                </Text>

                <Text style={styles.transactionDate}>
                  Ayer • 10:15 AM
                </Text>

              </View>

            </View>

            <Text style={styles.expense}>
              - $120.000
            </Text>

          </View>

        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={onLogout}
        >

          <Text style={styles.logoutText}>
            Cerrar sesión
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  // LOADING

  loadingContainer: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2563EB",
  },

  loadingLogo: {
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "bold",
  },

  loadingText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 25,
  },

  loadingSubtitle: {
    color: "#94A3B8",
    marginTop: 8,
    fontSize: 16,
  },

  // HEADER

  header: {
    backgroundColor: "#0F172A",
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#94A3B8",
    fontSize: 16,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },

  profileCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  // BALANCE CARD

  balanceCard: {
    backgroundColor: "#111827",
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 28,
    padding: 25,
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  balanceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    color: "#94A3B8",
    fontSize: 15,
  },

  hideText: {
    color: "#60A5FA",
    fontWeight: "600",
  },

  balance: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 18,
  },

  account: {
    color: "#94A3B8",
    marginTop: 10,
    fontSize: 14,
  },

  miniCard: {
    backgroundColor: "#1E293B",
    marginTop: 25,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardSmallText: {
    color: "#94A3B8",
    fontSize: 13,
  },

  cardNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
    fontWeight: "600",
  },

  cardBrand: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  // ACTIONS

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 28,
  },

  actionButton: {
    backgroundColor: "#111827",
    width: 78,
    height: 95,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  actionIcon: {
    fontSize: 26,
    marginBottom: 8,
  },

  actionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // TRANSACTIONS

  transactionsCard: {
    backgroundColor: "#111827",
    margin: 20,
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  transactionsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  seeAll: {
    color: "#60A5FA",
    fontWeight: "600",
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  transactionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  transactionDate: {
    color: "#94A3B8",
    marginTop: 4,
  },

  income: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 15,
  },

  expense: {
    color: "#EF4444",
    fontWeight: "bold",
    fontSize: 15,
  },

  // LOGOUT

  logoutButton: {
    backgroundColor: "#DC2626",
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});