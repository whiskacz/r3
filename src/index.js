import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import border  from "./img/border.jpg";
import './index.css'
import { RxHeart, RxHeartFilled, RxFace} from "react-icons/rx";


const MyFunction = () => {

    const [like, setHeart] = useState(false)
    const [count, setCount] = useState(0)

    const handleHeart = (e) => {
        if(like){
            setHeart(false)
            console.log("false")
        }
        else setHeart(true)
        console.log("true")
    }

    const handleDoubleClick = () =>{
        setCount(count + 1)
    }

    return (
        <div className="wrapper">
           <h1>My sweetheart</h1>
           <h2>Counter {count}</h2>
           <img src={border} alt="" />
           <div className="container">
            <RxFace className="white clicker" onDoubleClick={handleDoubleClick}/>
            {like ? <RxHeartFilled className="red clicker" onClick={handleHeart}/> : <RxHeart className="red clicker" onClick={handleHeart}/>}
           </div>
        </div>
    )
}


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(<MyFunction />)
