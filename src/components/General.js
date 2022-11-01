import { useState } from 'react';
import styles from './general.module.css';

export default function General({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  let content = (
    <div className={styles.infoContainer}>
      <label htmlFor="name">
        Name
        <div className="name" id="name">
          {data.name}
        </div>
      </label>
      <label htmlFor="email">
        E-mail
        <div className="email" id="email">
          {data.email}
        </div>
      </label>
      <label htmlFor="phone">
        Phone
        <div className="phone" id="phone">
          {data.phone}
        </div>
      </label>
    </div>
  );

  if (isEditing) {
    content = (
      <div className={styles.infoContainer}>
        <label htmlFor="name">
          Name
          <input
            className="name"
            id="name"
            value={data.name}
            onChange={(e) => {
              onChange('general', {
                ...data,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            className="email"
            id="email"
            value={data.email}
            onChange={(e) => {
              onChange('general', {
                ...data,
                email: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            className="phone"
            id="phone"
            value={data.phone}
            onChange={(e) => {
              onChange('general', {
                ...data,
                phone: e.target.value,
              });
            }}
          />
        </label>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1>General info</h1>
        <div className={styles.editButton} onClick={handleClick}>
          {isEditing ? 'Close editing' : 'Edit'}
        </div>
      </div>
      {content}
    </div>
  );
}
