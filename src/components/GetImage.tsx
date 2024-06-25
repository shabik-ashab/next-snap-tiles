import axios from 'axios'
import React from 'react'

const getImage = async () => {
  try {
    const res = await axios.get(`https://pixabay.com/api/?key=${process.env.API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

const GetImage = async () => {
  const data = await getImage()
  const images = data.hits
  return (
    <div>GetImage</div>
  )
}

export default GetImage