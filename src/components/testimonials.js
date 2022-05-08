import '../App.css';
import 'bulma/css/bulma.min.css';

function Testimonials(props) {
  return (
    <div className="p-6">
      <div className=" has-text-centered ">
        <figure className="image is-64x64 is-inline-block">
          <img className="is-rounded" src={props.profile} alt="profile" />
        </figure>
        <div className="mb-4 is-size-6 has-text-grey">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </div>
        <div className="has-text-weight-bold has-text-black">{props.name}</div>
        <div className="is-size-6 has-text-grey">{props.job}</div>
      </div>
    </div>
  );
}

export default Testimonials;
