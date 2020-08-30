import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { IntroBackgroundComponent } from "../Component/introBackgroundComponent";
import RetrieveData from "../Component/retrieveData";
import IntroTopList from "../Component/introTopList";
import IntroBottomList from "../Component/introBottomList";

const IntroPage = () => {
    RetrieveData();

    return (
        <>
            <View style={styles.view}>
                <IntroTopList />
                <IntroBottomList />
            </View>
            <View style={styles.background}>
                <IntroBackgroundComponent resizeMode="cover" />
            </View>
        </>
    );
};

const cardStyle = {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
};

const styles = StyleSheet.create({
    background: {
        top: 1,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        zIndex: -1,
    },
    listTitle: {
        padding: 10,
        fontSize: 20,
    },
    listCard: {
        ...cardStyle,
        width: 305 - 20,
        backgroundColor: "#1A4881",
        padding: 10,
        marginVertical: 10,

        height: 100,
    },
    listContainer: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
    },
    listBackground: {
        padding: 10,
        ...cardStyle,
        width: 325,
        marginBottom: 10,
        flex: 1,
        backgroundColor: "#c8c8c830",
    },
    scroll: {
        alignItems: "center",
    },
    view: {
        padding: 10,
        height: "100%",
        width: "100%",
        position: "relative",
    },
    title: {
        alignSelf: "baseline",
        fontWeight: "900",
        fontSize: 20,
        marginLeft: "auto",
        marginRight: "auto",
        // backgroundColor: "#ffdd2d",
        fontWeight: "600",
        padding: 10,
        paddingBottom: 8,
        marginBottom: 20,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        ...cardStyle,
        width: 325,
        height: 120,
        backgroundColor: "#c8c8c880",
    },
});

export default IntroPage;
