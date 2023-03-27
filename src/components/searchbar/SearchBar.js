import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {IMAGES} from '../../constants';
import styles from './styles';
const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <Image source={IMAGES.search} style={styles.searchImageStyle} />
        <TextInput
          placeholder="Search restaurants ....."
          style={{paddingStart: 20}}
        />
      </View>
    </View>
  );
};
export default SearchBar;
