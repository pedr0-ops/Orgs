import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Star from '../Star/Star';

const Producer = ({nome, imagem, estrelas, distancia}) => {
  const [selectCard, setSelectCard] = useState(false);

  const selectCardHandle = () => {
    return selectCard ? setSelectCard(false) : setSelectCard(true);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => selectCardHandle()}>
      <Image source={imagem} style={styles.logo} />
      <View style={styles.text}>
        <Text style={styles.name}>{nome}</Text>
        <Star estrelas={estrelas} selectCard={selectCard} />
      </View>
      <Text style={styles.distance}>{distancia}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d5d7db',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 8,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distance: {
    marginTop: 18,
    marginRight: 16,
    fontSize: 13,
  },
  star: {
    width: 20,
    height: 20,
  },
  starContent: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default Producer;
