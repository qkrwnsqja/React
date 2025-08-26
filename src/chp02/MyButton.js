//import React from "react";
//import ReactDOM from "react-dom/client";

 function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement("button", {onClick:() => setIsClicked(true)},  isClicked ? 'Clicked' : 'Click Here!')
}

const domContainer = document.querySelector('#root');
 const root = ReactDOM.createRoot(domContainer);
 root.render(React.createElement(MyButton));