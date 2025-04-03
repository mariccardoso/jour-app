import { View, Text, StyleSheet, Pressable, Button, Image } from "react-native";
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {

    const navigation = useNavigation();

    const handHideHeader = () => {
        navigation.setOptions({ headerShown: false });
    }
    const handShowHeader = () => {
        navigation.setOptions({ headerShown: true });
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainCard}>
                <Image
                    source={require('../assets/mainCard.png')}
                    style={styles.backgroundImage}
                />
                <Text style={styles.mainCardTitle}>UP TO 15% OFF</Text>
                <Text style={styles.mainCardText}>on diamond jewelery</Text>
                <Pressable style={styles.mainCardButton} >
                    <Link href="./sobre" style={styles.mainCardButtonTextStyle}>ABOUT PAGE</Link>
                </Pressable>
            </View>
            <View style={styles.navBar}>
                <Link href={"./"} style={styles.navBarLinkPressed}>Home</Link>
                <Link href={"./sobre"} style={styles.navBarLink}>Sobre Nós</Link>
                <Link href={"./login"} style={styles.navBarLink}>Login</Link>
                <Link href={"./termos"} style={styles.navBarLink}>Termos de Uso</Link>
            </View>
            <View style={styles.sectionCards}>
                <View style={styles.cardsAneis}>
                    <View style={styles.card} >
                        <Image
                            source={{ uri: "https://versalejoias.com/cdn/shop/files/Designsemnome_22.jpg?v=1741182628&width=800" }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardTitle}>Anel Grandiente Curve</Text>
                        <Text style={styles.cardPrice}>$1220</Text>
                    </View>
                    <View style={styles.card} >
                        <Image
                            source={{ uri: "https://versalejoias.com/cdn/shop/files/Designsemnome_22.jpg?v=1741182628&width=800" }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardTitle}>Anel Grandiente Curve</Text>
                        <Text style={styles.cardPrice}>$1220</Text>
                    </View>
                    
                </View>
                <View style={styles.cardsAneis}>
                    <View style={styles.card} >
                        <Image
                            source={{ uri: "https://versalejoias.com/cdn/shop/files/Designsemnome_22.jpg?v=1741182628&width=800" }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardTitle}>Anel Grandiente Curve</Text>
                        <Text style={styles.cardPrice}>$1220</Text>
                    </View>
                    <View style={styles.card} >
                        <Image
                            source={{ uri: "https://versalejoias.com/cdn/shop/files/Designsemnome_22.jpg?v=1741182628&width=800" }}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardTitle}>Anel Grandiente Curve</Text>
                        <Text style={styles.cardPrice}>$1220</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    mainCard: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        borderRadius: 40,
        marginTop: 20,
        borderRadius: 20,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    mainCardTitle: {
        fontSize: 20,
        color: '#fff',
        position: 'absolute',
        fontFamily: 'Times New Roman',
        marginBottom: 15,
    },
    mainCardText: {
        fontSize: 8,
        color: '#fff',
        position: 'absolute',
        fontFamily: 'Times New Roman',
        marginTop: 25
    },
    mainCardButton: {
        position: 'absolute',
        bottom: 40,
        left: 80,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '50%',
        overflow: 'hidden',
        opacity: 0.5,
    },
    mainCardButtonTextStyle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },
    navBar: {
        flexDirection: 'row',
        gap: 25,
        marginTop: 30,
    },
    navBarLink: {
        color: '#a1a1a1',
        fontFamily: 'Arial',
        fontSize: 15
    },
    navBarLinkPressed: {
        color: '#000',
        fontWeight: 'bold',
        textDecorationColor: '#1eb2ba',
        textDecorationLine: 'underline',
        textDecorationStyle: 'double'
    },
    sectionCards: {
        flexDirection: 'column',
        marginTop: 30
    },
    cardsAneis: {
        flexDirection: 'row',
        gap: 30,
        marginBottom: 20
    },
    card: {
        width: 150,
        height: 200,
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        border: '1px solid #1eb2ba'
    },
    cardImage: {
        width: '100%',
        height: '70%'
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 13
    }
});