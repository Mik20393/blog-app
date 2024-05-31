import Image from 'next/image';
import bannerImage from '@/public/pilates_tile.png';
import styles from './hero-img.module.css';

export default function HeroImage() {
    return (
        <>
            <div>
                <Image
                className={styles.heroImg} 
                src={bannerImage} 
                alt="background image" 
                fill={true}
                objectFit='cover'
                />
            </div>
        </>
    )
}