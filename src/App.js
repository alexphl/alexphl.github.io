import Button from './components/Button'

function App() {
  return (
    <>
      <header>
        <h3> Hi there. </h3>
        <h5> 
          <p> Glad you found me. Making this is taking a while :( </p>
          <p class="linked"> Meanwhile, here's a <a href="https://web.cs.dal.ca/~olexiy/jobportal">web app I made</a>.</p>
        </h5> 
        
      </header>
        
      <main>
        <Button text='Back to my Git' href='https://www.github.com/alexphl'/>
      </main>

      <div class="bgElement"></div>
      
    </>
  );
}

export default App;
