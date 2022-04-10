export const Comment = ({comment}) => {
    return (
        <div className={comment.id % 2 ? 'red':'green'}>
            <span>{comment.name}</span>
            <span>{comment.email}</span>
            <span>{comment.body}</span>
        </div>
    );
}