import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {iconLogo} from '../../Assets';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._route();
  }
  _route() {
    setTimeout(() => {
      const {isLogin} = this.props;
      this.props.navigation.replace(isLogin ? 'Dashboard' : 'Login');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View>
            <Image source={iconLogo} />
          </View>
          <View>
            <Text style={styles.label}>Salt Academy App</Text>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
const styles = StyleSheet.create({
  label: {fontSize: 18, letterSpacing: 1, fontWeight: 'bold'},
  page: {flex: 1, backgroundColor: 'white'},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
