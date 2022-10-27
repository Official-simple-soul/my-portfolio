import SimplePic from '../img/contactNew.png';

const Contact = () => {
    const contactData = [
        {
            title: 'Refree',
            add1: 'LAND OF HOPE',
            add2: '----------------',
            img: <i class="fa-brands fa-glide-g"></i>
        },
        {
            title: 'Email',
            add1: 'abdurroheemsherifdeen@gmail.com',
            add2: 'kaydee4love@gmail.com',
            img: <i class="fa-solid fa-envelope"></i>
        },
        {
            title: 'Phone number',
            add1: '+2348139781147',
            add2: '+2348125265848',
            img: <i class="fa-solid fa-phone"></i>
        },
    ]
    const socialMedia = [
        {img: <i class="back-text fa-brands fa-github fs-3 me-3"></i>, link: 'https://github.com/Official-simple-soul'},
        {img: <i class="back-text fa-brands fa-twitter fs-3 mx-3"></i>, link: 'https://twitter.com/sir_simple_soul'},
        {img: <i class="back-text fa-brands fa-facebook fs-3 mx-3"></i>, link: 'https://web.facebook.com/sherifdeenabdurroheem/'},
        {img: <i class="back-text fa-brands fa-linkedin fs-3 mx-3"></i>, link: 'linkedin.com/in/abdur-roheem-sherif-deen-a04019207'},
        {img: <i class="back-text fa-brands fa-youtube fs-3 ms-3"></i>, link: 'https://www.youtube.com/channel/UC32RvZ4G97csKlzbOhDtfYA'}
    ]
    return (
        <>
            <section className='bg-bg py-8' id="contact">
            <h1 className="text-center font-bold mb-4 text-4xl border-b-[8px] border-black w-40 mx-auto">CONTACT</h1>
                <div className="container mx-auto md:flex justify-between item-center">
                    <div className="left relative p-3">
                        <div className="border-l-4 border-t-4 border-ash rounded-sm absolute w-80 h-96 hidden md:block md:-left-1 md:-top-1"></div>
                        <div className="border-r-4 border-b-4 border-ash rounded-sm absolute w-48 h-32 hidden md:block md:-right-2 md:-bottom-2"></div>
                        <div className="img-box border-3 border-ash py-1">
                            <img src={SimplePic} alt='' className='z-40 mx-auto h-96 w-80 object-cover'/>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div className="right text-center text-1xl md:text-left">
                        {
                            contactData.map((item)=>(
                                <>
                                    <h5 class="mt-5 font-bold">{item.title}</h5>
                                    <div class="md:flex align-items-center">
                                        <div class="p-2 rounded-md colour justify-center items-center flex">
                                        <div className="text-2xl bg-ash p-2 rounded-md">{item.img}</div>
                                        </div>
                                        <div class="div mx-3">
                                            <p class="my-0 ">{item.add1}</p>
                                            <p class="my-0 ">{item.add2}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                       
                        <h5 class="mt-5 mb-3 text-center md:text-left font-bold">Social media</h5>
                        <div class="flex justify-center md:justify-start items-center small">
                            {
                                socialMedia.map((item)=>(
                                    <a href={item.link} target="_blank" class="text-black text-2xl">{item.img}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact