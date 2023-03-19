
import asciivid from '../assets/video/ascii.mp4'
import vectorvid from '../assets/video/vector.mp4'
import planetvid from '../assets/video/planet.mp4'
import '../App.css';
//<video src={planetvid}  controls loop muted  autoPlay  className='vid1'></video>
function Project() {
  return (
   <div>
        <div className='pr1'>
          <h2>ASCII-CAMERA</h2>
          <p>using the P5.js Framework i manage to extract the camera pixels into grayscale image and assigning those grayscale to an ascii character and i make it green so i looked like lester from gta 5 hacking scene </p>
          <video src={asciivid}  controls loop muted  autoPlay  className='vid1'></video>
        </div>
        <div className='pr2'>
          <h2>Vector-calculator</h2>
          <p>a simple vector claculator made with python *i made this when i was 14 LOL</p>
          <video src={vectorvid}  controls loop muted  autoPlay  className='vid1'></video>
        </div>
        <div className='pr3'>
          <h2>Gravity-Simulation</h2>
          <p>using P5.js im implementing the  real gravitational equation into cool simulation of our solar system in Javascript</p>
          <video src={planetvid}  controls loop muted  autoPlay  className='vid1'></video>
        </div>
   </div>
  );
}
//<iframe  className='vid1'width="560" height="315" src="https://www.youtube.com/embed/ZhMw53Ud2tY"></iframe>
export default Project;