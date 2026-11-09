function Modal({close,title,body,setTitle,setBody,send}) {
    return (
        <div className="modal">


            <button onClick={close}>X</button>
         

        


            <div>
                <h1 className="big"> </h1>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text" />
                <input value={ title} onChange={(e) => setTitle(e.target.value)} type="text" />
                 <button   onClick={send}>    jo'natish</button>
            </div>
        </div>
    )
}


export default Modal