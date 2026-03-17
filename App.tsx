import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Topo from './components/Topo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Topo />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.listra} />
          <Text style={styles.titulo}>Cartão de crédito</Text>
          <Text style={styles.subtitulo}>Fatura</Text>
          <Text style={styles.valor}>R$ 1.500,00</Text>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pagar fatura</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.listra} />
          <Text style={styles.titulo}>Conta</Text>
          <Text style={styles.subtitulo}>Saldo disponível</Text>
          <Text style={styles.valor}>R$ 300,00</Text>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Transferir</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cartoes}>
          <Text style={styles.textoCartoes}>Meus cartões</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF200',
  },

  content: {
    flex: 1,
    backgroundColor: '#1E59AE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 30,
    overflow: 'hidden',
    position: 'relative',
  },

  listra: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: '#FFF200',
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },

  subtitulo: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },

  valor: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E59AE',
    marginBottom: 18,
  },

  botao: {
    backgroundColor: '#1E59AE',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  cartoes: {
    backgroundColor: '#FFF200',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoCartoes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});