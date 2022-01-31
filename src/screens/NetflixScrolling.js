import React from "react";
import { StyleSheet, Text, FlatList, View, Image } from "react-native";
const NetFlixScrolling = () => {
    const netflixSeries = [
        {
            name: 'Money Heist',
            year: 2017,
            genre: 'Crime | drama | Heist | Thriller',
        },
        {
            name: 'Dark',
            year: 2017,
            genre: 'Sci-fi | Time travel',
        },
        {
            name: 'Breaking Bad',
            year: 2008,
            genre: 'Crime | drama | Thriller',
        },
        {
            name: 'Squid Game',
            year: 2021,
            genre: 'Thriller | Horror | Drama | Survival',
        },
        {
            name: 'My Name',
            year: 2021,
            genre: 'Crime | Action | Thriller',
        },
        {
            name: 'All Of Us Are Dead',
            year: 2022,
            genre: 'Zombie apocalypse | Horror fiction',
        },
        {
            name: 'Alice in Borderland',
            year: 2020,
            genre: 'Drama | Sci-fi | Thriller',
        },
        {
            name: 'Black Mirror',
            year: 2011,
            genre: 'Science fiction | Thriller',
        },
        {
            name: 'YOU',
            year: 2018,
            genre: 'Crime | drama | Thriller',
        },
        {
            name: 'Lucifer',
            year: 2016,
            genre: 'Mystery | Comedy drama',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>List of Top 10 Series in Netflix</Text>
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.name;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={netflixSeries}
                renderItem={(elem) => {
                    console.log(elem);
                    return (
                        <View style={styles.viewStyle}>
                            <Text style={styles.textStyle}>Name: {elem.item.name}</Text>
                            <Text style={styles.textStyle}>Year: {elem.item.year}</Text>
                            <Text style={styles.textStyle}>Genre: {elem.item.genre}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 20,
        padding: 5,
    },
    textStyle: {
        color: "white",
        backgroundColor: "#009688",
        fontSize: 30,
        padding: 5,
    },
    viewStyle: {
        padding: 5,
        margin: 20,
    },
    headingText: {
        margin: 30,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: "bold",
        color: "gray",
    },
});
export default NetFlixScrolling;