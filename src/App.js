import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormikForm from './components/FormikForm';

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
   <div className='form-wrapper'>
    <div className='tab-wrapper'>
      <div 
        className={currentTab === 1 ? 'activeTab' : 'tab'}
        onClick={() => setCurrentTab(1)}
      >
        useFormik
      </div>
      <div 
        className={currentTab === 2 ? 'activeTab' : 'tab'}
        onClick={() => setCurrentTab(2)}
      >
        Formik
      </div>
    </div>
    {currentTab === 1 ? <Form/> : <FormikForm/>}
   </div>
  );
}

export default App;
