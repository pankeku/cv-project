import styles from "./Experience.module.css"

function handleClick(e) {
    
}

export default function Experience() {
  return <div className={styles.container}>
       <div className={styles.header_container}>
    <h1>Experience</h1>
    <div className="editButton" onClick={handleClick}>Edit</div>
    </div>

    <label htmlFor="company"> Company name
    <div className="company" id="company">BBBB</div>
    </label>
    <label htmlFor="position">Position
    <div className="position" id="position">Eeeerker</div>
    </label>
    <label htmlFor="date">Date
    <div className="date" id="date">2000</div>
    </label>
  </div>;
}


