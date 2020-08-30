import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const ListItem = ({ title }) => (
    <View style={styles.listCard}>
        <Text style={{ color: "white" }}>{title}</Text>
    </View>
);

const SectionData = [
    {
        title: "즐겨찾기",
        data: ["지옥에서 온 김치찜", "유승은"],
    },
    {
        title: "양식",
        data: ["김치에서 온 전", "라면스프 없이 끓인 라면"],
    },
    {
        title: "중식",
        data: [1, 2, 3],
    },
];

const IntroBottomList = () => {
    return (
        <View style={styles.listContainer}>
            <Text style={{ ...styles.title, alignSelf: "flex-start" }}>
                목록
            </Text>
            <View style={{ ...styles.listBackground }}>
                <SectionList
                    borderRadius={10}
                    sections={SectionData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <ListItem title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.listTitle}>{title}</Text>
                    )}
                    stickySectionHeadersEnabled={false}
                />
            </View>
        </View>
    );
};

export default IntroBottomList;

const cardStyle = {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
};

const styles = StyleSheet.create({
    listCard: {
        ...cardStyle,
        width: 335 - 20,
        backgroundColor: "#1A4881",
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 0,

        height: 100,
    },
    listContainer: {
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
    },
    listBackground: {
        padding: 10,
        ...cardStyle,
        width: 345,
        marginBottom: 10,
        paddingVertical: 15,
        flex: 1,
        backgroundColor: "#c8c8c830",
    },
    listTitle: {
        padding: 5,
        paddingHorizontal: 0,
        fontSize: 18,
        fontWeight: "500",
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "600",
    },
});
