import {Provider} from 'react-redux'
import Likes from './likes/Likes';
import store from './redux/Store';
import './App.css';

function App() {
  return (
    <div className="App">
<div>
  <div>
<div>
  <img></img>
</div>
<div>
  <Provider store={store}>
  <Likes/>
  </Provider>
  </div>
<div>

</div>



  </div>
<div>


</div>


</div>
    </div>
  );
}

export default App;
