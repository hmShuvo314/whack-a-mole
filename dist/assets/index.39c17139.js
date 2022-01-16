import{j as f,r as n,s as l,G as w,R as b,a as y}from"./vendor.591ebcab.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};S();const r=f.exports.jsx,u=f.exports.jsxs,h=f.exports.Fragment,m=n.exports.createContext(),M=m.Provider,k=({children:s})=>{const[o,i]=n.exports.useState(2),[a,e]=n.exports.useState(0),[t,c]=n.exports.useState("stop");return n.exports.useEffect(()=>{if(t==="stop")return;e(0);let d=async()=>{const p=Math.floor(Math.random()*6),v=Math.floor(Math.random()*600)+400;i(p),await new Promise(x=>setTimeout(()=>x(),v)),d==null||d()};return d(),()=>d=null},[t]),r(M,{value:{currentIdx:o,setCurrentIdx:i,score:a,setScore:e,startOrStop:t,setStartOrStop:c},children:s})},L=l.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 10vmin;
`,C=l.div`
  position: relative;
  display: grid;
  justify-content: center;
  width: 25vmin;
  height: 27vmin;
  .mole {
    display: grid;
    position: relative;
    width: 22vmin;
    height: 22vmin;
    justify-content: center;
    align-content: flex-end;
  }
  .hidden {
    overflow: hidden;
  }
  img {
    object-fit: contain;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 5;
    user-select: none;
    -moz-user-select: none;
  }
  .visible {
    top: 0%;
    transition: top 0.3s;
    animation: animate 0.4s alternate infinite;
  }

  .thrownAway {
    top: 0%;
    animation: throw 0.5s linear 1;
  }

  @keyframes throw {
    0% {
      transform: translate(0%, 0%) rotateZ(0deg);
      opacity: 1;
      transform-origin: center;
    }
    25% {
      opacity: 0.67;
      transform: translate(100%, -100%) rotateZ(45deg);
      transform-origin: center;
    }
    50% {
      opacity: 0.33;
      transform: translate(200%, -200%) rotateZ(90deg);
      transform-origin: center;
    }
    100% {
      opacity: 0;
      transform: translate(300%, -300%) rotateZ(135deg);
      transform-origin: center;
    }
  }
  @keyframes animate {
    0% {
      transform: scaleY(1.2) rotateZ(10deg);
      transform-origin: bottom;
    }
    25% {
      transform: scaleY(1.2) rotateZ(-10deg);
      transform-origin: bottom;
    }
    50% {
      transform: scaleY(1.2) rotateZ(10deg);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(1.2) rotateZ(-10deg);
      transform-origin: bottom;
    }
  }
`;var j="/assets/mole.7c693bc1.png";const E=l.div`
  display: block;
  width: 15vmin;
  height: 18vmin;
  position: relative;
  top: 100%;
  display: grid;
  place-content: center;
  font-size: 15vmin;
  width: 20vmin;
  transition: top 0.3s;
  z-index: 2;
  background: url(${j}) no-repeat;
  background-size: contain;
  background-position: bottom;
  transform: scaleY(1.2);
`;var O="/assets/boom.bf1a1025.wav";const z=({idx:s,thrownAway:o,setThrownAway:i})=>{const{currentIdx:a,setScore:e}=n.exports.useContext(m),[t]=n.exports.useState(new Audio(O));return r(E,{onClick:()=>{i(!0),e(d=>d+1),setTimeout(()=>{i(!1)},500),t.currentTime=0,t.play()},className:o?"thrownAway":s===a?"visible":""})};var A="/assets/hole.656b81e6.png";const Z=({idx:s})=>{const[o,i]=n.exports.useState(!1);return u(C,{children:[r("div",{className:`mole ${o?"":"hidden"}`,children:r(z,{idx:s,thrownAway:o,setThrownAway:i})}),r("img",{src:A,alt:"hole"})]})},H=()=>{const{setStartOrStop:s}=n.exports.useContext(m),[o]=n.exports.useState([...new Array(6)]);return n.exports.useEffect(()=>{const i=setTimeout(()=>{s("stop")},2e4);return()=>clearTimeout(i)},[]),r(L,{children:o.map((i,a)=>r(Z,{idx:a},a))})},T=l.div`
  padding: 4vmin;
  display: grid;
  width: 50vw;
  height: 50vh;
  min-width: 300px;
  align-content: center;
  justify-items: center;
  gap: 5vmin;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1vmin;
  h3 {
    font-size: 6vmin;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  button {
    background-color: rgba(255, 255, 255, 0.05);
    width: 25vmin;
    height: 15vmin;
    border: none;
    outline: none;
    border-radius: 2vmin;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
    font-size: 3vmin;
    font-weight: 700;
    cursor: none;
  }
`,I=()=>{const{setStartOrStop:s,score:o}=n.exports.useContext(m);return u(T,{children:[r("h3",{children:o?`Your score: ${o}`:"Whack a Mole!"}),r("button",{onClick:()=>s("start"),children:"Smack Here!"})]})},P=l.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  font-size: 20vmin;
  color: beige;
  transform: translate(0, -45%) rotateY(180deg) rotateZ(-15deg);
  transition: transform 0.1s;
  pointer-events: none;
  z-index: 9;
`,g=()=>{const[s,o]=n.exports.useState({top:0,left:0}),[i,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{const e=({x:d,y:p})=>{o({top:p+"px",left:d+"px"})},t=()=>a(!1),c=()=>a(!0);return window.addEventListener("mousemove",e),window.addEventListener("mouseup",t),window.addEventListener("mousedown",c),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mousedown",c),window.removeEventListener("mouseup",t)}},[]),r(P,{style:s,className:i?"hitting":"",children:r(w,{})})},Y=()=>{const{score:s,startOrStop:o}=n.exports.useContext(m);return o==="stop"?u(h,{children:[r(I,{}),r(g,{})]}):u(h,{children:[r("h1",{children:s}),r(g,{}),r(H,{})]})};b.render(r(y.StrictMode,{children:r(k,{children:r(Y,{})})}),document.getElementById("root"));
