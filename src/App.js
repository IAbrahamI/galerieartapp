import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/default-skin/default-skin.css';
import 'photoswipe/dist/photoswipe.css';
import Img01 from './images/img01.jpg';
import Img02 from './images/img02.jpg';
import Img03 from './images/img03.jpg';
import Img04 from './images/img04.jpg';
import Img05 from './images/img05.jpg';
import './App.css';

function App() {
  return (
    <div className="Main">
        <h1>Gallery</h1>

        <div className="App">
            <br/>
            <Gallery>
                <Item
                    original={Img01}
                    thumbnail={Img01}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} width={512} height={384} src={Img01} />
                    )}
                </Item>
                <Item
                    original={Img02}
                    thumbnail={Img02}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} width={512} height={384} src={Img02} />
                    )}
                </Item>
                <Item
                    original={Img03}
                    thumbnail={Img03}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} width={512} height={384} src={Img03} />
                    )}
                </Item>
                <Item
                    original={Img04}
                    thumbnail={Img04}
                    width="468"
                    height="512"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} width={468} height={562} src={Img04} />
                    )}
                </Item>
                <Item
                    original={Img05}
                    thumbnail={Img05}
                    width="408"
                    height="562"
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} width={408} height={562} src={Img05} />
                    )}
                </Item>
            </Gallery>
        </div>

    </div>
  );
}

export default App;
