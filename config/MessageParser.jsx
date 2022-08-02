import React from 'react';

const MessageParser = ({children, actions}) => {
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.hello();
        }

        if (message.includes('help')) {
            actions.help();
        }

        if (message.includes('screwdrivers')) {
            actions.screwdrivers();
        }

        if (message.includes('hammers')) {
            actions.overview();
        }

        if (message.includes('bye')) {
            actions.bye();
        }

        if (message.includes('weather')) {
            actions.weather();
        }


    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;