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


import React, { useState } from 'react'

function App() {

  const [age, setAge] = useState(20)
  // age is read only variable
  // setAge is a write only variable
  // and useState has default value of age which is read only variable

  const changeAge = () =>{
    // setAge(50)
    setAge(age + 1)
  }

  const decreaseAge = ()=>{
    setAge(age - 1)
  }


  return (
    <div>
      <h1>Age is {age}</h1>
      <button onClick={changeAge}>Change Age</button>
      <button onClick={decreaseAge}>decrease Age</button>

      

    </div>
  )
}

export default App


