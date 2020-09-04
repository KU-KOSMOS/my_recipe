import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SvgComponent } from "../Component/svgComponent";
import Svg, { Circle } from "react-native-svg";

import {
    useFonts,
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";

/**
 * Component for rendering custom splash page
 */
const SplashPage = () => {
    let [fontsLoaded] = useFonts({
        NotoSansKR_100Thin,
        NotoSansKR_300Light,
        NotoSansKR_400Regular,
        NotoSansKR_500Medium,
        NotoSansKR_700Bold,
        NotoSansKR_900Black,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.nemo}>
                    <View style={styles.nemoShadow} />
                    <View style={styles.realNemo} />
                    <Text
                        style={{
                            ...styles.nemoTitle,
                            fontFamily: "NotoSansKR_700Bold",
                        }}
                    >
                        나만의
                        {"\n"}
                        레시피&nbsp;&nbsp;{"\n"}
                    </Text>
                </View>
                <Svg style={styles.circle}>
                    <Circle
                        cx="160"
                        cy="109"
                        r="4"
                        stroke="black"
                        strokeWidth="3"
                    />
                </Svg>
                <View style={styles.background}>
                    <View style={styles.titleHeader}>
                        <Text style={styles.title}>MY&nbsp;</Text>
                        <Text style={{ ...styles.title, color: "white" }}>
                            RECIPE
                        </Text>
                    </View>
                    <SvgComponent resizeMode="cover" style={{ zIndex: -1 }} />
                </View>
            </View>
        );
    }
};

export default SplashPage;

const styles = StyleSheet.create({
    circle: {
        position: "absolute",
        color: "black",
        top: 300,
        zIndex: 2,
    },
    nemoTitle: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 36,
        fontWeight: "800",
        textAlign: "right",
        lineHeight: 45,
    },
    realNemo: {
        position: "absolute",
        width: 200,
        height: 200,
        backgroundColor: "#ffdd2d",
    },
    nemoShadow: {
        position: "relative",
        top: -20,
        left: 50,
        width: 180,
        height: 200,
        borderWidth: 1,
        borderColor: "#888888",
    },
    nemo: {
        position: "relative",
        top: 320,
        left: -25,
        width: 200,
        height: 200,
        zIndex: 2,
    },
    container: {
        flex: 1,
        elevation: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    background: {
        top: 1,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    titleHeader: {
        position: "relative",
        top: 380,
        right: 20,

        zIndex: 1,
    },
    title: {
        textAlign: "center",
        width: 26,
        fontSize: 32,
    },
});
