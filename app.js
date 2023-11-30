import React from "react";
import ReactDOM from 'react-dom/client';


const heading=React.createElement("h1",{id:"root1"},"This is react Element")   //object
const root=ReactDOM.createRoot(document.getElementById('root'))

//JSX (transpiled before reaches the JS) - PARCEL -Bable

//JSX => Bable transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

const head=(
    <div>
        <h1>Hi Inside Div</h1>
        {heading}                {/* jsx   head is an react element*/}
    </div>
)

const span=<span>Inside span</span>

const HeadComponent=()=>{
    return (
        <div>
            <h1>Inside HeadComponent</h1>
            {head}
        </div>
    )
}

const HeadComponent1=()=>(
        <div>
            <h1>Inside HeadComponent1</h1>
            {head}
            <HeadComponent />
        </div>
)

const HeadComponent2=()=><div><h1>Inside HeadComponent2, {span}</h1>{head} <HeadComponent1 /></div>


const HeadComponent3=()=>(
    <div>
        <h1>Inside HeadComponent3</h1>
        {head}
        {HeadComponent2()}
    </div>
)


root.render(<HeadComponent3 />)