import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {iconLogo} from '../../Assets';
import {Button, Gap, Input, Link} from '../../Component';
import {messageAlert} from '../../utils/Message';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  _tempData(inputType, value) {
    this.setState({
      [inputType]: value,
    });
  }
  _submitData() {
    const {user, password} = this.state;
    const {dataLogin, navigation} = this.props;
    if (user == '' || password == '') {
      messageAlert('Alert', 'incomplete form', 'danger');
    } else {
      const loginUser = dataLogin.filter((data) => data.user == user);
      if (password == loginUser[0].pass) {
        messageAlert('Login', `welcome, ${user}`, 'success');
        const data = loginUser[0];
        this.props.loginUser({
          id: data.id,
          user: data.user,
          email: data.email,
        });
        navigation.replace('Dashboard');
      } else {
        messageAlert('Alert', 'Wrong Password', 'danger');
      }
    }
  }
  render() {
    const {navigation} = this.props;
    const routeLogin = () => {
      navigation.navigate('Register');
    };
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.topSide}>
              <Image source={iconLogo} style={styles.logoImg} />
              <Text style={styles.label}>Login</Text>
              <Gap height={15} />
            </View>
            <View style={styles.bottomSide}>
              <Input
                icon="user"
                onChangeText={(e) => this._tempData('user', e)}
                sizeIcon={33}
                label="Username"
              />
              <Gap height={height * 0.01} />
              <Input
                icon="key"
                label="Password"
                onChangeText={(e) => this._tempData('password', e)}
                sizeIcon={25}
                secure
                isPassword
              />
              <Gap height={20} />
              <Button
                label="Login"
                margin={20}
                onClick={() => this._submitData()}
              />
            </View>
            <View style={styles.linkSide}>
              <Link title="Forgot Password ? " link="Reset Password" />
              <Link
                title="Don't have an account ? "
                link="Sign Up"
                click={routeLogin}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataLogin: state.usersReducer.user,
    isLogin: state.authReducer.userLoginData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (value) => {
      const data = {
        ...value,
      };
      dispatch({
        type: 'LOGIN-USER',
        userLogin: data,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const styles = StyleSheet.create({
  linkMainLabel: {fontSize: 14},
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  topSide: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  logoImg: {width: width * 0.3, height: height * 0.3},
  label: {fontSize: 16, fontWeight: 'bold'},
  subLabel: {fontSize: 16},
  linkSide: {
    marginVertical: 60,
  },
});
