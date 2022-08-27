import React, {useState} from "react"
import Contact from "./Contact"
import Details from "./Details"
import Modal from "react-modal"

Modal.setAppElement("#root");

function App() {

    return (
      <div>
        <h1 className="heading">COMET PROJECT DEMO</h1>
        <div className="contacts" >
            <Contact 
                img="./collegez/hahvahd.png" 
                name="Harvard University"
                desc="An elite, Ivy League university. Popular majors include Computer Science, Economics, and Social Science Research Methods. Graduating 98%% of students, Harvard alumni go on to earn an average starting salary of $70,300."
                state='MA'
                population={5699}
                accessmod='private'
                rate={5}
            />
            <Contact 
                img="./collegez/yail.png"
                name="Yale University"
                desc="A large research university with a wide array of programs, departments, schools, centers, museums, and many affiliated organizations. "
                state='CT'
                population={6494}
                accessmod='private'
                rate={7}
            />
            <Contact 
                img="./collegez/crnell.png"
                name="Cornell University"
                desc="A privately endowed research university and a partner of the State University of New York. As the federal land-grant institution in New York State, we have a responsibility—unique within the Ivy League—to make contributions in all fields of knowledge in a manner that prioritizes public engagement to help improve the quality of life in our state, the nation, the world."
                state='NY'
                population={15503}
                accessmod='private'
                rate={11}
            />
            <Contact 
                img="./collegez/gatech.png"
                name="Georgia Institute of Technology"
                desc="A top 10 public research university with nearly 40,000 students who study in person at the main campus in Atlanta, at Georgia Tech-Lorraine in France, at Georgia Tech-Shenzhen in China, as well as through distance and online learning."
                state='GA'
                population={16561}
                accessmod='public'
                rate={21}
            />
            <Contact 
                img="./collegez/uclaaa.png"
                name="UCLA"
                desc="A public research university whose mission is the creation, dissemination, preservation and application of knowledge for the betterment of our global society. UCLA combines the close-knit learning environment of a spirited public school with the endless opportunities of a world-class city."
                state='CA'
                population={31600}
                accessmod='public'
                rate={14}
            />
            <Contact 
                img="./collegez/ucb.png"
                name="UC Berkeley"
                desc=""
                state='CA'
                population={30980}
                accessmod='public'
                rate={27}
            />
        </div>
        <footer>Made by Purva Marfatia</footer>
        
      </div>
    )
}

export default App