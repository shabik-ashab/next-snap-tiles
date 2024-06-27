import axios from 'axios'
import React from 'react'
import { unstable_cache } from 'next/cache';
import ImageSlide from './ImageSlide';


const slideImages = (images:ImageData[]):Slide[] => {
  const newImages:Slide[] = images.reduce((acc:Slide[], curr) => {
    acc.push({
      src: curr.largeImageURL,
      width: 3840,
      height: 5070
    })
    return acc
  }, [])
  return newImages
}

const getCachedSlide = unstable_cache(async (images) => slideImages(images),['slide-image'])

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
  const images:ImageData[] = data.hits
  const cachedSlide:Slide[] = await getCachedSlide(images)
  return (
    <div>
      <ImageSlide images={images} slideImages={cachedSlide} />
    </div>
  )
}

export default GetImage

export type ImageData = {
  id:number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type: string;
  likes: number;
  views: number;
}

export type Slide = {
  src: string;
  width: number;
  height: number;
}