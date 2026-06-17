import { Button, Image, StyleSheet, Text, View } from "react-native";
import Perfil from "../../components/ui/Perfil";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 150, height: 150 }}
      />

      <Text style={styles.text}>
        Ejemplo de Props en React Native
      </Text>

      <Perfil
        nombre="Juan Arturo Ferrusca Moreno"
        carrera="Ingeniería en Sistemas Computacionales"
        materia="Programación Móvil"
        cuatri="6° Cuatrimestre"
      />

      <Button
        title="HOLA MUNDO"
        onPress={() => alert("Botón presionado")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8E7",
    gap: 20,
  },

  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6D4C41",
  },
});