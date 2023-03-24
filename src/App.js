import logo from './logo.svg';
import './App.css';
import Mobile from './components/mobile/Mobile';
import { useEffect, useState } from 'react';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <article className='blog'>
        <p>
        JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখ
        </p>
        <h2>Article Header</h2>
        <p style={{color:"grey", fontWeight:'bold', padding:'20px'}}>article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো। </p>
      </article>
      <Blog name="Zumman" author="MD A F Zumman"></Blog>
      <Blog name="CR7" author="Cristiano Ronaldo"></Blog>
      <Blog name="SRK" author="Shah Rukh Khan"></Blog>
      <Mobile></Mobile>
      <LoadTodos></LoadTodos>
    </div>
  );
}

function LoadTodos() {
  const [todos, setTodos] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  }, [])
  return (
    <div style={{border: '2px solid bisque', margin:'20px', padding:'20px'}}>
      <h3>Title:{todos.length}</h3>
      {
        todos.map(todo => <Todo title={todo.title} key={todo.id}></Todo> )
      }
    </div>
  )
}

const style = {
  fontSize: '30px'
};

function Todo (props) {
  return (
    <div style={{border: '2px solid maroon', margin:'20px', padding:'20px'}}>
      <h2 style={style}>Title: {props.title}</h2>
    </div>
  )
}

export default App;
