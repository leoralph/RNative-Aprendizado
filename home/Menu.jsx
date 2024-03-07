import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Menu({ title, color = "#25CCB0", onPress }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 22,
        color: "white",
    },
});
