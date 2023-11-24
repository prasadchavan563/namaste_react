// const heading=React.createElement("h1",
// {id:'col'},
// "Hello World from React!") //children
//         // {} object will give you attributes to your tags attribute means giving id or class {id:'root'}
        
// console.log(heading);  //got object over here

// const root=ReactDOM.createRoot(document.getElementById("root"))
        
// root.render(heading) //render method job is create the object and convert it to the heading tag and put it that browser understood

const parent=React.createElement("div",{id:"parent"},
        [     React.createElement("div",{id:"child1"},
             [React.createElement("h1",{},"this is h1 tag"),
             React.createElement("h2",{},"this is h2 tag")]),

             React.createElement("div",{id:"child2"},
             [React.createElement("h1",{},"this is h1 tag"),
             React.createElement("h2",{},"this is h2 tag")])
        ]
)

    console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)  //everything is render inside this root element


//its is looking tedious so JSX come into picture

// ReacteEement(object)=>HTMLAllCollection(browser)