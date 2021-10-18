import './style.css'

// pode passar os atribustos direto aqui, conforme comentando no App
export const PostCard = ({post}) => {
    // const post = props.post;
    // const { post } = props;
    return (
        <div className='post'>
            <img src={post.cover} alt={post.title} />  
            <div  className='post-content'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}