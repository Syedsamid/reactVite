// import React from 'react'

// function App() {
// //js code using html
//   let name = "syed samid";
//   let age = 25;

//   const changeName = () =>{
//     name = "sam"
//   }

//   return (
//     //html code
//     <>
//     <div>
//     <h1>Hello {name}</h1>
//     <h2>My Age is {age}</h2>
//     <button>Change Name</button>

//     </div>
    
//     </>
//   )
// }

// export default App



// Using React
// import React, { useState } from 'react'

// function App() {

//   const [age, setAge] = useState(20)
//   // age is read only variable
//   // setAge is a write only variable
//   // and useState has default value of age which is read only variable

//   const changeAge = () =>{
//     // setAge(50)
//     setAge(age + 1)
//   }

//   const decreaseAge = ()=>{
//     setAge(age - 1)
//   }

//   return (
//     <div>
//       <h1>Age is {age}</h1>
//       <button onClick={changeAge}>Change Age</button>
//       <button onClick={decreaseAge}>decrease Age</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// export default FavoriteColor





//
// import React, { useState } from 'react'

// function App() {
//   const [text,setText] = useState("");

//   return (
//    <div>
//     <h2>Type Something</h2>
//     <input 
//     type='text'
//     value={text}
//     onChange={(x) => setText(x.target.value)}
//     placeholder='"Type Here...'
//     />
//     <p>You typed: {text}</p>

//    </div>
//   )
// }

// export default App


// 
// import React, { useState } from 'react'

// function App() {
//   const [isVisible,setIsVisible] = useState(true);

//   return (
//    <div>
//     <h2>Show and Hide Example</h2>
//     <button onClick={() => setIsVisible(!isVisible)}>
//       {isVisible ? "Hide" : "Show"} Text
//     </button>
//     {isVisible && <p>this text can be hidded or showed to you</p>}

//    </div>
//   )
// }

// export default App




//!  Hooks  useState
import React, { useState } from 'react'

function App() {
  const [isOn, setIsOn] = useState(false)

  const [text,setText] = useState("");

  const [isVisible,setIsVisible] = useState(true);

  return (
    <>
    <div>
      <h1>Toggle Button</h1>
      <button onClick={()=> setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}
      </button>
    </div>

    {/* input words */}
    <br/> 

    <div>
  <h2>Type Something</h2>
    <input 
    type='text'
    value={text}
    onChange={(x) => setText(x.target.value)}
    placeholder='"Type Here...'
    />
    <p>You typed: {text}</p>
    </div>

    <br/>
    {/* Hide paragraf */}

        <div>
      <h2>Show and Hide Example</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>this text can be hidded or showed to you</p>}

    </div>
    </>
  )
}

export default App
