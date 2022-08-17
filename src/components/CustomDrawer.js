import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import {Image, Text, View} from 'react-native';

function CustomDrawer(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'white', flex: 1}}
      {...props}>
      <DrawerItemList {...props} />
      <View style={{height: 200}}>
        <Image
          style={{width: 80, height: 80, borderRadius: 200}}
          source={{
            uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
          }}
        />
        <Text>PRofile</Text>
      </View>
    </DrawerContentScrollView>
  );
}
export default CustomDrawer;
