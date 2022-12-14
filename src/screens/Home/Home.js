import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import imagePath from '../../constants/imagePath';
import styles from './styles';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);
  const [category, setCategory] = useState(0);
  useEffect(() => {
    getBanner();
    getCategories();
    getFood();
  }, []);

  const getBanner = async () => {
    try {
      const response = await fetch('https://tutofox.com/foodapp/api.json');
      const json = await response.json();
      setBanner(json.banner);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await fetch('https://tutofox.com/foodapp/api.json');
      const json = await response.json();
      setCategories(json.categories);
    } catch (error) {
      console.error(error);
    }
  };
  const getFood = async () => {
    try {
      const response = await fetch('https://tutofox.com/foodapp/api.json');
      const json = await response.json();
      setFood(json.food);
    } catch (error) {
      console.error(error);
    }
  };

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setCategory(item.id)}
        style={{
          backgroundColor: item.color,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <Image
          style={{width: 100, height: 60, alignSelf: 'center'}}
          resizeMode="center"
          source={{uri: item.image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const renderFoodList = ({item}) => {
    let catg = category;
    if (catg == 0 || catg == item.categorie)
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri: item.image}}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
              width: width / 2 - 20 - 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
            {item.name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{fontSize: 20, color: 'green'}}>${item.price}</Text>
        </TouchableOpacity>
      );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={imagePath.foodapp}
            style={styles.logo}
            resizeMode={'contain'}
          />
          <View style={{width: '100%', height: width / 1.9}}>
            <Swiper
              style={{height: width / 2}}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={3}>
              {banner.map((itembanner, index) => {
                return (
                  <Image
                    key={index}
                    style={styles.imageBanner}
                    resizeMode="contain"
                    source={{uri: itembanner}}
                  />
                );
              })}
            </Swiper>
          </View>
          <View
            style={{
              height: width / 2.8,
              padding: 10,
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
                Categories
              </Text>

              <FlatList
                data={categories}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={renderCategory}
              />
            </View>
          </View>

          <View style={{flex: 1}}>
            <FlatList
              data={food}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={renderFoodList}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
