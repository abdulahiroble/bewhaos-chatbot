import React, {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {getData} from "../data";

const WeatherInfo = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStats = async () => {
            const stats = await getData();

            // const filteredFlights = flights.filter((item) => item.Status === null);

            setStats(stats);
            setLoading(false);
        };
        getStats();
    }, []);

    return (
        <div className="stats">
            <div className="column-left">
                {/* <p> Today's temperature:</p> */}
            </div>

            <div className="column-right">
                <ClipLoader color={"#fff"} loading={loading} />
                <p>{`${stats.temp_c} °C`}</p>
            </div>
        </div>
    );
};

export default WeatherInfo;
