import React from "react";
import Svg, { Circle } from "react-native-svg";
import { View, StyleSheet } from "react-native";

let widths;

/**
 * Component CircleScroll
 *
 * @param state number or state of item viewing currently
 * @param number total number of items
 * @return component of svg items highlighted on one circle of focused item
 */
const CircleScroll = ({ state, number }) => {
    const circles = [];
    for (let i = 0; i < number; i++) {
        circles.push(
            <Svg key={i} height="10" width="10">
                <Circle cx="5" cy="5" r="5" fill="#c4c4c4" />
            </Svg>
        );
    }

    circles[state - 1] = (
        <Svg key={state - 1} height="10" width="10">
            <Circle cx="5" cy="5" r="5" fill="#1A4881" />
        </Svg>
    );

    widths = number * 20;

    return (
        <View style={{ ...styles.container, width: widths }}>
            {circles.map(circle => circle)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});

export default CircleScroll;
