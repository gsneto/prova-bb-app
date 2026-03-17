import { StyleSheet, Text, View, Image } from 'react-native';

export default function Topo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bb-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.texto}>Olá, Felipe Melo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF200',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },

  logo: {
  width: 210,
  height: 52,
  alignSelf: 'center',
  marginBottom: 14,
},

  texto: {
    fontSize: 14,
    color: '#000',
  },
});