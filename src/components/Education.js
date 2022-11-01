import styles from './education.module.css';
import { useState, Fragment } from 'react';
import { format } from 'date-fns';

export default function Education({ data, onChange, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  function generateContent(schoolData) {
    let content = (
      <div className={styles.infoContainer}>
        <label htmlFor="school">
          School
          <div className="school" id="school">
            {schoolData.school}
          </div>
        </label>
        <label htmlFor="title">
          Title of studies
          <div className="title" id="title">
            {schoolData.title}
          </div>
        </label>
        <label htmlFor="date">
          Date
          <div className="date" id="date">
            {format(new Date(schoolData.date.from), 'LLL y')} -{' '}
            {format(new Date(schoolData.date.to), 'LLL y')}
          </div>
        </label>
      </div>
    );

    if (isEditing) {
      content = (
        <div className={styles.infoContainer}>
          <label htmlFor="school">
            School
            <input
              className="school"
              id="school"
              value={schoolData.school}
              onChange={(e) => {
                onChange('education', {
                  ...schoolData,
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
              value={schoolData.title}
              onChange={(e) => {
                onChange('education', {
                  ...schoolData,
                  title: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="date">
            Date
            <label htmlFor="date">
              From
              <input
                type="month"
                className="date"
                id="date"
                value={schoolData.date.from}
                onChange={(e) => {
                  onChange('education', {
                    ...schoolData,
                    date: {
                      ...schoolData.date,
                      from: e.target.value,
                    },
                  });
                }}
              />
            </label>
            <label htmlFor="date">
              To
              <input
                type="month"
                className="date"
                id="date"
                value={schoolData.date.to}
                onChange={(e) => {
                  onChange('education', {
                    ...schoolData,
                    date: {
                      ...schoolData.date,
                      to: e.target.value,
                    },
                  });
                }}
              />
            </label>
          </label>
          <hr />
        </div>
      );
    }

    return content;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1>Education</h1>
        <div className={styles.editButton} onClick={handleClick}>
          {isEditing ? 'Close editing' : 'Edit'}
        </div>
      </div>
      {data.map((job, index) => (
        <Fragment key={index}> {generateContent(job)}</Fragment>
      ))}
      <div className={styles.addInfo} onClick={onClick}>
        Add school
      </div>
    </div>
  );
}
