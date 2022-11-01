import { useState } from 'react';
import styles from './app.module.css';
import { Education, Experience, General } from './components/';

const initialData = {
  general: { name: 'John', email: 'john@john.john', phone: '+334455667788' },
  education: [
    {
      school: 'Very Nice school',
      title: 'Pupil',
      date: { from: '2000-06', to: '2003-07' },
    },
    {
      school: 'University',
      title: 'Student',
      date: { from: '2004-06', to: '2009-07' },
    },
  ],
  experience: [
    {
      company: 'BBBB',
      position: 'Worker',
      description: 'nice',
      date: { from: '2010-01', to: '2015-02' },
    },
  ],
};

function App() {
  const [data, setData] = useState(initialData);

  function handleDataChange(section, dataSection) {
    setData({
      ...data,
      [section]: dataSection,
    });
  }

  function handleAddJob() {
    setData({
      ...data,
      experience: [
        ...data.experience,
        {
          company: '',
          position: '',
          description: '',
          date: { from: '2022-01', to: '2022-01' },
        },
      ],
    });
  }

  function handleAddSchool() {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          school: '',
          title: '',
          date: { from: '2022-01', to: '2022-01' },
        },
      ],
    });
  }

  return (
    <div className={styles.app}>
      <h2>CV MAKER</h2>
      <div className={styles.sections}>
        <General data={data.general} onChange={handleDataChange} />
        <Education data={data.education} onClick={handleAddSchool} />
        <Experience data={data.experience} onClick={handleAddJob} />
      </div>
    </div>
  );
}

export default App;
