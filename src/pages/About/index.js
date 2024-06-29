import { useState, useEffect } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Listen for scroll event to trigger animation
        const handleScroll = () => {
            const aboutSection = document.getElementById('aboutSection');
            if (aboutSection && window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <>
            <div className='text-center w-full'>
                <h1 className='text-2xl mt-20 text-yellow-700'>ABOUT US</h1>
            </div>
            <div id="aboutSection" className={`flex mt-10 w-full ${isVisible ? 'animate-teleport' : ''}`}>
                <div className={`w-1/2 ${isVisible ? 'animate-teleport-child' : ''}`}>
                    <img src="https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/blog/images/2020/03/pouring_pennzoil_oil.jpg"
                         className="w-[600px] ms-20"/>
                </div>
                <div className={`ms-10 w-1/2 ${isVisible ? 'animate-teleport-child' : ''}`}>
                    <h1 className='text-4xl font-bold '>Explore What We Provide the <br/> facility to our customers</h1>
                    <p className="mt-10">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
