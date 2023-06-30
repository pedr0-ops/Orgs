import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../assets/logo.png';
import {getTextTranslate} from '../../services/dataService';

class Top extends React.Component {
  state = {
    top: {
      wellCome: '',
      legend: '',
    },
  };

  componentDidMount() {
    const topText = getTextTranslate();
    this.setState({top: getTextTranslate(topText)});
  }

  render() {
    return (
      <View style={style.top}>
        <Image source={logo} style={style.img} />
        <Text style={style.wellCome}>{this.state.top.wellCome}</Text>
        <Text style={style.legend}>{this.state.top.legend}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  img: {
    width: 70,
    height: 28,
  },
  wellCome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Top;
