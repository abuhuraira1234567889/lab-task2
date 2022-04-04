import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import React, { useState } from "react";

export default function App() {
  // use callback react hook to refrest page on click
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  //define state to change the values
  const [value, setValue] = useState("");
  const deck = [];

  const suits = ["Spades", "Diamonds", "Club", "Heart"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  // create a deck of cards
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  const noArray = [];
  for (let i = 0; i < 100; i++) {
    noArray.push({ noArray: i });
  }

  function refreshPage() {
    alert("Your Page is refreshing click OK to refresh");
    window.location.reload(false);
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "blue", fontSize: 18 }}>
            Welcome card shuffle game and lab task 2
          </Text>
        </View>
        {/* usestate to set the value */}
        <Text>
          <Text>Enter Your Text</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(newText) => setValue(newText)}
          />
        </Text>
        <Text> Your Text: {value}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, paddingVertical: 10 }}>
          This is Scroll View task
        </Text>
        {/* view data horizontally in scroll view */}
        <ScrollView horizontal={true}>
          <View style={styles.cont}>
            {noArray.map((numb) => {
              return (
                <>
                  <View style={styles.contaa}>
                    <Text>{numb.noArray}</Text>
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 22, paddingVertical: 10 }}>
          Card Are Shuffling in it
        </Text>
        {/* //the main logic of printing cards is here .....first we map the
         array then chent the Suit and then according to suit we enter in that particular
          value generate randomally */}
        {deck?.slice(0, 5).map((items, index) => {
          if (items.Suit === "Spades") {
            if (items.Value === "2") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_2.png")}
                  />
                </>
              );
            } else if (items.Value === "3") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_3.png")}
                  />
                </>
              );
            } else if (items.Value === "4") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_4.png")}
                  />
                </>
              );
            } else if (items.Value === "5") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_5.png")}
                  />
                </>
              );
            } else if (items.Value === "6") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_6.png")}
                  />
                </>
              );
            } else if (items.Value === "7") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_7.png")}
                  />
                </>
              );
            } else if (items.Value === "8") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_8.png")}
                  />
                </>
              );
            } else if (items.Value === "9") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_9.png")}
                  />
                </>
              );
            } else if (items.Value === "10") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_10.png")}
                  />
                </>
              );
            } else if (items.Value === "Ace") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_Ace.png")}
                  />
                </>
              );
            } else if (items.Value === "Jack") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_Jack.png")}
                  />
                </>
              );
            } else if (items.Value === "King") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_King.png")}
                  />
                </>
              );
            } else if (items.Value === "Queen") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Spades_Queen.png")}
                  />
                </>
              );
            }
          } else if (items.Suit === "Diamonds") {
            if (items.Value === "2") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_2.png")}
                  />
                </>
              );
            } else if (items.Value === "3") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_3.png")}
                  />
                </>
              );
            } else if (items.Value === "4") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_4.png")}
                  />
                </>
              );
            } else if (items.Value === "5") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_5.png")}
                  />
                </>
              );
            } else if (items.Value === "6") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_6.png")}
                  />
                </>
              );
            } else if (items.Value === "7") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_7.png")}
                  />
                </>
              );
            } else if (items.Value === "8") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_8.png")}
                  />
                </>
              );
            } else if (items.Value === "9") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_9.png")}
                  />
                </>
              );
            } else if (items.Value === "10") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_10.png")}
                  />
                </>
              );
            } else if (items.Value === "Ace") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_Ace.png")}
                  />
                </>
              );
            } else if (items.Value === "Jack") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_Jack.png")}
                  />
                </>
              );
            } else if (items.Value === "King") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_King.png")}
                  />
                </>
              );
            } else if (items.Value === "Queen") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Diamonds_Queen.png")}
                  />
                </>
              );
            }
          } else if (items.Suit === "Club") {
            if (items.Value === "2") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_2.png")}
                  />
                </>
              );
            } else if (items.Value === "3") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_3.png")}
                  />
                </>
              );
            } else if (items.Value === "4") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_4.png")}
                  />
                </>
              );
            } else if (items.Value === "5") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_5.png")}
                  />
                </>
              );
            } else if (items.Value === "6") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_6.png")}
                  />
                </>
              );
            } else if (items.Value === "7") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_7.png")}
                  />
                </>
              );
            } else if (items.Value === "8") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_8.png")}
                  />
                </>
              );
            } else if (items.Value === "9") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_9.png")}
                  />
                </>
              );
            } else if (items.Value === "10") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_10.png")}
                  />
                </>
              );
            } else if (items.Value === "Ace") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_Ace.png")}
                  />
                </>
              );
            } else if (items.Value === "Jack") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_Jack.png")}
                  />
                </>
              );
            } else if (items.Value === "King") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_King.png")}
                  />
                </>
              );
            } else if (items.Value === "Queen") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Club_Queen.png")}
                  />
                </>
              );
            }
          } else if (items.Suit === "Heart") {
            if (items.Value === "2") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_2.png")}
                  />
                </>
              );
            } else if (items.Value === "3") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_3.png")}
                  />
                </>
              );
            } else if (items.Value === "4") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_4.png")}
                  />
                </>
              );
            } else if (items.Value === "5") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_5.png")}
                  />
                </>
              );
            } else if (items.Value === "6") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_6.png")}
                  />
                </>
              );
            } else if (items.Value === "7") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_7.png")}
                  />
                </>
              );
            } else if (items.Value === "8") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_8.png")}
                  />
                </>
              );
            } else if (items.Value === "9") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_9.png")}
                  />
                </>
              );
            } else if (items.Value === "10") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_10.png")}
                  />
                </>
              );
            } else if (items.Value === "Ace") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_Ace.png")}
                  />
                </>
              );
            } else if (items.Value === "Jack") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_Jack.png")}
                  />
                </>
              );
            } else if (items.Value === "King") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_King.png")}
                  />
                </>
              );
            } else if (items.Value === "Queen") {
              return (
                <>
                  <Text key={index}>
                    {items.Value} of {items.Suit}
                  </Text>
                  <Image
                    style={{ width: 70, height: 100 }}
                    source={require("./assets/cards/Heart_Queen.png")}
                  />
                </>
              );
            }
          }
        })}
        {/* Card Refresh button */}
        <Button
          onPress={onRefresh}
          title="Click to Refresh Cards"
          color="green"
        />

        <View>
          <Text style={{ fontSize: 18, paddingVertical: 10 }}>Flat list</Text>
          <FlatList
            data={noArray}
            renderItem={({ item }) => <Text>{item.noArray}</Text>}
          />
        </View>
        {/* Page refresh button */}
        <Button
          onPress={refreshPage}
          title="Click To Refresh page"
          color="black"
        />

        <StatusBar style="auto" />
      </View>
    </>
  );
  // });
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    flex: 1,
    flexDirection: "row",
  },
  contaa: {
    paddingHorizontal: 3,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scroll: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});
