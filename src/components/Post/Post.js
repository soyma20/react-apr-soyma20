import {Button} from "../Button/Button";

const Post = ({post, flag}) => {
    const {id,title} = post;
    return (
        <div>
            {id} -- {title}
            {
                flag && <Button to={id.toString()} state={post}>Get Details</Button>
            }
        </div>
    );
};

export {Post};