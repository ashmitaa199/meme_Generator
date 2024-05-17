import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme meme image 🖼
                </button>
            </div>
            <div className="img-container">
            <img src={memeImage} className="meme--image" />
            </div>
           
        </main>
    )
}


// let url
// export default function Meme(){
//     function getMemeImage() {
//         const memesArray = memedata.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//          url = memesArray[randomNumber].url
//     }

//     return(
//         <main>
//             <p>{url}</p>
    
//         <div className="form">
//                     {/* <label className="form--label" htmlFor="top-text">Top Text</label> */}
//                         <input
//                             id="top-text"
//                             type="text"
//                             placeholder="Shut up"
//                             className="form--input"
//                         />
//                     {/* <label className="form--label">Bottom Text </label> */}
//                     <input
//                             type="text"
//                             placeholder="and take my money"
//                             className="form--input"
//                         />
                
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//                 </div>
//     </main>

//     )
// }