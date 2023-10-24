
import img1 from '../assets/images/image 12.png';
import starImg from '../assets/images/star.png';

export default function Card(){
    return(
        <div className="card">
            <img src={img1} className="card--image" />
            <div className='card--stats'>
                <img src={starImg} className='card--star' />
                <span>5.0</span>
                <span className='gray'> (6) .</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span>/ person</p>
        </div>
    )
}