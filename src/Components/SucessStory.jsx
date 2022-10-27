const SuccessStory = () => {
    const successData = [
        {
            img: <i class="fa-solid fa-hourglass-end fs-2"></i>,
            num: 5,
            title: 'Completed projects'
        },
        {
            img: <i class="fa-solid fa-face-laugh fs-2"></i>,
            num: 15,
            title: 'Happy clients'
        },
        {
            img: <i class="fa-solid fa-code fs-2"></i>,
            num: '10k+',
            title: 'Lines of codes written'
        },
        {
            img: <i class="fa-solid fa-spinner fs-2"></i>,
            num: 10,
            title: 'Projects in progress'
        },
    ]

    return (
        <>
             <section id="success" className="bg-light py-5">
                <div  className="py-5 success">
                    <div className="container mx-auto">
                        <div className="md:flex justify-between items-center px-5">
                            {
                                successData.map((data) => (
                                    <div class="about-hover mb-4 border-black border-t-4 border-l-4 shadow bg-transparent text-center py-3 px-8">
                                        <div class="flex justify-center items-center">
                                            {data.img}
                                            <h2 class="mx-4 font-bold mb-0">{data.num}</h2>
                                        </div>
                                        <h5 class="pt-3">{data.title}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessStory