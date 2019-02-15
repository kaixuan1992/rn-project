/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomePage extends Component<Props> {
  static navigationOptions = {
    title:'Home',
    headerBackTitle:'返回哈哈哈'//设置返回按钮文案，有长度限制
  }
  render() {
    console.log(this.props,'this.props')
    const {navigation}=this.props
    console.log(navigation,'nagvidevloadingviewgation')
    return (
      <View style={styles.container}>
        <Text>Welcome to HomePage</Text>
        <Button
          title={'Go to Page1'}
          onPress={()=>{
            navigation.navigate('Page1',{name:'动态的'})
          }}
          />
          <Button
          title={'Go to Page2'}
          onPress={()=>{
            navigation.navigate('Page2')
          }}
          />
          <Button
          title={'Go to Page3'}
          onPress={()=>{
            navigation.navigate('Page3',{name:'Devio'})
          }}
          />
           <Button
          title={'Go to Top'}
          onPress={()=>{
            navigation.navigate('Top')
          }}
          />
          <Button
          title={'Go to Bottom'}
          onPress={()=>{
            navigation.navigate('Bottom')
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
