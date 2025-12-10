import React from 'react'
import style from './Home.module.css'
import { useNavigate } from 'react-router-dom';
import photo from './assets/vecteezy_man-waving-with-laptop_10913126.jpg'
function Home() {
    console.log("in Home");
    const navigate=useNavigate();

    function handleClick(){
      navigate('/projects')
    }
  return (
    <div className={style.main_container}>
      <div className={style.sub_container}>
       <div className={style.child_sub_container}>
      <p className={style.para2}>Hii , My name is Vaibhav Kapde</p>
        <div className={style.h1_div}>
        <h1 className={style.h1}>Computer Science engineer </h1>
        <p className={style.para2}>I build intelegent system and software solutions that solve world real problems. Welcome to my digital sapce</p>
        </div>
        <div className={style.page_1_btn_div}>
            <button className={style.btn_1} onClick={handleClick}>View my Work</button>
            <button className={style.btn_2}>download Resume</button>
        </div>
       </div>
       <div className={style.child_sub_container}>
        <div className={style.profile_photo}>
          <img  className={style.img}src={photo} alt="Profile" height={700} width={500}/>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Home
