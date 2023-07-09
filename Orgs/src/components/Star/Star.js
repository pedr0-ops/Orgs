import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaVazia from '../../assets/estrelaCinza.png';

const Star = ({estrelas, selectCard}) => {
  const [selectNumberStar, setSelectNumberStar] = useState(estrelas);
  const styles = stylesCard(selectCard);

  const selectStar = numberStar => {
    return () => {
      setSelectNumberStar(numberStar);
    };
  };

  const handleEstrelas = () => {
    const estrelasArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= selectNumberStar) {
        estrelasArray.push(
          <TouchableOpacity onPress={selectStar(i)}>
            <Image style={styles.star} key={i + 1} source={estrela} />
          </TouchableOpacity>,
        );
      } else {
        estrelasArray.push(
          <TouchableOpacity onPress={selectStar(i)}>
            <Image style={styles.star} key={i + 1} source={estrelaVazia} />
          </TouchableOpacity>,
        );
      }
    }
    return estrelasArray;
  };

  return (
    <>
      <View style={styles.starContent}>{handleEstrelas()}</View>
    </>
  );
};

const stylesCard = cardSelected =>
  StyleSheet.create({
    star: {
      width: cardSelected ? 35 : 20,
      height: cardSelected ? 30 : 20,
    },
    starContent: {
      flexDirection: 'row',
      marginTop: 5,
      height: 40,
    },
  });
export default Star;
