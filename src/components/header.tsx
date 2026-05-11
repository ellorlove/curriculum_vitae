import avatar from '../assets/avatar.jpg';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';

const Header = () => {
    return(
        <section id='header' className='flex justify-between items-center m-12'>
          <div id='info' className='flex flex-col items-start'>
            <h1 className='h1'>Aleksei Orlov</h1>
            <h2 className='h2 mb-8 font-bold'>Frontend Developer</h2>
            <div className='flex gap-x-6'>
              <div className='flex items-center'>
                <img className='w-4 h-4 opacity-[.33] mx-1' src={phone} alt=''/>
                +375 (29) 796-62-38
              </div>
              <div className='flex items-center'>
                <img className='w-4 h-5 opacity-[.33] mx-1' src={mail} alt=''/>
                alex.orlov.official@gmail.com
              </div>
              <div className='flex items-center'>
                <img className='w-4 h-4 opacity-[.33] mx-1' src={location} alt=''/>
                Belarus, Minsk
              </div>
            </div>
          </div>
          <img className='w-36 h-auto rounded-full object-cover' src={avatar} alt=''/>
        </section>
    )
}

export {Header};