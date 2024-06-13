import React,{useState} from 'react'
// import PropTypes from 'prop-types'




export default function TextForm(props) {
const handleupclick = ()=> {
console.log("uppercase was clicked " + text );
let newText =  text.toUpperCase();
settext(newText)
props.showAlert("upper click","success");
}
const handleloclick = ()=> {
    console.log("lowercase was clicked " +  text );
    let newText =  text.toLowerCase();
    settext(newText)
    props.showAlert("Lowercase clicked","success");
    }
    const handleclearclick = ()=> {
        let newText = "";
        settext(newText)
        props.showAlert("text cleared","warning");
        }
const handleonchange = (event)=> {
console.log("onchange handled");
settext(event.target.value);

}
const [text, settext] = useState("Type here");
return (<>
<div className = "container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
<h3 >{props.heading}</h3>
<div className="mb-3">
<textarea className="form-control" value ={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#2a3962' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
 id="Mybox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloclick}>Lower case</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>

</div>
<div className="container my-3" style={{color: props.mode ==='dark'?'white' : "black"}}>
<h3>words summary</h3>
<p>{text.split(" ").length}words {text.length} characters</p>
<h3 >Time Management</h3>
<p>{0.008 * 60 * text.split(" ").length} seconds and {0.008 * text.split(" ").length} minutes it takes to read this</p>
<h3 >Preview</h3>
<p className='border:1px solid black'>{text}</p>
</div>
</>
)
}




