import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {getProductores} from '../../services/dataService';
import Producer from '../Producer/Producer';

const Producers = ({topo: Top}) => {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const response = getProductores();
    setTitle(response.titulo);
    setList(response.lista);
  }, []);

  const RenderTopList = () => {
    return (
      <>
        <Top />
        <Text style={estilos.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Producer {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={RenderTopList}
    />
  );
};

const estilos = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default Producers;
