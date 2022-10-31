import image from './profile.png';
import './App.css';
import slack from './slack.png'
import social from './Social icon.png'
import i4g from './I4G.png';
import text from './Footer text.png';
import vector from './Vector.png';
import avatar from './share.png';
function App() {
  return (
    <div className="App">
      <div className="control">
      <header className="App-header">
        <img src={image} className="App-logo" id='profile_img' alt="logo" />
        <h1>Afolabi Praise</h1>
      </header>
      <div className="icon-two">
        <img src={avatar} alt='' className=''/>
      </div>
      </div>
      <div className="body">
        <body className="content">
          <div className="tweet">
            <p>Twitter Link</p>
          </div>
          <div className="zuri-team">
            <p><a className='zuri-web' href="https://training.zuri.team/"target='_blank' rel='noopener noreferrer'>Zuri Team</a></p>
          </div>
          <div className="zuri-books">
            <p><a className='zuri-web' href="https://books.zuri.team/" target='_blank' rel='noopener noreferrer'>Zuri Books</a></p>
          </div>
          <div className="python-books">
            <p><a className='zuri-web' href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" target='_blank' rel='noopener noreferrer'>Python Books</a></p>
          </div>
          <div className="bg-check">
            <p><a className='zuri-web' href="https://background.zuri.team" target='_blank' rel='noopener noreferrer'>Background check for coders</a></p>
          </div>
          <div className="design-books">
            <p><a className='zuri-web' href="https://books.zuri.team/design-rules" target='_blank' rel='noopener noreferrer'>Design Books</a></p>
          </div>
          
          <div className="icons">
            <img src={slack} alt="" className='slack-ico' />
            <img src={social} alt="" className='github' />
          </div>
        </body>

        <footer>
          <div className="pages">
            <hr className="line" />
            <img src={i4g} alt="" className='i4gzuri' />
            <img src={text} alt=""className='texts' />
            <img src={vector} alt="" className='vecteezy' />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
