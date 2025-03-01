import { Link } from 'react-router'
import heroImage from '../../assets/rabbit-hero.jpg'

const Hero = () => {
    return (
        <section className='relative'>
            <img src={heroImage} alt="Banner-Image" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <div className="text-center text-white p-6">
                    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 flex flex-col'>Fashion <span className='text-white/70'>Picks</span></h1>
                    <p className='text-sm tracking-tighter md:text-lg mb-6'>Explore our new Fashion Collection with Fast worldwide shipping</p>
                    <Link to='/' className='bg-white text-gray-950 px-6 py-2 border border-white hover:bg-transparent hover:text-white duration-300 rounded-sm text-lg'>Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
