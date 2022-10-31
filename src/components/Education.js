import styles from "./Education.module.css"

function handleClick(e) {
    
}

export default function Education() {
  return <div className={styles.container}>
        <div className={styles.header_container}>
    <h1>Education</h1>
    <div className="editButton" onClick={handleClick}>Edit</div>
    </div>

    <label htmlFor="school"> School
    <div className="school" id="school">School</div>
    </label>
    <label htmlFor="title">Title of studies
    <div className="title" id="title">Errr</div>
    </label>
    <label htmlFor="date">Date
    <div className="date" id="date">2000</div>
    </label>
  </div>;
}


