const User = (user) => {
    const {id, name}= user
    return (
        <div>
            {id}.){name}
        </div>
    );
};

export {User};