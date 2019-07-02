import React from 'react'

import { useStaticQuery, graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { List, Avatar, Divider } from 'antd'

import photoProfil from "../images/profil-2.jpg"

const bio = () => (
    <StaticQuery
        query={
            graphql`
            query {
                site {
                    siteMetadata {
                        author
                        bio
                    }
                }
            }`
        }
        render={data => (
            <>
            <Divider orientation="left" >Auteur</Divider>
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={photoProfil} />}
                    title={<a href="https://ant.design">{data.site.siteMetadata.author}</a>}
                    description={data.site.siteMetadata.bio}
                    />
                </List.Item>
            </>
        )}
    />
        
);
 
export default bio;