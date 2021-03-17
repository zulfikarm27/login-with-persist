import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {CustomText} from '..';
import {colors} from '../../utils';

export default class Header extends Component {
  render() {
    const {name, email} = this.props;
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}>
        <CustomText
          style={{
            color: colors.secondary,
            fontSize: 20,
          }}>{`Welcome Student, ${name}`}</CustomText>
        <CustomText
          style={{
            color: colors.secondary,
            fontSize: 16,
          }}>
          {email}
        </CustomText>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
