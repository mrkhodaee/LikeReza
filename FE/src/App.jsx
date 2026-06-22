import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import SplitText from "./components/SplitText";
import TextType from "./components/TextType";
import Header from './components/Header';

function App() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    </>
  )
}

export default App
