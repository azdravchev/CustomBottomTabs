import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "../theme/theme";
import TabContainer from "../components/TabContainer";

const StatisticsScreen = () => {
  return (
    <TabContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Statistics Screen</Text>
      </View>
    </TabContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.body,
  },
});

export default StatisticsScreen;
