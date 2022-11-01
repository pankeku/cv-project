import { format } from 'date-fns/esm';
import { useState, Fragment } from 'react';
import styles from './experience.module.css';

export default function Experience({ data, onChange, onClick }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  function generateContent(schoolData) {
    let content = (
      <div className={styles.infoContainer}>
        {' '}
        <label htmlFor="company">
          Company name
          <div className="company" id="company">
            {schoolData.company}
          </div>
        </label>
        <label htmlFor="position">
          Position
          <div className="position" id="position">
            {schoolData.position}
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
          <label htmlFor="company">
            Company name
            <input
              className="company"
              id="company"
              value={schoolData.company}
              onChange={(e) => {
                onChange('experience', {
                  ...schoolData,
                  company: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="position">
            Position{' '}
            <input
              className="position"
              id="position"
              value={schoolData.position}
              onChange={(e) => {
                onChange('experience', {
                  ...schoolData,
                  position: e.target.value,
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
                  onChange('experience', {
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
                  onChange('experience', {
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
        </div>
      );
    }

    return content;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1>Experience</h1>
        <div className={styles.editButton} onClick={handleClick}>
          {isEditing ? 'Close editing' : 'Edit'}
        </div>
      </div>
      {data.map((job, index) => (
        <Fragment key={index}> {generateContent(job)}</Fragment>
      ))}
      <div className={styles.addInfo} onClick={onClick}>
        Add job
      </div>
    </div>
  );
}
