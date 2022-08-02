import {createChatBotMessage} from "react-chatbot-kit";
import CoBotAvatar from "../components/CoBotAvatar";
// import Overview from "./widgets/Overview";
// import GlobalStatistics from "./widgets/GlobalStatistics";
// import LocalStatistics from "./widgets/LocalStatistics";
// import Contact from "./widgets/Contact";
// import MedicineDelivery from "./widgets/MedicineDelivery";

const config = {
    lang: "no",
    botName: "CoBot",
    initialMessages: [
        createChatBotMessage(
            `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
        ),
        // createChatBotMessage(
        //     "Here's a quick overview of what I can help you with. You can also type in.",
        //     {
        //         withAvatar: false,
        //         delay: 400,
        //         widget: "overview"
        //     }
        // )
    ],
    state: {},
    customComponents: {botAvatar: (props) => <CoBotAvatar {...props} />},
    //   widgets: [
    //     {
    //       widgetName: "overview",
    //       widgetFunc: (props) => <Overview {...props} />,
    //       mapStateToProps: ["messages"]
    //     },
    //     {
    //       widgetName: "globalStatistics",
    //       widgetFunc: (props) => <GlobalStatistics />
    //     },
    //     {
    //       widgetName: "localStatistics",
    //       widgetFunc: (props) => <LocalStatistics />
    //     },
    //     {
    //       widgetName: "emergencyContact",
    //       widgetFunc: (props) => <Contact />
    //     },
    //     {
    //       widgetName: "medicineDelivery",
    //       widgetFunc: (props) => <MedicineDelivery />
    //     }
    //   ]
};

export default config;
