import styles from './education.module.css';
import { useState } from 'react';
import { format } from 'date-fns';

export default function Education({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick(e) {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  let content = (
    <>
      <label htmlFor="school">
        School
        <input
          className="school"
          id="school"
          value={data.school}
          onChange={(e) => {
            onChange('education', {
              ...data,
              school: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="title">
        Title of studies
        <input
          className="title"
          id="title"
          value={data.title}
          onChange={(e) => {
            onChange('education', {
              ...data,
              title: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="date">
        Date
        <label htmlFor="date">From
        <input
        type="month"
          className="date"
          id="date"
          value={data.date.from}
                    onChange={(e) => {
            onChange('education', {
              ...data,
              date: {
                ...data.date,
                from:e.target.value
              }
            });
          }}
        />
        </label>
        <label htmlFor="date">To
        <input
        type="month"
          className="date"
          id="date"
          value={data.date.to}
          onChange={(e) => {
            onChange('education', {
              ...data,
              date: {
                ...data.date,
                to:e.target.value
              }
            });
          }}
        />
        </label>
        </label>
    </>
  );

  if (!isEditing) {
    content = (
      <>
        <label htmlFor="school">
          School
          <div className="school" id="school">
            {data.school}
          </div>
        </label>
        <label htmlFor="title">
          Title of studies
          <div className="title" id="title">
            {data.title}
          </div>
        </label>
        <label htmlFor="date">
          Date
          <div className="date" id="date">
          {format(new Date (data.date.from), 'LLL y')} - {format(new Date (data.date.to), 'LLL y')}
          </div>
        </label>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1>Education</h1>
        <div className="editButton" onClick={handleClick}>
          {isEditing ? 'Close editing' : 'Edit'}
        </div>
      </div>
      {content}
    </div>
  );
}
