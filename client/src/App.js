import './App.css';
import { Input } from './components/input';
import { BlogCard } from './components/blogCard';
import { Intro } from './components/intro';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { useEffect, useState } from 'react';
function App() {

  const [todo, setTodo] = useState([]);
  const [isRender , setRender] =useState(false);
  const [isViewing , setViewing] =useState(false);
  const [isCreate , setCreate] =useState(false);
  
  useEffect(() => {
    const getBlogUrl = 'http://localhost:5000/';
    fetch(getBlogUrl, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setTodo(data.blogs))
      .catch((error) => console.error('Error:', error));

  }, [isRender])

  return (

    <div className="App">
      <Header />
      <Intro setViewing ={setViewing} setCreate ={setCreate} />
      {isCreate && <Input  setRender={setRender} setViewing={setViewing} setCreate ={setCreate}/>}
     {isViewing &&  todo.map((eachBlog) => 
    
    <BlogCard  key ={eachBlog._id} title={eachBlog.title} content={eachBlog.content} />
 )}

      <Footer />
    </div>
  );
}

export default App;
