const About = () => {
    let whatIdo = [
        {
            image: <i class="fa-solid fa-laptop-code fs-1"></i>,
            title: 'Web Development',
            description: 'Web Development'
        },
        {
            image: <i class="fa-solid fa-laptop fs-1"></i>,
            title: 'Web Creation',
            description: 'Bringing your design ideas to life'
        },
        {
            image: <i class="fa-solid fa-laptop-code fs-1"></i>,
            title: 'Web Development',
            description: 'Manage your website'
        },
        {
            image: <i class="fa-solid fa-laptop fs-1"></i>,
            title: 'Front-End Mentorship',
            description: 'Mentoring your front-end skills'
        },
        {
            image: <i class="fa-solid fa-laptop-code fs-1"></i>,
            title: 'Trainings',
            description: 'Help you build your skills'
        },
        {
            image: <i class="fa-solid fa-laptop-code fs-1"></i>,
            title: 'Consulting',
            description: 'Answering to your calls when you need it'
        }
    ]

    return (
        <main className="py-10">
            <h1 className="text-center font-bold text-4xl border-b-[8px] border-black w-40 mx-auto">ABOUT</h1>
            <div className="container mx-auto flex-col md:flex-row md:flex">
                <div className="left pt-10 max-w-lg p-3">
                    <h1>WHO AM I?</h1>
                    <p className="text-justify">     
                            A proficient web developer with a proven record of implementing web designs 
                            using efficient web development techniques and industry best practices to help provide responsive, interactive 
                            and functional web pages across all web devices.
                            A developer, who focuses on finding the most efficient route to creating a website that provides users with the best experience. 
                            Implementing creativity and problem-solving in development and an understanding of database structures and . 
                            A brilliant team player who knows how to use developer collaborative tools like Github. 
                    </p>
                    <p className="mt-5 text-justify">
                            I am a frontend 
                            developer proficient in HTML, CSS, Bootstrap, Javascript and ReactJs. I have 23 months experience working on individual 
                            projects with team of different tracks both design and backend team. I have led several project to success such as kodeblog 
                            project and Daura project. I can work anywhere and ready to travel anywhere to work as well ready to improve my skill in other 
                            software development tools.
                    </p>
                </div>
                <div className="items-center flex bg-black mt-8 justify-center hidden md:block">
                    <img src="img/line.png" alt="" />
                </div>
                <div className="right md:pt-10 max-w-lg">
                    <div className="flex flex-wrap justify-center">
                        {whatIdo.map((item) => (
                            <div className="about-hover shadow-xl rounded 
                            p-4 text-center w-40 mx-2 md:mx-6 mb-4">
                                <div className='text-2xl'>{item.image}</div>
                                <h4 className="font-bold">{item.title}</h4>
                                <h4 className="text-sm">{item.description}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About