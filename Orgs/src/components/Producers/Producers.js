import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Producer from '../Producer/Producer';
import useProdutores from '../../hooks/useProdutores';

const Producers = ({topo: Top}) => {
  const [title, list] = useProdutores();

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
    color: '#464646',
  },
});

export default Producers;
