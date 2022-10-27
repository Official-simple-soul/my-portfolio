import FeedBox from '../img/feedback-box.png'
import Giyu from '../img/giyu.jpeg';
import Mubaraq from '../img/feedback-image4.jpeg';
import Peter from '../img/feedback-image3.png';
import Star from '../Functions/Star';

const Feedbacks = () => {
   const feedBackData = [
    {
        image: Mubaraq,
        star: Star(4),
        name: 'Mubaraq AbuHassan',
    },
    {
        image: Peter,
        star: Star(4),
        name: 'Peter Jefferson',
    }
   ]
    return (
        <>
            <section className="py-8 bg-black feedbacks text-white" id="feedbacks">
                <div className="container mx-auto px-3 md:px-0">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white text-2xl">CLIENT FEEDBACKS</h1>
                        <i class="fa-solid fa-angles-right text-white"></i>
                    </div>
                    <div className="md:flex md:justify-between md:items-center mt-3">
                        <div className="left relative">
                            <img src={FeedBox} alt='box' className='absolute hidden md:block'/>
                            <div className="main-feed md:flex md:justify-between md:items-center p-4 md:ml-3 md:mt-3 border-2 border-white md:w-128">
                                <img src={Giyu} alt="giyu" className='md:w-48'/>
                                <div className="main-feed-name">
                                    <h1 className='my-4'>Micheal Edward</h1>
                                    <div className="mb-3 rating flex justify-start items-center text-rating">
                                        {Star(5)}
                                    </div>
                                    <p className=''>Excellent. I was really impressed with the work you did. I would definitely recommend you to anyone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            {feedBackData.map((item)=>(
                                <div class="flex items-center p-4 border border-1 border-light rounded client-hover my-6 md:mb-6">
                                    <img src={item.image} alt={item.name} className='object-cover w-24 h-24 rounded-full'/>
                                    <div class="text mx-4">
                                        <h5 class="mx-2">{item.name}</h5>
                                        <div class="star-rating d-flex align-items-center">
                                            {item.star}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedbacks