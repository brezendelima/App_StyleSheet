import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView }
  from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: 'powderblue', flex: 1,
    paddingTop: 25, paddingHorizontal: 10
  },
  cabecalho: {
    backgroundColor: 'white', height: "15%",
    paddingTop: 20, flexDirection: "row", paddingHorizontal: 20,
    justifyContent: 'space-between', alignItems: 'center'
  },
  corpo: {
    backgroundColor: 'green', height: "75%"
  },
  rodape: {
    backgroundColor: 'black', height: "10%"
  }
});

function App() {
  let cabImg1 = require('./img/img1.png');
  let cabImg2 = require('./img/img2.png');
  return (
    <View id="View01" style={estilos.fundo}>
      {/* componente View01 (principal) que servirá como container de todos
      os outros componentes da tela do app */}
      <View id="View02" style={estilos.cabecalho}>
        <View id="View05" style={{
          backgroundColor: 'white',
          flexDirection: 'row', alignItems: 'center'
        }}>
          <Image source={cabImg1}
            style={{ width: 50, height: 50 }} />
          <Text style={{ paddingLeft: 15 }}>Bruno Rezende</Text>
        </View>
        <Image source={cabImg2}
          style={{ width: 18, height: 24, resizeMode: "contain" }} />
      </View>
      <View id="View03" style={estilos.corpo}>
        <Text>CONTEÚDO</Text>
      </View>
      <View id="View04" style={estilos.rodape}>
        <Text style={{ color: "white" }}>RODAPÉ</Text>
      </View>
    </View >
  );
}

export default App;
