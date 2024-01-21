import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Hello Expo app");

  handle = function () {
    let randomName = getRandomString(5);
    randomName = toFirstCharCapitalized(randomName);
    setName(randomName);
  };

  function toFirstCharCapitalized(string) {
    let firstChar = string[0];
    firstChar = firstChar.toUpperCase();
    let firstCharCapitalizedString = firstChar + string.slice(1);
    return firstCharCapitalizedString;
  }

  function getRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {name}</Text>
      <Pressable style={styles.button} onPress={this.handle.bind(this)}>
        <Text style={styles.buttonTextColor}>Click to change app name</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "100",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 2,
    backgroundColor: "#f44336",
  },

  buttonTextColor: {
    color: "#ffffff",
  },
});
