import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/17719771/pexels-photo-17719771/free-photo-of-city-water-street-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Logo</Text>
          <Text style={styles.cardLabel}>React Native</Text>
          <Text style={styles.cardDescription}>
            People from many different development backgrounds are learning
            React Native. You may have experience with a range of technologies,
            from web to Android to iOS and more.
          </Text>
          <Text style={styles.cardFooter}>just a start away</Text>
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
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 12,
    marginTop:6,
    flexShrink:1
  },
  cardFooter: {
    color: '#000000',
  },
});
