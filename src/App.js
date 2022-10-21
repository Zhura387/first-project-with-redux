import { Provider } from 'react-redux'
import Likes from './likes/Likes';
import store from './redux/Store';
import Text from './text/text';
import Title from './title/title';
import './App.css';

function App() {
  return (
    <div className="wrapp">
      <div className="content">
        <div className='blokLeft'>
          <div>
            <img src='./1.png' alt='картинка'></img>
          </div>
          <p className='titleText'>Title:</p>
          <div>
            <Provider store={store}>
              <Title />
            </Provider>
          </div>
          <div className='likeBtn'>
            <Provider store={store}>
              <Likes />
            </Provider>
          </div>


        </div>
        <div className='blokRite'>
          <Provider store={store}>
            <Text />
          </Provider>

        </div>


      </div>
    </div>
  );
}

export default App;
