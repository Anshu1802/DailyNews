import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={homescreenbg.safeAreaContainer}>
      <ScrollView pagingEnabled={true}>
        <View style={homescreenbg.body}>
          <View style={homescreenbg.cardWrapper}>
            <ImageBackground
              source={require('./assets/girl.jpg')}
              resizeMode="cover"
              style={homescreenbg.card}
            />
          </View>

          <Text style={homescreenbg.belowimageText}>PHOTOGRAPHY</Text>
          <Text style={homescreenbg.headerTextMain}>
            ALWAYS EXPLORE NEW IDEAS
          </Text>
          <Text style={homescreenbg.subtitleText}>
            "Colors dance in the air, as joy and laughter unite. Holi vibrant
            spirit brings hearts closer"
          </Text>
          <Button
            onPress={() => {
              console.log('reading more ansh!');
            }}
            title="Learn More"
            color="black"
          />
        </View>

        <View style={homescreenbg.body}>
          <View style={homescreenbg.cardWrapper}>
            <ImageBackground
              source={require('./assets/men.jpg')}
              resizeMode="cover"
              style={homescreenbg.card}
            />
          </View>

          <Text style={homescreenbg.belowimageText}>PHOTOGRAPHY</Text>
          <Text style={homescreenbg.headerTextMain}>
            ALWAYS EXPLORE NEW IDEAS
          </Text>
          <Text style={homescreenbg.subtitleText}>
            "Colors dance in the air, as joy and laughter unite. Holi vibrant
            spirit brings hearts closer"
          </Text>
          <Button
            onPress={() => {
              console.log('reading more ansh!');
            }}
            title="Learn More"
            color="black"
          />
        </View>

        <View style={homescreenbg.body}>
          <View style={homescreenbg.cardWrapper}>
            <ImageBackground
              source={require('./assets/girl.jpg')}
              resizeMode="cover"
              style={homescreenbg.card}
            />
          </View>

          <Text style={homescreenbg.belowimageText}>PHOTOGRAPHY</Text>
          <Text style={homescreenbg.headerTextMain}>
            ALWAYS EXPLORE NEW IDEAS
          </Text>
          <Text style={homescreenbg.subtitleText}>
            "Colors dance in the air, as joy and laughter unite. Holi vibrant
            spirit brings hearts closer"
          </Text>
          <Button
            onPress={() => {
              console.log('reading more ansh!');
            }}
            title="Learn More"
            color="black"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const homescreenbg = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  body: {
    height: 650,
    width: 350,
    marginRight: 5,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  content_container: {
    gap: 1,
  },
  cardWrapper: {
    width: 300,
    height: 380,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    borderRadius: 15,
    overflow: 'hidden', // Ensures the content respects the border radius
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  belowimageText: {
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: '400',
    color: 'brown',
  },
  headerTextMain: {
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 40,
    fontWeight: '900',
  },
  subtitleText: {
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 20,
  },

});

export default HomeScreen;
