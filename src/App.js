import React from 'react';
import 'bootswatch/dist/morph/bootstrap.css';
import './custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';
import Rotas from './rotas.js';


class App extends React.Component {
  render() {
    return (

       <div className='container'>
        <Rotas />
      </div>
    );
  }
}

export default App;
