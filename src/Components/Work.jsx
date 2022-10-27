import WorksDetails from '../Data/MyWork'
import { useState, useEffect} from 'react'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';

const Work = () => {
    const [activeSlide, setActiveSlide] = useState(1)
    const previousSlide=(id)=>{
        id===1?setActiveSlide(WorksDetails.length)
        :id>1?setActiveSlide(activeSlide-1)
        :setActiveSlide(WorksDetails.length-1)
    }
    let nextSlide=(id)=>{
        id===WorksDetails.length?setActiveSlide(1)
        :id<WorksDetails.length?setActiveSlide(activeSlide+1)
        :setActiveSlide(WorksDetails.length+1)
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setActiveSlide((c)=> {
               return c<WorksDetails.length?c+1:c=1
            })
        }, 5000)
    })

   return ( 
    <section className="py-8 bg-bg" id="work">
        <h1 className="mb-4 text-center font-bold text-3xl border-b-[8px] border-black w-80 mx-auto">SOME OF MY WORK</h1>
        <div>
            {WorksDetails.map((item)=>{
                const {id, code, link, image} = item;
                return (
                        <div key={id} className={activeSlide===id?
                        'flex justify-center item-center relative':'hidden'
            }>
                            <button onClick={()=>previousSlide(id)} className='text-4xl md:text-6xl bg-black text-white absolute z-10 left-0 mid'><FiChevronLeft /></button>
                            <div class="mb-4 bg-transparent border-0 work-hover relative" data-aos="zoom-in" data-aos-duration="1000">
                                <img src={image} alt="" class="w-128" />
                                <h5 className='absolute hidden'>{id}</h5>
                                <a href={link} target="_blank"><button class="text-1xl md:text-4xl text-white bg-black border-2 rounded-xl  mt-3 ml-3 p-2 top-0 absolute work-title">Go Live</button></a>
                                <a href={code} target="_blank"><button class="text-1xl md:text-4xl text-white bg-black border-2 rounded-lg mb-3 mr-3 p-2 bottom-0 right-0 absolute work-title">View Code</button></a>
                            </div>
                            <button onClick={()=>nextSlide(id)} className='clicking text-4xl md:text-6xl bg-black text-white absolute right-0 mid'><FiChevronRight /></button>
                        </div>
                )
            })}
        </div>
    </section>
    )
}

export default Work