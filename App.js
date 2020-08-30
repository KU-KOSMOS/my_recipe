import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import "react-native-gesture-handler";
import SplashPage from "./src/Pages/SplashPage";
import IntroPage from "./src/Pages/IntroPage";
import RecipePage from "./src/Pages/RecipePage";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

SplashScreen.hideAsync();

const Stack = createStackNavigator();

export default App = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsReady(true), 800);
    }, []);

    return (
        <NavigationContainer>
            {isReady ? (
                <Stack.Navigator headerMode="screen">
                    <Stack.Screen
                        name="나만의 레시피"
                        component={IntroPage}
                        options={{
                            headerStyle: {
                                backgroundColor: "#ffdd2d",
                            },
                            headerTitleAlign: "left",
                        }}
                    />
                    <Stack.Screen name="Recipe" component={RecipePage} />
                </Stack.Navigator>
            ) : (
                <SplashPage />
            )}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    header: {
        height: 150,
        backgroundColor: "#1A4881",
    },

    headerTitle: {
        position: "relative",
        top: 100,
        paddingLeft: 20,
        fontWeight: "600",
        fontSize: 30,
        color: "#fff",
    },
});
