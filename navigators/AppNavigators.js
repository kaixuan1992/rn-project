import {createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator}  from 'react-navigation'
import HomePage from './../page/HomePage'
import React from 'react'
import {Button} from 'react-native'
import Page1 from './../page/Page1'
import Page2 from './../page/Page2'
import Page3 from './../page/Page3'
import Page4 from './../page/Page4'
import Page5 from './../page/Page5'
// import Ionicons from 'react-native-vector-icons/Ionicons'
const AppTopNavigator= createMaterialTopTabNavigator({
  Page1:{
    screen:Page1,
    navigationOptions:{
      tabBarLabel:'All'
    }
  },
  Page2:{
    screen:Page2,
    navigationOptions:{
      tabBarLabel:'IOS'
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions:{
      tabBarLabel:'React'
    }
  },
  Page4:{
    screen:Page4,
    navigationOptions:{
      tabBarLabel:'React-Native'
    }
  },
  Page5:{
    screen:Page5,
    navigationOptions:{
      tabBarLabel:'Devio'
    }
  } 
},{
  tabBarOptions:{
    tabStyle:{
      mindWidth:50
    },upperCaseLabel:'false',
    scrollEnabled:true,
    style:{backgroundColor:'#678'},
    indicatorStyle:{height:2,backgroundColor:'white'},
    labelStyle:{fontSize:13,marginTop:6,marginBottom:6}
  }
})
export const AppStackNavigator = createStackNavigator({
  HomePage:{
    screen:HomePage
  },
  Page1:{
    screen:Page1,
    navigationOptions:({//定义每个页面的导航数据 动态配置
      navigation
    })=>({
      title:`${navigation.state.params.name}页面名`
    })
  },
  Page2:{
    screen:Page2,
    navigationOptions:{//定义每个页面的导航数据 静态配置
      title:'This is Page2'
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions:(props)=>{
      const {navigation}= props;
      const {state,setParams}= navigation;
      const {params}= state
      return { 
        title:params? params.title :'This is Page3',
        headerRight:(
          <Button
            title={params.mode==='edit'?'保存':'编辑'}
            onPress={()=>{setParams({mode:params.mode=='edit'?'':'edit'})}}
          />
        ) 
        
      }
    }
  },
  Page4:{
    screen:Page4,
    navigationOptions:{//定义每个页面的导航数据 静态配置
      title:'This is Page4'
    }
  },
  Top:{
    screen:AppTopNavigator,
    navigationOptions:{//定义每个页面的导航数据 静态配置
      title:'AppTopNavigator'
    }
  }
})