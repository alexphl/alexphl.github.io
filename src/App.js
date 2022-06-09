import { ButtonFlat } from './components/Button'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5> 
          <p> Glad you found me. This is my portfolio and a React pet project. I'm likely working on it as you're reading this.</p>
          <p> Big things are planned, you can check out <a href="https://github.com/alexphl/alexphl.github.io">the source code</a> in the meantime. </p>
        </h5> 
        
      </header>
        
      {/*<main>
        <a href='https://www.github.com/alexphl'>
          <ButtonFlat text='Back to my Git'/>
        </a>
      </main>*/}

      <div id="projects">
        <h2>My other projects</h2>
        <p>  </p>
      </div>

      <div class="bgElement"></div>
      
      <footer>
        <div id='footerLinks'>
          <a href="https://www.linkedin.com/in/alex-prokhvatylo-ba0471236/"><AiFillLinkedin/></a>
          <a href="https://github.com/alexphl/"><AiFillGithub /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
