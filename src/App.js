import './App.css';
import BannerSale from './componets/BannerSale';
import CardImg from './componets/Card';
import CardBanner from './componets/CardBanner';
import Footer from './componets/Footer';
import Mobile from './componets/Mobile';
import YellowBackground from './componets/YellowBackground';
import AddBannerImage from './componets/header/banner';
import AddList from './componets/header/list';
import ResponsiveAppBar from './componets/header/navbar';

function App() {
  return (
    <>
   <ResponsiveAppBar/>
   <AddBannerImage/>
   <AddList />
   <CardImg />
   <BannerSale/>
   <CardBanner />
   <Mobile />
   <YellowBackground/>
   <Footer/>
    </>
  );
}

export default App;
