import img1 from '../assets/images/airbnb.png';



export default function Hero(){
    return(
        <section className='hero'>
            <img src={img1} className='hero--photo' />
            <h2 className='hero--header'>Online Experiences</h2>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}