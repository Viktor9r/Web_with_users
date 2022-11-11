import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div>
                <div className={s.item}>
                    <img src={'https://static4.depositphotos.com/1007330/391/i/600/depositphotos_3919019-stock-photo-resort.jpg'}/>
                        {props.message}
                </div>
                <div className={s.Like}>
                    <span>Like </span>
                    {props.likesCount}
                </div>
            </div>
        </div>

    )
        ;
}
export default Post;

