import './App.css';
import 'bulma/css/bulma.min.css';
import 'bulma-social/css/all.min.css';
//components
import TextImgCol from './components/textimgcol';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import Header from './components/header';
//assets
import eggdesk from './images/desktop/image-transform.jpg';
import egg from './images/mobile/image-transform.jpg';
import milkshakedesk from './images/desktop/image-stand-out.jpg';
import milkshake from './images/mobile/image-stand-out.jpg';
import TextOnPic from './components/textonpic';
//profile assets
import emilyimage from './images/image-emily.jpg';
import jennieiamge from './images/image-jennie.jpg';
import thomasimage from './images/image-thomas.jpg';
//
import orange from './images/mobile/image-gallery-orange.jpg';
import cone from './images/mobile/image-gallery-cone.jpg';
import cubes from './images/mobile/image-gallery-sugar-cubes.jpg';
import milkbottles from './images/mobile/image-gallery-milkbottles.jpg';
import orangeDesktop from './images/desktop/image-gallery-orange.jpg';
import coneDesktop from './images/desktop/image-gallery-cone.jpg';
import cubesDesktop from './images/desktop/image-gallery-sugarcubes.jpg';
import milkbottlesDesktop from './images/desktop/image-gallery-milkbottles.jpg';

function App() {
  return (
    <div classNamename="main">
      <section className="hero is-fullheight-with-navbar background-hero">
        <div className="hero-head">
          <Header />
        </div>

        <div className="hero-body is-align-items-flex-start">
          <div className="container has-text-centered ">
            <p className="title has-text-white is-uppercase is-size-1">
              We are sunnyside
            </p>
          </div>
        </div>
      </section>
      <TextImgCol
        reverse={'reverse-column-only'}
        imgdesk={eggdesk}
        imgmob={egg}
        text={''}
      />
      <TextImgCol
        reverse={'reverse-column'}
        imgdesk={milkshakedesk}
        imgmob={milkshake}
      />
      <div className="columns is-gapless">
        <div className="column is-6">
          <TextOnPic background={'cherry-bg'} />
        </div>
        <div className="column is-6">
          <TextOnPic background={'orange-bg'} />
        </div>
      </div>
      <div className="title is-uppercase has-text-grey has-text-centered">
        Client Testimonials
      </div>
      <div className="columns is-gapless">
        <div className="column">
          <Testimonials
            profile={emilyimage}
            name={'Emily R.'}
            job={'Marketing Director'}
          />
        </div>
        <div className="column">
          <Testimonials
            profile={jennieiamge}
            name={'Emily R.'}
            job={'Marketing Director'}
          />
        </div>
        <div className="column">
          <Testimonials
            profile={thomasimage}
            name={'Emily R.'}
            job={'Marketing Director'}
          />
        </div>
      </div>

      <div className="columns is-multiline is-mobile is-gapless">
        <div className="column is-6-mobile">
          <img
            src={milkbottles}
            srcSet={`${milkbottlesDesktop} 1200w`}
            alt="milk"
          />
        </div>
        <div className="column is-6-mobile">
          <img src={orange} srcSet={`${orangeDesktop} 1200w`} alt="milk" />
        </div>
        <div className="column is-6-mobile">
          <img src={cone} srcSet={`${coneDesktop} 1200w`} alt="milk" />
        </div>
        <div className="column is-6-mobile">
          <img src={cubes} srcSet={`${cubesDesktop} 1200w`} alt="milk" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
