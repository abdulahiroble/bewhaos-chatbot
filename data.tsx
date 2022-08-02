type WeatherData = {
    json(): WeatherData | PromiseLike<WeatherData>;
    data?: any;
    current?: any;
    temp_c?: number;
}

export const getData = async () => {

    let data: WeatherData = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Copenhagen&aqi=no`
    );

    data = await data.json()

    return data.current
}; 
