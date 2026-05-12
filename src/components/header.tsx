import phoneIcon from '../assets/phone.png';
import mailIcon from '../assets/mail.png';
import locationIcon from '../assets/location.png';
import { withFetchedData } from './withFetchData';
import { useEffect, useState } from 'react';

interface Contact {
  name : string,
  title : string,
  phone : string,
  mail : string,
  location : string
}

const ContactView = ({data} : {data : Contact}) => {
  if(!data) return null

  const {name, title, phone, mail, location} = data

  return(
    <div id='info' className='flex flex-col items-start'>
      <h1 className='h1'>{name}</h1>
      <h2 className='h2 mb-8 font-bold'>{title}</h2>
      <div className='flex gap-x-6'>
        <div className='flex items-center'>
          <img className='w-4 h-4 opacity-[.33] mx-1' src={phoneIcon} alt=''/>
          {phone}
        </div>
        <div className='flex items-center'>
          <img className='w-4 h-5 opacity-[.33] mx-1' src={mailIcon} alt=''/>
          {mail}
        </div>
        <div className='flex items-center'>
          <img className='w-4 h-4 opacity-[.33] mx-1' src={locationIcon} alt=''/>
          {location}
        </div>
      </div>
    </div>
  )
}

const AvatarView = ({url} : {url : RequestInfo}) => {

  const [image, setImage] = useState<string>()

  useEffect(() => {
    fetch(url)
      .then(response => response.blob())
      .then(response => setImage(URL.createObjectURL(response)))
  }, [])

  return(
    <img className='w-36 h-auto rounded-3xl object-cover' src={image} alt=''/>
  )
}

const WrappedContact = withFetchedData(
  ContactView,
  '/data/contact.json')

export const HeaderBlock = () => {
  return(
    <section id='header' className='flex justify-between items-center mx-12 mt-12'>
      <WrappedContact/>
      <AvatarView url='/data/avatar.jpg'/>
    </section>
  )
}