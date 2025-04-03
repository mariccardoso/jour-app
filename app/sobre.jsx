import { View, Text, StyleSheet, Pressable, Button, Image } from "react-native";
import { Link } from "expo-router";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.aboutUsTitle}>About Us</Text>
            <Text style={styles.aboutUsText}>
                At Jour, we believe that jewelry is more than an{" "}
                <Text style={{ color: "#1eb2ba", fontWeight: "bold" }}>statement</Text> it’s a{" "}
                <Text style={{ color: "#1eb2ba", fontWeight: "bold" }}>legacy</Text>, a{" "}
                <Text style={{ color: "#1eb2ba", fontWeight: "bold" }}>whisper</Text> of elegance that transcends time. Inspired by the grace of simplicity and the art of fine craftsmanship, we create pieces that embody sophistication, minimalism, and timeless beauty.
            </Text>
            <View style={styles.mainCard}>
                <Image
                    source={require("../assets/nosVerde.png")}
                    style={styles.backgroundImage}
                />
                <Text style={styles.mainCardTitle}>Jewels of the Moment, <br></br>Timeless Forever.</Text>
            </View>
            <Text style={styles.aboutUsText}>
                Every design {" "} <Text style={{ color: "#1eb2ba", fontWeight: "bold" }} >tells a story,</Text> a journey of refinement and passion. From the delicate contours of our rings to the radiant shimmer of our necklaces, each piece is crafted to celebrate life’s most precious moments.

                Welcome to Jour, where elegance is eternal, and luxury is redefined in its purest form.
            </Text>
            <Link href="/" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Voltar para Home</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    aboutUsTitle: {
        fontSize: 30,
        color: "#1eb2ba",
        marginTop: 20,
        marginBottom: 30,
        fontFamily: "Times New Roman",
    },
    aboutUsText: {
        fontSize: 15,
        textAlign: "left",
        marginHorizontal: 20,
        marginBottom: 20,
        fontFamily: "Times New Roman",
    },
    mainCard: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        position: "relative",
        borderRadius: 40,
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 20,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    mainCardTitle: {
        fontSize: 20,
        color: "#fff",
        position: "absolute",
        fontFamily: "Times New Roman",
        marginBottom: 15,
        textAlign: "center"
    },
    mainCardText: {
        fontSize: 8,
        color: "#fff",
        position: "absolute",
        fontFamily: "Times New Roman",
        marginTop: 25,
    },
    mainCardButton: {
        position: "absolute",
        bottom: 40,
        left: 80,
        right: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "50%",
        overflow: "hidden",
        opacity: 0.5,
    },
    mainCardButtonTextStyle: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 5,
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#1eb2ba',
        borderRadius: 20,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
});
