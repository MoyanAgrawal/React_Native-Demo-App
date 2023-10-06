import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in JAVAscript 21 -ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=2048x2048&w=is&k=20&c=jpX-e9ccizhehsfknsD_TYwKKCpCt49EEW8No_SLhik=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContainer}>
          <Text numberOfLines={3} style={styles.darkText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            maxime, dignissimos ducimus aut qui adipisci, nemo tempore
            cupiditate molestiae, magnam aliquid a! Aliquid pariatur voluptates
            aspernatur debitis. In itaque id fugit commodi.
          </Text>
        </View>
        <View style={styles.footerConatiner}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/images')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/moyan_agrawal/')
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 320,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },

  cardImage: {
    height: 100,
  },

  cardContainer: {
    padding: 8,
  },

  footerConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  socialLinks: {
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    
  },

  darkText:{
    color:'#000000'
  },
});
