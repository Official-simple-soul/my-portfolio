import html from '../img/html-logo.png'
import css from '../img/css-logo.png'
import tailwind from '../img/tailwind-logo.png'
import bootstrap from '../img/bootstrap-logo.png'
import javascript from '../img/js-logo.png'
import react from '../img/react-logo.png'
import wordpress from '../img/wordpress-logo.png'
import nicepage from '../img/nicepage-logo.png'



const Skill = () => {
    const skillList = [
        {
            img: html,
            title: 'HTML',
        },
        {
            img: css,
            title: 'CSS',
        },
        {
            img: bootstrap,
            title: 'BOOTSTRAP',
        },
        {
            img: javascript,
            title: 'JAVASCRIPT',
        },
        {
            img: react,
            title: 'react',
        },
        {
            img: tailwind,
            title: 'tailwind',
        },
        {
            img: wordpress,
            title: 'wordpress',
        },
        {
            img: nicepage,
            title: 'nicepage',
        },
    ]

    return (
        <>
            <main className='container mx-auto'>
                <h1 className="text-center font-bold text-4xl border-b-[8px] 
                border-black w-40 mx-auto">SKILL</h1>
                <div className='py-8 px-4 flex flex-wrap justify-between items-center'>
                        {
                            skillList.map((item)=>(
                                <div className='text-center'>
                                    <div className='border-17 border-black rounded-full w-40 h-40 flex jusify-center items-center'>
                                        <img src={item.img} alt={item.title.toLowerCase()} width='130px' className=''/>
                                    </div>
                                    <h6 className='font-bold mt-2 mb-8'>{item.title.toUpperCase()}</h6>
                                </div>
                                
                            ))
                        }     
                </div>
            </main>
        </>
    )
}

export default Skill