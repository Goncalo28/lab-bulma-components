import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
      <Signup />
    </div>
  )
};

export default App;
