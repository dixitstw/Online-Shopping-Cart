import React, { useEffect, useState } from 'react'
import DataDisplay from './DataDisplay'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = () => {
    let[posts, setPosts] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(error=>console.log(error))

        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        // .then(response=> setPosts(response.data))
        // .catch(error=> console.log(error))

    }, [])

    const data=[{
        name: "Samsung Galaxy A13",
        price: "Rs.24499",
        image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
    },
    {
        name: "vivo Y01",
        price: "Rs. 13999",
        image: "https://static-01.daraz.com.np/p/cf4ebb2b7596c2c10307771719545318.jpg" 
    },

    {
        name: "vivo v21",
        price: "Rs. 37,499",
        image: "https://static-01.daraz.com.np/p/1089068d3b48a129b5219371ed1a7b1b.jpg" 
    },

    {
        name: "iphone 14 pro max",
        price: "Rs. 207, 990",
        image: "https://static-01.daraz.com.np/p/224011c7b752a41da4c0c7455e7f5c25.jpg" 
    },

    {
        name: "iphone 13 pro max",
        price: "Rs. 191, 000",
        image: "https://static-01.daraz.com.np/p/205405e5da82e68323c96892e15f880d.jpg" 
    },

    {
        name: "OnePlus N20",
        price: "23, 499",
        image: "https://static-01.daraz.com.np/p/66e3c2fbd937a0b7be9a5d727ec8685c.jpg" 
    },

    {
        name: "vivo v21",
        price: "Rs. 37,499",
        image: "https://static-01.daraz.com.np/p/1089068d3b48a129b5219371ed1a7b1b.jpg" 
    },

    {
        name: "Redmi A1",
        price: "Rs. 11,999",
        image: "https://static-01.daraz.com.np/p/ee824cd8de19340991405fe9656b91ae.jpg" 
    },

    {
        name: "Redmi 10A",
        price: "Rs. 15, 999",
        image: "https://static-01.daraz.com.np/p/26da0ac0fb5aad22b4ddf87a01dd6d45.jpg" 
    },

    {
        name: "Redmi Note 11 pro",
        price: "Rs. 36,999",
        image: "https://static-01.daraz.com.np/p/3ec693fbc57a1c9b45270b5f7ac851d7.jpg" 
    },

    {
        name: "OnePlus 8T",
        price: "Rs. 80,000",
        image: "https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png" 
    },

    {
        name: "OnePLus 10T",
        price: "Rs.114, 599",
        image: "https://static-01.daraz.com.np/p/7cccec95cc63d39bcaa3310e17153181.png" 
    },

    {
        name: "OnePlus Noed CE2",
        price: "Rs. 40, 999",
        image: "https://static-01.daraz.com.np/p/98191a9cfc62dba219c9eb730d7159d7.jpg" 
    },

    
]
  return (
    <>
    {/* <DataDisplay name="kishor" address="kathmandu"/>
    <DataDisplay name="Prabin rai" address="Hattiban"/>
    <DataDisplay name="reeyaz" address="ktm"/>

<div style ={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
    {
        
        data.map(product=> {
            return <Card item={product}/>
        })
    }
</div> */}

    {
        posts.map(post=>{
            return <>
            <h1>{post.id}: 
            <Link to={`/${post.id}`}>
            {post.title}
            </Link>
            </h1>
            {/* <p>
                {post.body}
            <br/>
            </p> */}
            </>
        })
    }
    </>
  )
}

export default Main