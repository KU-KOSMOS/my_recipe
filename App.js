import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import SplashPage from "./src/Pages/SplashPage";
import IntroPage from "./src/Pages/IntroPage";
import RecipePage from "./src/Pages/RecipePage";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Hide default SplashScreen
 *
 * @see https://docs.expo.io/versions/latest/sdk/splash-screen/
 */
SplashScreen.hideAsync();

/**
 * Create StackNavigator
 *
 * @see https://docs.expo.io/guides/routing-and-navigation/#our-recommendation-react-navigation
 */
const Stack = createStackNavigator();

/**
 * Entry point of Expo App
 */
export default App = () => {
    const [isReady, setIsReady] = useState(false);

    /**
     * useEffect for testing Splash screen
     */
    useEffect(() => {
        setTimeout(() => setIsReady(true), 800);
    }, []);

    return (
        <NavigationContainer>
            {/**
             * If screen is ready, render the Stack navigator and RecipePage component on screen
             */}
            {isReady ? (
                <Stack.Navigator headerMode="screen">
                    {/**
                     * Header for app screen
                     */}
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
                    {/**
                     * Use RecipePage component for first stack screen
                     */}
                    <Stack.Screen name="Recipe" component={RecipePage} />
                </Stack.Navigator>
            ) : (
                <SplashPage />
            )}
        </NavigationContainer>
    );
};
