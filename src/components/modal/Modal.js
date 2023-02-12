import React from "react";
import classes from "./modal.module.css";
import pink from "../../images/pink.svg"



function Modal({closeModal}) {
    return (
        <div className={classes.modal}>
            <div className={classes.modal_container}>
                <div className={classes.modal_inner}>
                    <div className={classes.heart}>
                        <img src={pink} alt="heart"/>
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className={classes.form}>
                        <form className={classes.form_bar}>
                            <input className={classes.email} type="email" id="email" placeholder="Enter alatoo email"/>
                            <textarea className={classes.text} id="freeform" name="textarea" placeholder="Type your text" rows="5" cols="40"/>
                        </form>
                    </div>
                    <div className={classes.modal_footer}>
                        <button onClick={() => closeModal(false)}>Cancel</button>
                        <button type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;