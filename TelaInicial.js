import React, {useEffect, useState} from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  ActivityIndicator, Pressable, Image, StyleSheet, BackHandler, Modal,
} from "react-native";

function TelaInicial({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ margin: 10 }}>Tela_Inicial</Text>
    </View>
  )
};

export default TelaInicial;