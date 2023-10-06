import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react'

export default function Contactlist() {

    const contacts = [
      {
        uid: 1,
        name: 'Hitansh',
        status: 'Just an Extra Ordinary Teacher',
        imageUrl:
          'https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=2048x2048&w=is&k=20&c=jpX-e9ccizhehsfknsD_TYwKKCpCt49EEW8No_SLhik=',
      },
      {
        uid: 2,
        name: 'HitMan',
        status: 'Just an Extra Ordinary Player',
        imageUrl:
          'https://images.pexels.com/photos/17411073/pexels-photo-17411073/free-photo-of-wheat-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        uid: 3,
        name: 'Virat',
        status: 'Just an Extra Ordinary Run Machine',
        imageUrl:
          'https://media.istockphoto.com/id/1195236612/photo/indian-robin-bird-sitting-on-a-tree.jpg?s=612x612&w=is&k=20&c=t4PePbM9PKwsA7XzgRYn-K1Pnql1SVJWJfmIa53z0QI=',
      },
      {
        uid: 4,
        name: 'Rishabh Pant',
        status: 'Urvashi Rautela',
        imageUrl:
          'https://images.pexels.com/photos/17715085/pexels-photo-17715085/free-photo-of-brown-bear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contactlist</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            {/* //key is used to provide uniqueness */}
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
  },

  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },

  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#8D3DAF',
    padding: 6,
    borderRadius: 10,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },

  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },

  userStatus: {
    fontSize: 12,
  },
});