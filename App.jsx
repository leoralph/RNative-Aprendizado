import { View, Text, StyleSheet } from "react-native";

import Constants from "expo-constants";

import { HomeView } from "./home/HomeView";

export default function App() {
    return (
        <View style={estilo.container}>
            <HomeView />
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
});
