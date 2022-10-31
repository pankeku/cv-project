import { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

const initialData = {
  general: { name: 'John', email: 'john@john.john', phone: '+334455667788' },
  education: {
    school: 'Schollee',
    title: 'Errrwr',
    date: { from: '2000-06', to: '3000-07' },
  },
  experience: {
    company: 'BBBB',
    position: 'Worker',
    description: 'Woop',
    date: { from: '1000-01', to: '2020-02' },
  },
};

function App() {
const [data, setData] = useState(initialData);


function handleDataChange(section, dataSection) {
  console.log(dataSection)
setData({
  ...data,
  [section]:dataSection
})
}

  return (
    <div className="App">
      <h2>CV MAKER</h2>
      <General data={data.general} onChange={handleDataChange}/>
      <Education data={data.education} onChange={handleDataChange}/>
      <Experience data={data.experience} onChange={handleDataChange}/>
    </div>
  );
}

export default App;
