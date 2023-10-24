import Card from './components/card';
import './App.css'
import cat2Img from './assets/images/cat2.jpg';
import cat3Img from './assets/images/cat3.jpeg';
import cat4Img from './assets/images/cat4.jpeg';
import cat5Img from './assets/images/cat5.jpeg';

export default function App() {
  return (
    <div className='Container'>
      <Card
          img={cat2Img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
       />
      <Card
          img={cat3Img}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
       />
      <Card
          img={cat4Img}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
       />
      <Card
          img={cat5Img}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
       />
    </div>
  )
}


