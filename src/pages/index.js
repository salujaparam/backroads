import React from "react"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {Link} from 'gatsby'

export default () => (
        <Layout>
            Hello from backroads
            <SimpleHero>
                <Banner title="continue exploring" info="Check out the various fun adventures we provide.">
                    <Link to="/tours" className="btn-white">explore tours</Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
)
