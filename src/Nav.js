import React, {useEffect,useState} from "react";
import './N.css';

function Nav() {
    const [Show,handleShow] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll",() => {
            if (window.scrollY >100 ){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return(

        <div className={`nav ${Show && "nav_black"}`}>

            <img className="nav_log"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                 alt="logo_netflis"/>

            <img className="nav_profil"
                 src="https://i.ibb.co/KqBWzGF/IMG-3071.png"
                 alt="nav_profil"/>

        </div>
    )

}
export default Nav