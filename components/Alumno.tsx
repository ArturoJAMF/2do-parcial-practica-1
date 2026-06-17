import { Text, View } from "react-native";

export default function Alumno(props: any) {
  return (
    <View>
      <Text>📌 Nombre: {props.nombre}</Text>
      <Text>📌 Carrera: {props.carrera}</Text>
      <Text>📌 Semestre: {props.semestre}</Text>
    </View>
  );
}
