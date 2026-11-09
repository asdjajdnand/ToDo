import { useState } from "react"
import Modal from "./component/modal"
import logo from './assets/logo.png'


function App() {




  const [todoList, setTodoList] = useState([])

  const [show, setShow] = useState(false)
  const [hide, sethide] = useState(true)





  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  console.log(body);
  console.log(title);



  function send() {
    console.log('salom');

    setTodoList([...todoList, {title,body}])
   
    setTitle('')

    setBody('')

   
    setShow(false)
  
     
   
    
 

  }





  console.log(todoList);



  function showText() {
    setShow(!false)
  }

  function hidetext() {
    sethide(!hide)
  }



  function close() {
    setShow(false)
  }





  let i = 100



  return (
    <div>


      <nav  >
        <div className="nav">
          <img src={logo} alt="" />

          <div>


            {hide == true ?
              <div>
                <input className="input" type="text" />
                <button className="btn_search">search</button>
              </div>

              : ''
            }

          </div>

          <button onClick={hidetext}>X</button>


        </div>


      </nav>





      <div >
        {show == true ?
          <    Modal send={send} title={title} body={body} setTitle={setTitle} setBody={setBody} close={close} />
          : ''
        }

      </div>







      <div className="block">


        {todoList.map((item) => (
          <div className="box">
            <h2>{item.title}</h2>

            <p>{item.body}</p>
          </div>

        ))

        }



      </div>



    
      


      <button className="position" onClick={showText}>Pencil</button>




    </div>
  )
}



export default App