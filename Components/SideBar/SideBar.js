import React from 'react'
import {View, Text,StyleSheet,ScrollView,ImageBackground,Image} from 'react-native'
import {DrawerNavigation} from 'react-native-drawer'
import {Ionicons} from '@expo/vector-icons'

export default SideBar = props =>(
    <ScrollView>
        <ImageBackground 
            source={require('../../assets/background.jpg') }
            style={{ with:undefined, padding:16, paddingTop:49}}>
        </ImageBackground>
    </ScrollView>
)