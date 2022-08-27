import React, {useState} from "react"
import Details from "./Details"
import Modal from "react-modal"


export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
     const [details_opened, setmodal] = useState(false);
  
     function togglem(){
       setmodal(!details_opened)
     }
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./rait.png" />
                <p>{props.rate}%</p>
            </div>
            <div className="info-group">
                <img src="./populacion.png" />
                <p>{props.accessmod}</p>
            </div>
            <div className="info-group">
                <button onClick={togglem}>LEARN MORE</button>
            </div>
            

            <Modal className="details" isOpen={details_opened} onRequestClose={togglem} style={{ overlay: {backgroundColor:'rgba(255, 255, 255, 0.95)'}}}>
              <button onClick={togglem} className="xbutton">x</button>
              <Details img={props.img} schoolname={props.name} desc={props.desc} rate={props.rate} pop={props.population} accessmod={props.accessmod}/>
            </Modal>
        </div>
    )
}