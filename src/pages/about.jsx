import React from 'react'
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { Link } from "gatsby"

const about = () => (
        <Layout page='4'>
            <SEO title="About"/>
            <Bio/>
            <Link to="/">Retour à la page d'accueil</Link>
        </Layout>
)
 
export default about;