import { useState } from "react";

const Footer =()=> {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        name.indexOf('@') < 1?alert('Please input a valid email'):
        alert(`Hi ${name.slice(0, name.indexOf('@'))}, thank you for subscribing to my blog`);
        setName('')
    }

    return (
        <>
            <section className="text-white footer py-16">
                <div className="container mx-auto px-2 md:px-0 md:flex justify-between items-center">
                    <div className="left">
                        <h1 class="text-light text-2xl">SUBSCRIBE TO MY BLOG NOTIFICATION</h1>
                        <p class="pt-3 paragraph text-ash w-80 md:w-96">
                            Kindly input your email address and click on the subscribe button to get latest post from my blog anytime anywhere
                        </p>
                    </div>
                    <div className="right mt-8">
                    <form onSubmit={handleSubmit} className='text-center'>
                        <input className="mx-auto block w-80 h-10 mb-4 bg-transparent border-2 px-2"
                        type="text" 
                        placeholder="E.g simple-soul@mymail.com"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <input type="submit" value='Subscribe' className="border-2 px-3 py-1 rounded-sm" />
                    </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer