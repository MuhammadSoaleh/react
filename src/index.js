import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apps from './card'; // Adjust the path if needed
import reportWebVitals from './reportWebVitals';
import  Button  from "./Button";
import MenuDropdown from './MenuDropdown';
const data = [
  {
    title: "Card title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "/images/images1.jpg",
    link: "/"
  },
  {
    title: "Card title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: "/images/images2.jpg",
    link: "/"
  },
  // Add more objects as needed
   
];
const sports=["cricket","footbal","rugby"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Apps data={data} />
    <Button onclick/>
    <MenuButton onclick>sports={sports} </MenuButton>
    <MenuDropdown/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
