import AsyncStorage from "@react-native-community/async-storage";

const storeData = async value => {
    console.log("storing!");

    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("exam-recipe", jsonValue);
    } catch (e) {
        console.error("err!");
    }
};

const getData = async () => {
    console.log("getting!");

    try {
        const jsonValue = await AsyncStorage.getItem("exam-recipe");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error("err!");
    }
};

const RetrieveData = async () => {
    const data = {
        "example-recipe": [
            {
                id: 1,
                "last-modified-at": "2014-06-03T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "지옥에서 온 김치찜",
            },
            {
                id: 2,
                "last-modified-at": "2014-03-02T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "김치에서 온 전",
            },
            {
                id: 3,
                "last-modified-at": "2014-06-07T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "라면스프 없이 끓인 라면",
            },
            {
                id: 4,
                "last-modified-at": "2014-04-03T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "지옥에서 온 김치",
            },
            {
                id: 5,
                "last-modified-at": "2014-05-03T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "소고기로 우려낸 멸치국수",
            },
            {
                id: 6,
                "last-modified-at": "2014-02-03T08:00:00",
                "created-at": "2012-06-03T08:00:00",
                title: "김치에서 온 지옥찜",
            },
        ],
    };

    await storeData(data);

    const gotData = await getData();

    if (!gotData) await storeData(data);
    console.log("got!");
    // console.log(gotData);

    const dataArray = gotData["example-recipe"];

    dataArray.sort((a, b) => {
        a = a["last-modified-at"];
        b = b["last-modified-at"];

        return a < b ? 1 : a < b ? 0 : -1;
    });

    // console.log(typeof dataArray);
    // console.log(dataArray.length);
    return dataArray;
};

export default RetrieveData;
