import Image from 'next/image';
import styles from './hero-img.module.css';

export default function HeroImage({src, alt}) {
    return (
        <>
            <div>
                <Image
                className={styles.heroImg} 
                src={src} 
                alt={alt}
                fill={true}
                />
            </div>
        </>
    )
}