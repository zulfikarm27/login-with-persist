import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Link extends Component {
  render() {
    return (
      <View style={styles.linkContainer}>
        <View>
          <Text style={styles.linkMainLabel}>{this.props.title}</Text>
        </View>
        <TouchableOpacity onPress={this.props.click}>
          <Text style={styles.linkLabel}>{this.props.link}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linkContainer: { flexDirection: "row", alignItems: "center" },
  linkLabel: { color: "#2F3B8F", fontWeight: "600", fontSize: 16 },
  linkMainLabel: { fontSize: 14 },
});
