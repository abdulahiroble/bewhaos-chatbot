const Options = (props) => {
    return (
        <div className="options">
            <h1 className="options-header">{props.title}</h1>
            <div className="options-container">
                {props.options.map((option) => {
                    return (
                        <div
                            className="option-item"
                            onClick={option.handler}
                            key={option.id}
                        >
                            <div className="option-name">
                                <a href={option.handler} target="_blank" rel="noopener noreferrer">
                                    {option.name}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;
