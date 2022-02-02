import React from "react";
import { StyleSheet, Text, Button, Linking, View, Image } from "react-native";
import { 
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  } from '@expo-google-fonts/josefin-sans';
  import { useFonts } from "expo-font";
  import AppLoading from "expo-app-loading";

const NetflixCard = ()=>{
    let [fontsLoaded] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return(
        <View style={styles.container}>
        <Text style={styles.header}>Netflix Card</Text>
        <View style={styles.poster}>
            <Image style={styles.imgStyle} source={{uri:"https://i2.wp.com/i.dailymail.co.uk/1s/2022/01/31/22/53608329-10461691-image-a-8_1643669065316.jpg"}}/>

        <View style={styles.poster_info}>
            <Text style={styles.poster_title}>All Of Us Are Dead</Text>
            <Text style={styles.poster_text}>All of Us Are Dead (Korean: 지금 우리 학교는; RR: Jigeum Uri Hakgyoneun; lit. Now at Our School) is a 2022 South Korean coming-of-age zombie apocalypse horror streaming television series. It stars Park Ji-hoo, Yoon Chan-young, Cho Yi-hyun, Park Solomon, Yoo In-soo, Lee Yoo-mi, Kim Byung-chul, Lee Kyu-hyung, and Jeon Bae-soo.</Text>
        </View>
        <View style={styles.buttonSize}>
        <Button style={styles.buttonStyle} title="Watch Now" onPress={()=>{
            Linking.openURL("https://www.netflix.com/np/title/81237994?source=35")
        }}/>
        </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"floralwhite",
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        color:"#000",
        marginBottom:20,
        fontFamily: "JosefinSans_700Bold",
    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center",
    },
    poster_info:{
        alignItems:"center",
        marginVertical:10,
    },
    poster_title:{
        fontSize:20,
        marginBottom:10,
        fontFamily:"JosefinSans_600SemiBold,"
    },
    poster_text:{
        color:"#999",
        paddingHorizontal:20,
        marginBottom:10,
        fontFamily:"JosefinSans_300Light",

    },
    imgStyle:{
        width:"100%",
        aspectRatio:1,
    },
    buttonSize:{
        marginBottom:20,
    },
    buttonStyle:{
        borderWidth:0,
        borderRadius:20,
    },
});
export default NetflixCard;