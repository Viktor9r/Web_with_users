import React from "react";
import s from './FriendsItem.module.css';

const FriendItem = (props) => {
    let path = "/dialogs/" + props.id
    return (<div>
            <div className={s.r}>
                <img
                    src={'https://static4.depositphotos.com/1007330/391/i/600/depositphotos_3919019-stock-photo-resort.jpg'}/>
                <div className={s.name}>{props.name}</div>
            </div>
        </div>
    )
}

export default FriendItem