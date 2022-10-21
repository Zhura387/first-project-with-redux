import {Provider} from 'react-redux'
import Likes from './likes/Likes';
import store from './redux/Store';
import Task from './text/text';
import './App.css';

function App() {
  return (
    <div className="wrapp">
<div className="content">
  <div className='blokLeft'>
<div>
  <img src='./1.png' alt='fjfug'></img>
</div>
<div className='likeBtn'>
  <Provider store={store}>
  <Likes/>
  </Provider>
  </div>
<div>

</div>



  </div>
<div className='blokRite'>
<Provider store={store}>
  <Task/>
  </Provider>

</div>


</div>
    </div>
  );
}

export default App;
