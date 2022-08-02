import Options from "./Options";

const Overview = (props) => {
    const options = [
        {
            name: "MITSUTOMO - BÆNKHAMMER 200 G",
            handler: "https://www.harald-nyborg.dk/mitsutomo-baenkhammer-200-g",
            id: 1
        },
        {
            name: "MITSUTOMO - KLAPHAMMER 1,5 KG",
            handler: "https://www.harald-nyborg.dk/mitsutomo-klaphammer-15-kg",
            id: 2
        },
        {
            name: "MITSUTOMO - BANEHAMMER 6 KG",
            handler: "https://www.harald-nyborg.dk/mitsutomo-banehammer-6-kg",
            id: 3
        },
        {
            name: "MITSUTOMO - KLØFTHAMMER 600 G",
            handler: "https://www.harald-nyborg.dk/mitsutomo-kloefthammer-600-g",
            id: 4
        }
    ];
    return <Options options={options} title="Options" {...props} />;
};

export default Overview;
