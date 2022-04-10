export const Post = ({post}) => {
    return (
        <div className={post.id % 2 ? 'red' : 'green'}>
            <span>{post.id}</span>
            <span>{post.title}</span>
            <span>{post.body}</span>

        </div>
    );
}