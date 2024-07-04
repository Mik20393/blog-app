import styles from './two-column-layout.module.css'

export default function TwoColumnLayout() {
    return (
        <>
        <div className={styles.column}>
            <h1>Column 1</h1>
        </div>
        <div className={styles.column}>
            <h1>Column 2</h1>
        </div>
        </>
    )
}