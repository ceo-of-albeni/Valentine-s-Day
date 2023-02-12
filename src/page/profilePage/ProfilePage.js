import classes from "../profilePage/profilePage.module.css";
import { useEffect, useState } from "react";



function ProfilePage() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const [ catUrl, setCatUrl ] = useState('https://cdn.dribbble.com/users/160117/screenshots/3197970/media/51a6e132b11664f7f2085bb6a35fc628.gif');

    const getCat = () => {
        fetch(url)
            .then((res) => res.json())
            .then((cats) => {
                console.log('Cats: ', cats);
                const catUrl = cats[0].url;
                setCatUrl(catUrl);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }

    useEffect(() => {
        console.log('Loading your feline friends...');
        getCat();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.prof}>
                <div className={classes.prof_img}>
                    <img src={catUrl} alt="cat"/>
                </div>
                <div className={classes.user}>
                    <div className={classes.user_sur_name}>
                        <div className={classes.user_name}>
                            <p>Kurstan</p>
                        </div>
                        <div className={classes.user_sur}>
                            <p>Abazbekov</p>
                        </div>
                    </div>
                    <div className={classes.user_faculty}>
                        <p>COM-21B</p>
                    </div>
                    <div className={classes.hearts}>
                        <button className={classes.redHeart}></button>
                        <button className={classes.yellowishHeart}></button>
                        <button className={classes.pinkHeart}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;