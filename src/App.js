import { ButtonFlat } from './components/Button'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5> 
          <p> Glad you found me. This is my portfolio and a React pet project. I'm likely working on it as you're reading this.</p>
          <p> Big things are planned, you can check out <a href="https://web.cs.dal.ca/~olexiy/jobportal">the source code</a> in the meantime. </p>
          <p className="linked"> Meanwhile, here's a <a href="https://web.cs.dal.ca/~olexiy/jobportal">web app I made</a>.</p>
        </h5> 
        
      </header>
        
      <main>
        <a href='https://www.github.com/alexphl'>
          <ButtonFlat text='Back to my Git'/>
        </a>
      </main>

      <div class="bgElement"></div>
      
      <footer>
        <div id='footerLinks'>
          <AiFillLinkedin /> 
          <AiFillGithub />
        </div>
      </footer>
    </>
  );
}

export default App;
