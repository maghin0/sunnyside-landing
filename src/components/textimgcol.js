import '../App.css';
import 'bulma/css/bulma.min.css';

function TextImgCol(props) {
  return (
    <div className={`columns is-gapless ${props.reverse} `}>
      <div className="column is-flex is-flex-direction-column is-6 is-justify-content-center is-align-content-center">
        <div className="has-text-left p-6 m-6">
          <div className="title is-size-1 has-text-bold">
            Transform your brand
          </div>
          <div>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <button className="button is-text">Learn More</button>
        </div>
      </div>
      <div className="column is-6">
        <img src={props.imgmob} srcSet={`${props.imgdesk} 1200w`} alt="egg" />
      </div>
    </div>
  );
}

export default TextImgCol;
