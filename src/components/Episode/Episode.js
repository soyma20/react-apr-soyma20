const Episode = ({episode:{name, air_date, episode}}) => {
    return (
        <div>
            name: {name}
            air_date: {air_date}
            episode: {episode}
        </div>
    );
};

export {Episode};