import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import axios from "axios";
import Header from "../../components/Header";
import CountryCard from "../../components/CountryCard";
import { amber, black, white, blue } from "@/constants/Colors";
import { useEffect, useState } from "react";
export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const endpoint = 'https://restcountries.com/v3.1/region'
  useEffect(()=>{
    fetchCountries("europe")
  },[])
  const fetchCountries = async (continent: string)=>{
    const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`)
    setData(response.data)
    return response.data
  }
 const searchHandler = () =>{

 }
  const regions = ["Antarctic", "Africa", "Europe", "Asia", "Americas"];
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        {regions.map((element, index) => (
          <>
            <Text style={styles.continentName}>{element}</Text>
            <ScrollView key={index} horizontal={true} style={{ paddingTop: 20 }}>
              <CountryCard continent={element} />
            </ScrollView>
          </>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: black,
    display: "flex",
    flex: 1,
  },
  continentName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
});
