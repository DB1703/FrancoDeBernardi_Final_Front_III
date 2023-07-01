import styles from '../card/card.module.css'

function Card(props) {

    return (
        <>
            <div className={styles.father}>
                <p>{props.name}, nos contactaremos con vos a la brevedad</p>
            </div>
        </>
    )
}

export default Card