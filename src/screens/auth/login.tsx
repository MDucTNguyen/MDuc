import { View,Text, StyleSheet,Button } from "react-native";

export default function Login({title}: {title:string}) {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    title:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'blue'
    },
})