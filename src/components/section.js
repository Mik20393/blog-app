import styles from './section.module.css'

export default function Section(title, content) {
    return (
        <>
            <section className={styles.baseSection}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </section>
        </>
    )
}