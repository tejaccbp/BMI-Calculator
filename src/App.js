import React, {useState} from 'react'

import './index.css'

function App() {

  //state
  const [weight, setWeight]=useState(0)
  const [height, setHeight]=useState(0)
  const [bmi, setBmi]=useState('')
  const [message, setMessage]=useState('')

  let imgSrc=''

  if(bmi<1){
    imgSrc=null
  }else{ 
    if(bmi<25){
    imgSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbc%2Fe9%2F23%2Fbce923d235d38ccd7550681fe5f3b61b.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F446560119272865683%2F&tbnid=6iw3KmKJPoiABM&vet=12ahUKEwjgmdO-j8b2AhXZjtgFHa9nCA8QMygCegUIARC4AQ..i&docid=8WkfWhRmv5dEwM&w=591&h=945&q=overweight%20heros&hl=en&ved=2ahUKEwjgmdO-j8b2AhXZjtgFHa9nCA8QMygCegUIARC4AQ"
  }else if(bmi>25 && bmi<30){
    imgSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fsuper-hero-vector-illustration-on-260nw-226184161.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fheros&tbnid=IGl8x5JdeCu32M&vet=10CKcBEDMosgFqFwoTCIC7oYyQxvYCFQAAAAAdAAAAABAC..i&docid=cdsd-Wy7YjdjrM&w=260&h=280&q=%20heros&hl=en&ved=0CKcBEDMosgFqFwoTCIC7oYyQxvYCFQAAAAAdAAAAABAC"
  }else{
    imgSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F5f%2Fd9%2Fdc%2F5fd9dcbe8008428f85eb2cf42a5b91be.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F798896421377191371%2F&tbnid=rZDRMDGa07mfgM&vet=12ahUKEwjfsMyNkcb2AhXmQGwGHY2uBNEQMygAegUIARCiAQ..i&docid=tA-F1PXOyIcNkM&w=736&h=1004&q=underweight%20heroes&hl=en&ved=2ahUKEwjfsMyNkcb2AhXmQGwGHY2uBNEQMygAegUIARCiAQ"
  }
}

  let calcBmi=(event)=>{
    event.preventDefault()

    if (weight===0 || height===0){
      alert("Please Enter a Valid Weight and Height")
    }else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      //Message To User
      if(bmi<25){
        setMessage('You are underweight')
      }else if(bmi>=25 && bmi<30 ){
        setMessage("You area healthy weight")
      }else{
        setMessage("you are overweight")
      }
    }
  }


  let reload=()=>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event)=>setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>


        <div className='center'>
          <h1>Your BMI is: {bmi}</h1>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=""></img>
        </div>
      
      </div>
    </div>
  );
}

export default App;
