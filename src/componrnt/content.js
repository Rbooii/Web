import '../App.css';
import bg from '../assets/img/code-featured-splash-background-blur.jpg'
import pp from '../assets/img/pp1.jpg'
import pyico from '../assets/img/python.ico'
import jsico from '../assets/img/javascript.ico'
import rectico from '../assets/img/logo192.png'
import rdico from '../assets/img/Arduino-1324888695477898902.png'
import sliders from '../assets/img/slider.jpg'

import Project from './project';


var i = 3.5;
var py = 9;
var js = 8;
var react = 7.2;
var rduino = 6.5;


function jarak(child){
  var z;
  z = child * 400
  return z
}
function slider(child){
  var z = child;
  var j;
  
  j = z * 10
  return j
}

function Content() {
  return (
    <div>

    <div className='bgc'style={{backgroundImage: `url(${bg})`}}>
        <img  className='pp' src={pp}></img>
        <div className='about'>
          <h3>
            About me
          </h3>
          <div className='aligner'>
            <p className='descabt'>
            perkenalkan, saya Arco saya adalah seorang developer elektronika-front-back end saya berasal dari SMANSA Tangsel, saya suka mencoba hal baru dan tantangan baru
            </p>
          </div>
        </div>
        <div className='skillses'>
              <h2 className='h2sk'>SKILLS</h2>

              <div className='wrapperskil'>
                <div className='divicon'>
                  <img src={pyico} className='pyicon' id='slid'></img>
                  <img src={jsico} className='pyicon' id='slid'></img>
                  <img src={rectico} className='pyicon' id='slid'></img>
                  <img src={rdico} className='pyicon' id='slid'></img>
                  
                </div>
                <div className='divslider'>
                  <img src={sliders} className='slider1' style={{width:slider(py)+'%'}}></img>
                  <img src={sliders} className='slider' style={{width:slider(js)+'%'}}></img>
                  <img src={sliders} className='slider' style={{width:slider(react)+'%'}}></img>
                  <img src={sliders} className='slider' style={{width:slider(rduino)+'%'}}></img>
                </div>
              </div>
        </div>
        <div className='projecter' id='prj'>
          <h2 className='prjj'>MY PROJECT</h2>
        </div>
    </div>

    <div className='bgb' style={{height: jarak(i)}}>
        <Project/>
    </div>
    </div>
  );
}


export default Content;
