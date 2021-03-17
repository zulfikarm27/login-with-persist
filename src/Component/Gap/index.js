import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Gap extends Component {
  render() {
    return (
      <View style={{ width: this.props.width, height: this.props.height }} />
    );
  }
}

const styles = StyleSheet.create({});
