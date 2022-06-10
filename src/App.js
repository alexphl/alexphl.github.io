import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5> 
          <p> I'm Alex, glad you found me. This is my portfolio website and a React pet project. I'm likely working on it as you're reading this.</p>
          <p> Big things are planned, you can check out the <a href="https://github.com/alexphl/alexphl.github.io">source code</a> in the meantime. </p>
        </h5> 
        
      </header>
        
      {/*<main>
        <a href='https://www.github.com/alexphl'>
          <ButtonFlat text='Back to my Git'/>
        </a>
      </main>*/}

      <div id="projects">
        <h2>My other projects</h2>
        <div className='project'>
          <h5>Barter - Android App</h5>
          <p>Java, Firebase</p>
          <a href="https://github.com/alexphl/csci3130-t7-online-barter-trading"><FiGithub className='icon'/></a>
        </div>

        <div className='project'>
          <h5>Job Portal web app</h5>
          <p>JS, PHP, MySQL</p>
          <a href="https://web.cs.dal.ca/~olexiy/jobportal/"><HiOutlineExternalLink className='icon'/></a>
          <a href="https://github.com/alexphl/jobportal_IA"><FiGithub className='icon'/></a>
        </div>
        
      </div>

      <div class="bgElement"></div>
      
      <footer>
        <div id='footerLinks'>
          <a href="https://www.linkedin.com/in/alex-prokhvatylo-ba0471236/"><AiFillLinkedin className='icon'/></a>
          <a href="https://github.com/alexphl/"><AiFillGithub className='icon'/></a>
        </div>
      </footer>
    </>
  );
}

export default App;
