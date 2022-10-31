import { format } from 'date-fns/esm';
import { useState } from 'react';
import styles from './experience.module.css';

export default function Experience({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick(e) {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  let content = (
    <>
      <label htmlFor="company">
        Company name
        <input
          className="company"
          id="company"
          value={data.company}
          onChange={(e) => {
            onChange('experience', {
              ...data,
              company: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="position">
Position        <input
          className="position"
          id="position"
          value={data.position}
          onChange={(e) => {
            onChange('experience', {
              ...data,
              position: e.target.value,
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
            onChange('experience', {
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
            onChange('experience', {
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
        {' '}
        <label htmlFor="company">
          Company name
          <div className="company" id="company">
            {data.company}
          </div>
        </label>
        <label htmlFor="position">
          Position
          <div className="position" id="position">
            {data.position}
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
        <h1>Experience</h1>
        <div className="editButton" onClick={handleClick}>
        {(isEditing) ? 'Close editing' : 'Edit'}
        </div>
      </div>
      {content}
    </div>
  );
}
