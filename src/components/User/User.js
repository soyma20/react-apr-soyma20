import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>
                {id} -- {name} <Button to={id.toString()} state={user} >show info</Button>
            </div>
        </div>
    );
};

export {User};