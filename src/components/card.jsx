import phoneIcon from '../assets/icons/phone-icon.svg';
import mailIcon from '../assets/icons/mail-icon.svg';



export default function Card(props){
    return(
        <>
            <section className='card'>
                <img src={props.img} />
                <h1>{props.name}</h1>
                <span className='vertical'><img src={phoneIcon} className='icons' /><p>{props.phone}</p></span>
                <span className='vertical'><img src={mailIcon} className='icons' /><p>{props.email}</p></span>
            </section>
        </>
    )
}