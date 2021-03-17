import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../../utils';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onClick, margin, label, borders} = this.props;
    return (
      <TouchableOpacity
        onPress={onClick}
        style={styles.Button(margin, borders)}>
        <Text style={styles.Title}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Button: (margin, borders) => ({
    backgroundColor: colors.primary,
    padding: 7,
    borderRadius: borders ? borders : 15,
    alignItems: 'center',
    marginHorizontal: margin ? margin : 0,
  }),
  Title: {color: 'white', fontSize: 20, fontWeight: '800'},
});
