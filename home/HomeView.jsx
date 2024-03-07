import { View, Text, StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import Menu from "./Menu";

export function HomeView() {
    return (
        <View style={[styles.viewMain, styles.buttons]}>
            <Menu title="sos" color="green" onPress={() => alert("Clique SOS")} />

            <Menu title="REGISTRO" onPress={() => alert("Clique REGISTRO")} />

            <Menu title="RASTREIO" onPress={() => alert("Clique RASTREIO")} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewMain: {
        flex: 1,
    },
    buttons: {
        justifyContent: "space-evenly",
    },
});
