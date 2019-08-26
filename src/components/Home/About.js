import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
import { Link } from 'gatsby';

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Hi there, dive deep and continue exploring more and more.</p>
                    <p>Hi there, dive deep and continue exploring more and more.</p>
                    <button type="button" className="btn-primary">read more</button>
                </article>
            </div>
        </section>
    )
}

export default About
