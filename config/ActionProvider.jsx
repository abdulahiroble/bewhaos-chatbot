import React from 'react';

const ActionProvider = ({createChatBotMessage, setState, children}) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleHelp = () => {
        const botMessage = createChatBotMessage(
            'I can help you with hardware related questions. Just type in what you want to ask.',
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleScrewdrivers = () => {
        const botMessage = createChatBotMessage(
            'Sorry, we don\'t have any screwdrivers in stock.',
            {
                withAvatar: true,
                delay: 400,
                widget: "overview"
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleOverview = () => {
        const botMessage = createChatBotMessage(
            'We have a wide range of hammers available. Here is a quick overview:',
            {
                withAvatar: true,
                delay: 400,
                widget: "overview"
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleWeather = () => {
        const botMessage = createChatBotMessage(
            'Todays weather is:',
            {
                withAvatar: false,
                delay: 400,
                widget: "weather"
            }
        );


        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleBye = () => {
        const botMessage = createChatBotMessage('Bye! See you soon.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));


    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        hello: handleHello,
                        help: handleHelp,
                        screwdrivers: handleScrewdrivers,
                        overview: handleOverview,
                        bye: handleBye,
                        weather: handleWeather
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;