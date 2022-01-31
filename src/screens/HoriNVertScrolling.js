import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
const HoriNVertScrolling = () => {
    const names = [
      {
        index : '1',
      name : "saransh"
      },
      {
        index : '2',
      name : "shrishank"
      },
      {
        index : '3',
      name : "siddhant"
      },
      {
        index : '4',
      name : "sanjay"
      },
      {
        index : '5',
      name : "ajita"
      },
      {
        index : '6',
      name : "kamana"
      },
      {
        index : '7',
      name : "anshika"
      },
      {
        index : '8',
      name : "nisha"
      },
  ];
    return (
      <FlatList style = {styles.listStyle}
        keyExtractor={(key)=>{
          return key.index;
        }}
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={names} 
        renderItem={(elem)=>{
        console.log(elem);
        return <Text style={styles.textStyle}>{elem.item.name}</Text>
  
      }}
      />
    );
  }
  
  const styles = StyleSheet.create({
    listStyle:{
      textAlign:'center',
      margin:20,
      padding:10,
    },
    textStyle:{
      color:'green',
      fontSize:30,
      textTransform:'capitalize',
      backgroundColor:"green",
      color:'white',
      padding:30,
      margin:20,
      height:100,
    },
  });
  export default HoriNVertScrolling;