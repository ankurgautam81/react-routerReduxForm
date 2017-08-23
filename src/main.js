/* for this project install addtional package
npm install react react-dom --save
npm install redux react-redux --save
npm install redux-thunk --save
npm install react-redux-form --save
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class Main extends React.Component {	
   render() {   
      return (
      	 <Provider store={createStoreWithMiddleware(reducers)}>
		    <App />
		  </Provider>
        
      );
   }
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('app'));