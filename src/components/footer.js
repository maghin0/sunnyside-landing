import '../App.css';
import 'bulma/css/bulma.min.css';
import 'bulma-social/css/all.min.css';
import 'fa-icons';
function Footer(props) {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <div className="title">sunnyside</div>
        <div className="columns">
          <div className="column">About</div>
          <div className="column">Services</div>
          <div className="column">Projects</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
