import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class CustomText extends Component {
  render() {
    return (
      <Text style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {},
});
