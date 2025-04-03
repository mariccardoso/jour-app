import { Stack } from "expo-router";
import { Pressable, Image } from "react-native";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Pressable onPress={() => alert("Olá, aqui está a sua mensagem!")}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/17507/17507017.png",
                            }}
                            style={{ width: 24, height: 24, margin: 15 }}
                        />
                    </Pressable>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => alert("Olá, aqui está a sua mensagem!")}>
                        <Image
                            source={{
                                uri: "https://www.svgrepo.com/show/506792/burger-menu-left.svg",
                            }}
                            style={{ width: 24, height: 24, margin: 15 }}
                        />
                    </Pressable>
                ),
                headerTitle: () => (
                    <Image
                        source={require("../assets/Jour.png")}
                        style={{ width: 150, height: 50, marginLeft: 60 }}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#fff",
                    shadowColor: "#",
                },
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 24,
                },
            }}
        >
            <Stack.Screen name="index" options={{ title: " " }} />
            <Stack.Screen name="sobre" options={{ title: " " }} />
        </Stack>
    );
}