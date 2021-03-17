import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Header, Input} from '../../Component';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const {dataUser, listNote, navigation} = this.props;
    const {text, todo} = this.state;
    return (
      <>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Header name={dataUser.user} email={dataUser.email} />
          <Input
            onChangeText={(e) => this.setState({text: e})}
            sizeIcon={25}
            label="To Do"
            value={text}
            onPress={() => {
              this.props.addToDo(text);
              this.setState({text: ''});
            }}
            note
          />
          {listNote.map((value, key) => {
            return (
              <View style={styles.list} key={key}>
                <Text style={{fontWeight: 'bold'}}>{value}</Text>
              </View>
            );
          })}
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            onClick={() => {
              this.props.logOut(false);
              this.props.burnNote([]);
              navigation.replace('Login');
            }}
            label="Log Out"
            margin={20}
            border={0}
          />
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.authReducer.userLoginData,
    listNote: state.lessonReducer.note,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (value) => {
      dispatch({
        type: 'ADD-NOTE',
        data: value,
      });
    },
    logOut: (value) => {
      dispatch({
        type: 'LOGOUT-USER',
        data: value,
      });
    },
    burnNote: (value) => {
      dispatch({
        type: 'BURN-NOTE',
        data: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
const styles = StyleSheet.create({
  list: {
    borderBottomWidth: 0.5,
    padding: 10,
    borderBottomColor: 'grey',
  },
});
