import styles from "./General.module.css"

function handleClick(e) {
    
}

export default function General() {
  return <div className={styles.container}>
    <div className={styles.header_container}>
    <h1>General info</h1>
    <div className="editButton" onClick={handleClick}>Edit</div>
    </div>

    <label htmlFor="name"> Name
    <div className="name" id="name">Eeeee</div>
    </label>
    <label htmlFor="email">E-mail
    <div className="email" id="email">email@email.com</div>
    </label>
    <label htmlFor="phone">Phone
    <div className="phone" id="phone">+0000000000</div>
    </label>
  </div>;
}


