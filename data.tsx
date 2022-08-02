export const getData = async () => {
    let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Copenhagen&aqi=no`
    );
    data = await data.json();
    return data.current
};
