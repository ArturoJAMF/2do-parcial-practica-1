import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Perfil({ nombre, carrera, materia, cuatri }) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.nombre}>{nombre}</Text>
      <Text style={estilos.carrera}>{carrera}</Text>
      <Text style={estilos.materia}>{materia}</Text>
      <Text style={estilos.cuatri}>{cuatri}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    width: 350,
    padding: 25,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#E8F5E9",
    borderWidth: 2,
    borderColor: "#A5D6A7",
    alignItems: "center",
  },

  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 15,
  },

  carrera: {
    fontSize: 18,
    color: "#4E5D6C",
    textAlign: "center",
    marginBottom: 10,
  },

  materia: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 8,
  },

  cuatri: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    fontWeight: "600",
  },
});
