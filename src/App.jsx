import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [greetingOne, setGreetingOne] = useState(false)
  const [greetingTwo, setGreetingTwo] = useState(false)
  const [content, setContent] = useState(false)


  function Content (){

    return (
      <>
        <p>Content</p>
      </>
    )
  }


  return (
    <>
      {useEffect(() => {
        setTimeout(() => setGreetingOne(true) , 1000);
        setTimeout(() => setGreetingTwo(true) , 3000);
        setTimeout(() => {
          setContent(true)
          setGreetingOne(false)
          setGreetingTwo(false) 
        }, 7000);
      }, [])}
      {greetingOne === false ? null : <p>Hello...</p>}
      {greetingTwo === false ? null: <p>Welcome to Me!</p>}
      {content === false ? null : <Content />}
    </>
  )

}

export default App
