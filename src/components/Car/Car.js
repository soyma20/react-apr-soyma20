const Car = ({car:{id, model, price, year}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <hr/>
        </div>
    );
};

export {Car};