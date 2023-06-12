import React , {useState} from 'react'


export default function Textform(props) {
    const handelupclick = () =>
    {
        // console.log("uppercase was clicked ");
        let nexttext = text.toUpperCase();
        setText(nexttext);
        props.showalert("Uppercase is clicked","success");
    }
    const handelowclick = () =>
    {
        // console.log("uppercase was clicked ");
        let nexttext = text.toLowerCase();
        setText(nexttext);
        props.showalert("Lowercase is clicked","success");
    }
    const handelonchange = (event)=>
    {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");

        return (
        <>
        <div className='contrainer' style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark'?'#72A0C1':'white' , color : props.mode === 'dark'?'#00008B':'black'}} onChange={handelonchange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handelupclick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handelowclick}>Convert to lowercase</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } time to read</p>
        </div>
        </>
  )
}
