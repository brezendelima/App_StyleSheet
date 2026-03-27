import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

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
    backgroundColor: 'white', height: "75%"
  },
  itemCorpo: {
    backgroundColor: "blue", marginTop: 15, borderRadius: 20,
    marginHorizontal: 10, height: 70, borderLeftWidth: 3, borderColor: 'red',
  },
  rodape: {
    backgroundColor: 'white', height: "10%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

function App() {

  let cabImg1 = require('./img/img1.png');
  let cabImg2 = require('./img/img2.png');
  let imgRod1 = require('./img/img7.png');
  let imgRod2 = require('./img/img8.png');
  let imgRod3 = require('./img/img9.png');
  let imgRod4 = require('./img/img10.png');
  let imgRod5 = require('./img/img11.png');

  return (
    <View id="View01" style={estilos.fundo}>

      <View id="View02" style={estilos.cabecalho}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={cabImg1} style={{ width: 50, height: 50 }} />
          <Text style={{ paddingLeft: 15 }}>Bruno Rezende</Text>
        </View>

        <Image source={cabImg2} style={{ width: 18, height: 24, resizeMode: "contain" }} />
      </View>

      <ScrollView id="View03" style={estilos.corpo}>
        <View style={estilos.itemCorpo}><Text>    Teste1</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste2</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste3</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste4</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste5</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste6</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste7</Text></View>
        <View style={estilos.itemCorpo}><Text>    Teste8</Text></View>
      </ScrollView>

      <View id="View04" style={{ flexDirection: 'row', ...estilos.rodape }}>

        <Image source={imgRod1} style={{ width: 50, height: 60 }} resizeMode="contain" />
        <Image source={imgRod2} style={{ width: 50, height: 60 }} resizeMode="contain" />
        <Image source={imgRod3} style={{ width: 60, height: 60 }} resizeMode="contain" />
        <Image source={imgRod4} style={{ width: 50, height: 60 }} resizeMode="contain" />
        <Image source={imgRod5} style={{ width: 50, height: 60 }} resizeMode="contain" />

      </View>

    </View>
  );
}

export default App;