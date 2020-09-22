import React from 'react';
import {StyleSheet, Text, Image, View, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = () => {
  const data = [
    {id: 1, name: 'makes', position: 'web dev'},
    {id: 2, name: 'neet', position: 'web dev'},
    {id: 3, name: 'daaa', position: 'web dev'},
    {id: 4, name: 'tiktak', position: 'web dev'},
  ];

  const renderList = (item) => {
    return (
      <Card style={styles.mycard}>
        <View style={styles.cardView}>
          <Image
            style={{width: 50, height: 50, borderRadius: 50 / 2}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View>
      {/*renderList*/}
      <FlatList
        data={data}
        renderItem={({item}) => {
          return renderList(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => console.log('Pressed')}
        theme={{colors: {accent: 'blue'}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
