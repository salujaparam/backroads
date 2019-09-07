import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

const About = () => {
    const {aboutImage} = useStaticQuery(query);
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape"/>
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

const query = graphql`
{
    aboutImage:file(relativePath: {eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
