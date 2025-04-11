// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import star from './images/star.png';

function App() {
  const firstName = 'Sumesh'
  const lastName = 'Sundaran'
  return (
    
   <main className="main">
      <>
      <h1>Hello {firstName} {lastName} !</h1>
      <Header/>
      <Hero/>
        <ul className='card'>
          <Card 
            productStatus = "Sold Out"
            rating = {star}
            ratingNumber = "(6) - IND"
            title= 'img elements must have an alt prop'
            price = '₹999'
            ratingCount= '4.5'
          />
          <Card 
            productStatus = "30 Available"
            rating = {star}
            ratingNumber = "(36) - US"
            title= 'img elements must have an alt prop'
            price = '₹666'
            ratingCount= '5'
          />
        </ul>
      
      </>
   </main>
  );
}

export default App;
