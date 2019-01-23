var horizontalStatus = {
    rainy: {
        android: "md-rainy"
    },
    cloud: {
        android: "md-cloudy"
    },
    thunderstorm:{
        android: "md-thunderstorm"
    },
    sunny:{
        android: "md-sunny"
    }
};
var dataFlat = [
    {
        hour: "1 AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "1 PM",
        status: horizontalStatus.cloud,
        degrees: 57
    },{
        hour: "3 PM",
        status: horizontalStatus.thunderstorm,
        degrees: 57
    },
    {
        hour: "8 PM",
        status: horizontalStatus.sunny,
        degrees: 5
    },
    {
        hour: "10 PM",
        status: horizontalStatus.thunderstorm,
        degrees: 57
    }
];
export {horizontalStatus};
export {dataFlat};