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
            <Stack.Screen options={{
                headerRight: () => (
                    <Pressable onPress={() => alert('Olá, aqui está a sua mensagem!')}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17507/17507017.png' }}
                            style={{ width: 24, height: 24 }}
                        />
                    </Pressable>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => alert('Olá, aqui está a sua mensagem!')}>
                        <Image
                            source={{ uri: 'https://www.svgrepo.com/show/506792/burger-menu-left.svg' }}
                            style={{ width: 24, height: 24 }}
                        />
                    </Pressable>
                ),
                headerTitle: () => (
                    <Image
                        source={require('../assets/Jour.png')}
                        style={{ width: 150, height: 50, marginLeft: 100 }}
                    />
                ),
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24
                }
            }} />
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
});