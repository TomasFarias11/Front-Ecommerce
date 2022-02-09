import React from "react";
import '../../css/Chatbot/UserAvatar.css'

function UserAvatar () {
    const user = JSON.parse(window.localStorage.getItem('usuario'))
    return (
    <div >
        <img className="crazy-user-avatar" src={user.image ? user.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-jQtfNlLReb9BogJaorWS4ngNEWel7gyBw&usqp=CAU"} alt="Not found" />
    </div>
    )
}

export default UserAvatar