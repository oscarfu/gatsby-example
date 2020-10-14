import React from 'react'
import Layout from "../components/layout"
import styles from '../components/blog.module.css'

const blog = () => {
     return (
          <Layout>
               <div className={styles.page}>
                    
                    <h1>this is our blog page</h1>     
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam nostrum. Eligendi fugiat voluptate quasi corrupti dicta architecto inventore harum ipsam odit beatae similique explicabo eius ea molestiae incidunt placeat voluptatem accusamus quae consequatur recusandae error quidem quos, sapiente alias. Velit maiores earum iusto numquam eligendi. Eius pariatur dignissimos tempora non nostrum voluptatem eligendi! Eveniet, expedita. Similique reiciendis sapiente quisquam, officia, perspiciatis in praesentium dolor repellat illo obcaecati laboriosam doloremque! Ipsam quos deserunt dicta unde, porro rem voluptate, voluptatem quod iure voluptas accusantium dignissimos nihil earum reprehenderit. Ipsa eum optio nemo expedita debitis. Repellendus iure, in consequuntur provident magnam velit?</p>
               </div>
          </Layout>
     )
}

export default blog
