import './App.css';
import Wine from './components/Title/Wine'

function App() {
  return (
    <>
      < Wine
        title="MARANDI"
        description="The winery 'Marandi Wine Company' is the place
 where Azerbaijani traditions of viticulture and winemaking
intertwined with modern European technologies
We are developing and presenting an unusual terroir of the 
coast of the Caspian Sea and the foothills of the Greater 
Caucasus to the world."
        rating={9.6}
        like={true} />
      < Wine
        title="MEYSARI"
        description="Branded as Meysari
         (the name of the company’s main base location),
          Shirvan Wines is one of Azerbaijan’s newest winemakers
           and the country’s first to be considered an organic producer
            by EU certification."
        rating={5.6}
        like={false} />
      < Wine
        title="SAVALAN"
        description="In the short decade since
         its founding in 2007, Savalan has become
          one of Azerbaijan’s most popular and widely
           distributed ranges of premium quality wine. "
        rating={7.6}
        like={true} />


    </>
  );
}

export default App;
