import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

class PostScreen extends React.Component{
    constructor(){
        super();
        this.state ={
            posts : []
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await res.json();
            this.setState({posts : jsonData});
        }catch (error){
            console.log("Fetching error", error)
        }
    }

    render(){
        const {posts} = this.state;

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>

                <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem ={({item}) =>(
                    <View style={styles.item}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        </View>
                )}
                />
            </View>

        );
    }
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
