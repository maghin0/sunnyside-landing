import '../App.css';
import 'bulma/css/bulma.min.css';

function TextOnPic(props) {
  return (
    <div
      className={`is-flex is-flex-direction-column is-6 is-justify-content-end is-align-content-center  p-4 pb-6 ${props.background} `}
    >
      <div className="has-text-centered">
        <div className="title">Transform your brand</div>
        <div>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </div>
      </div>
    </div>
  );
}

export default TextOnPic;
