import './App.css'
import Counter from './counter'
import GetValue from './Duplicate'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick() {
    alert('Hello !')
  }
  function handleClick2() {
    alert('button 2 clicked')
  }


  return (
    <>
      <h1>Exploring React</h1>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <GetValue task='Learn React' isDone={ false}></GetValue>
      <GetValue task='core concepts' isDone={ true}></GetValue>
      <GetValue task='Learn React JSX' isDone={ false}></GetValue>
      <GetValue task='Learn import file' isDone={ true}></GetValue>
      <Device name='laptop' price='65000'></Device>
      <Device name='Mobile' price='18000'></Device>
      <Device name='Watch' price='2500'></Device>
      <Student grade='7' score='43'></Student>
      <Student grade='5' score='34'></Student>
      <Student grade='8' score='75'></Student>
      <Student ></Student>
      <Person></Person>
    </>
  )
}


function Device(props) {
  const deviceStyle = {
    border: '2px solid tomato',
    borderRadius:'20px',
    marginTop: '20px',
    padding:'10px'
  }
  return (
    <div style={deviceStyle}>
      <h3>This device is {props.name} and the price is { props.price} .TK</h3>
    </div>
  )
}

function Student({ grade=0 , score=0}) {
  return (
    <div className='student'>
      <h3>This is student</h3>
      <p>class : { grade}</p>
      <p>score : { score}</p>
      
    </div>
  )
}

function Person() {
  const money = 20;
  const man = { name: 'David', age: 25 };
  const devStyle = {
    border: '2px solid tomato',
    borderRadius: '20px',
    marginTop: '20px',
    padding: '20px'
  }
  return (
    <div style={devStyle}>
      <h4>I am {man.name} . I am {man.age} years old . I have BDT : {money}</h4>
      <p></p>
    </div>
  )
}

export default App
