

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
    
//     /**
//      * Challenge:
//      * Get an array of memes from the imgflip API as soon as
//      * this component renders for the first time.
//      * Check the imgflip documentation for the correct URL.
//      * Save the array of memes (not the whole response
//      * data) to state. (For this app, we'll randomly choose
//      * one of the memes from this array when the user clicks
//      * the "Get a new meme image" button, but we'll do that in
//      * a separate challenge.)
//      */
    
    
//     // function handleChange(event) {
//     //     const {value, name} = event.currentTarget
//     //     setMeme(prevMeme => ({
//     //         ...prevMeme,
//     //         [name]: value
//     //     }))
//     // }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
// import { useState } from "react"
// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
//     function handleChange(event){
//         const {value,name}=event.currentTarget
//         setMeme(prevMeme =>({
//             ...prevMeme,
//             [name] :value
//         }))
//     }
//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }

// import { useState } from "react"

// export default function Main() {
//     const [meme, setMeme] = useState({
//         topText: "One does not simply",
//         bottomText: "Walk into Mordor",
//         imageUrl: "http://i.imgflip.com/1bij.jpg"
//     })
    
//     /**
//      * Challenge:
//      * Get an array of memes from the imgflip API as soon as
//      * this component renders for the first time.
//      * Check the imgflip documentation for the correct URL.
//      * Save the array of memes (not the whole response
//      * data) to state. (For this app, we'll randomly choose
//      * one of the memes from this array when the user clicks
//      * the "Get a new meme image" button, but we'll do that in
//      * a separate challenge.)
//      */
    
    
    
//     function handleChange(event) {
//         const {value, name} = event.currentTarget
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             [name]: value
//         }))
//     }

//     return (
//         <main>
//             <div className="form">
//                 <label>Top Text
//                     <input
//                         type="text"
//                         placeholder="One does not simply"
//                         name="topText"
//                         onChange={handleChange}
//                         value={meme.topText}
//                     />
//                 </label>

//                 <label>Bottom Text
//                     <input
//                         type="text"
//                         placeholder="Walk into Mordor"
//                         name="bottomText"
//                         onChange={handleChange}
//                         value={meme.bottomText}
//                     />
//                 </label>
//                 <button>Get a new meme image 🖼</button>
//             </div>
//             <div className="meme">
//                 <img src={meme.imageUrl} />
//                 <span className="top">{meme.topText}</span>
//                 <span className="bottom">{meme.bottomText}</span>
//             </div>
//         </main>
//     )
// }
import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    // Fetch memes once when component mounts
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
            })
    }, [])

    function handleChange(event) {
        const { name, value } = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getRandomMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[randomIndex]

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme.url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>

                <button
                    onClick={getRandomMemeImage}
                    disabled={allMemes.length === 0}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
