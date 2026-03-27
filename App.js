import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function App() {
  let cabImg1 = require('./img/img1.png');
  let cabImg2 = require('./img/img2.png');
  return (
    <>
      {/*componente View01 (principal) que servirá como container de todos
    os outros componentes da tela do app */}
      <View id="View01" style={{
      backgroundColor: 'powderblue', flex: 1,
      paddingTop: 25, paddingHorizontal: 10
    }}>
      <View id="View02" style={{
        backgroundColor: 'white', height: "15%",
        paddingTop: 20, flexDirection: "row", paddingHorizontal: 20,
        justifyContent: 'space-between', alignItems: 'center'
      }}>
        <View id="View05" style={{
          backgroundColor: 'white',
          flexDirection: 'row', alignItems: 'center'
        }}>
          <Image source={cabImg1}
            style={{ width: 50, height: 50 }} />
          <Text style={{ paddingLeft: 15 }}>Nome Sobrenome</Text>
        </View>
        <Image source={cabImg2}
          style={{ width: 18, height: 24, resizeMode: "contain" }} />
      </View>
      <View id="View03" style={{ backgroundColor: 'green', height: "75%" }}>
        <Text>CONTEÚDO</Text>
      </View>
      <View id="View04" style={{ backgroundColor: 'black', height: "10%" }}>
        <Text style={{ color: "white" }}>RODAPÉ</Text>
      </View>
    </View>
    </>
  );
}

export default App;
