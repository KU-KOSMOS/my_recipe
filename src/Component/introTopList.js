import React, { useState, useEffect } from "react";
import { Image, View, Text, VirtualizedList, StyleSheet } from "react-native";
import CircleScroll from "./circleScroll";
import RetrieveData from "./retrieveData";

/**
 * Function getItemCountFetched
 *
 * @return the count of fetched items
 */
const getItemCountFetched = data => {
    return data.length;
};

/**
 * Function getItemFetched
 *
 * @return array of fetched data
 */
const getItemFetched = (data, index) => {
    // console.log(data);
    return data[index];
};

const Item = ({ title, date }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={require("./image.png")} />
            <View style={styles.cardText}>
                <Text style={styles.header}>{title}</Text>

                <View>
                    <Text>최종 수정일자</Text>
                    <Text>{date}</Text>
                </View>
            </View>
        </View>
    );
};

/**
 * Component IntroTopList
 *
 * @return component of top list on intro screen
 */
const IntroTopList = () => {
    const [state, setState] = useState(1);
    const [ready, setReady] = useState(false);
    const [data, setData] = useState(null);

    /**
     * When the component is ready, retrieve data from asyncStorage on device
     */
    useEffect(() => {
        const fetch = async () => {
            const data = await RetrieveData();

            setData(data);
            setReady(true);
        };

        fetch();
    }, []);

    if (!ready) {
        /**
         * If the data is not ready, render empty component
         */
        return <></>;
    } else {
        /**
         * for testing
         */
        console.log(data);

        return (
            <>
                <Text style={styles.title}>나의 최근 레시피</Text>
                <View style={styles.container}>
                    {/**
                     * VirtualizedList for rendering items on top of the screen
                     *
                     * @see https://docs.expo.io/versions/latest/react-native/virtualizedlist/
                     */}
                    <VirtualizedList
                        getScrollRef={ref => console.log(ref)}
                        /**
                         * When the viewable item changed,
                         * Change the state from previous item to current item.
                         */
                        onViewableItemsChanged={({ viewableItems }) => {
                            viewableItems.map(change => {
                                if (change.isViewable) {
                                    setState(change.index + 1);
                                }
                            });
                        }}
                        /**
                         * parameters for sticky scroll of list
                         */
                        decelerationRate={0}
                        snapToAlignment="center"
                        snapToInterval={365}
                        width={365}
                        horizontal={true}
                        data={data}
                        initialNumToRender={4}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={renderItem => {
                            // console.log(renderItem);
                            return (
                                <Item
                                    title={renderItem.item.title}
                                    date={renderItem.item["last-modified-at"]}
                                />
                            );
                        }}
                        getItemCount={getItemCountFetched}
                        getItem={getItemFetched}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.scroll}>
                    <CircleScroll state={state} number={data.length} />
                </View>
            </>
        );
    }
};

const cardStyle = {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
};

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: "600",
    },
    header: {
        fontWeight: "500",
        fontSize: 20,
    },
    cardText: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 90,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
    },
    img: {
        width: 120,
        height: 100,
        borderRadius: 10,
    },
    card: {
        ...cardStyle,
        flexDirection: "row",
        width: 345,
        height: 130,
        padding: 15,
        backgroundColor: "#c8c8c880",
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    scroll: {
        alignItems: "center",
    },
});

export default IntroTopList;
