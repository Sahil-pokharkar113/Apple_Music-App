import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const Music_Image = require('./assets/Apple_Music_icon.png');
  const apple = require('./assets/download.png')
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.MusicImage} source={Music_Image} />
        <Text style={{ color: "white", marginTop: 20, fontSize: 37, fontWeight: "400" }}>Welcome to</Text>
        <Text style={{ color: "red", marginTop: 15, fontSize: 37, fontWeight: "bold" }}>Apple Music</Text>
        <Text style={{ color: "white", marginTop: 20, marginLeft: 20 }}>Play lakhs of songs and thousands of </Text>
        <Text style={{ color: "white", marginTop: 10, marginLeft: 15 }}>playlists ad-free on all your devices.</Text>
        <Text style={{ color: "white", marginTop: 10 }}>Download music to listen offline. Experience </Text>
        <Text style={{ color: "white", marginTop: 10, marginLeft: 10 }}>sound all around you with Spatial Audio.</Text>
      </View>

      <View style={styles.view2}>
        <Image source={apple} style={{ height: 30, width: 30, color: "white" }} />
      </View>

      <View style={{ padding: 20 }}>

        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 10 }}>Your searches, browsing, purchases and device trust </Text>
        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 20 }}>score help improve the service and prevent fraudt If </Text>
        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 7 }}>you subscribe, we also use your music library and what</Text>
        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 10 }}> you play to personalise your experienc and send you </Text>
        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 10 }}> notifications. Your device serial number may be used</Text>
        <Text style={{ color: "lightgray", fontWeight: "100", marginLeft: 30 }}>for offers and your device phone number </Text>


        <View style={{ marginTop: 25 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent : 'center',
    //alignItems: 'center',
    //padding: 50,
    //backgroundColor: "rgba(28,28,30,255)"
    backgroundColor : "black"

  },
  MusicImage: {
    height: 80,
    width: 80,
    marginTop: 80
  },
  view2: {
    marginTop: 150,
    alignItems: "center"
  },
  button: {
    backgroundColor: '#ff3333', // Adjust the background color as needed
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Set width to 100% for full width
  },
  buttonText: {
    color: '#fff', // Adjust text color as needed
    fontSize: 16,
    fontWeight: 'bold',
  },

})


export default App