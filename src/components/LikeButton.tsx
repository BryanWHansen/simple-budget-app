import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const LikeButton = () => {
    const [likeClicked, setLikeClicked] = useState(false);
  return (
    <div onClick={() => {
        setLikeClicked(!likeClicked)
        let statusMessage = 'liked';
        if (likeClicked) {
            statusMessage = 'unliked'
        }
        console.log(statusMessage)
        }}>
        {!likeClicked && <GoHeart size={20}/>} 
        {likeClicked && <GoHeartFill size={20} color="#C8A2C8"/>}
    </div>
  )
}

export default LikeButton