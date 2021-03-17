import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShowPassword from './ShowPassword';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLook: true,
      border: 'black',
    };
  }

  render() {
    const {isLook, border} = this.state;
    const {
      icon,
      sizeIcon,
      label,
      isBorder,
      isPassword,
      secure,
      onChangeText,
      note,
      onPress,
      value,
    } = this.props;
    const onFocusForm = () => {
      this.setState({
        border: 'blue',
      });
    };
    const onBlurForm = () => {
      this.setState({
        border: 'black',
      });
    };
    return (
      <View>
        <View style={styles.input(isBorder, border)}>
          <View style={styles.iconSection}>
            <Icon color="#495057" size={sizeIcon} name={icon} />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              value={value}
              placeholder={label}
              onBlur={onBlurForm}
              onChangeText={onChangeText}
              onFocus={onFocusForm}
              secureTextEntry={secure && isLook}
              style={styles.textInput}
            />
          </View>
          {note && (
            <TouchableOpacity onPress={onPress} style={styles.iconSection}>
              <Icon color="#495057" size={sizeIcon} name="paper-plane" />
            </TouchableOpacity>
          )}
          {isPassword && (
            <ShowPassword
              isLook={isLook}
              onClick={() => this.setState({isLook: !this.state.isLook})}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: (isBorder, border) => ({
    borderColor: border,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    borderWidth: isBorder ? 0.5 : 0,
    marginBottom: 10,
    borderRadius: isBorder ? 5 : 0,
  }),
  iconSection: {padding: 10},
  inputSection: {flex: 1},
  textInput: {marginLeft: 5},
});
