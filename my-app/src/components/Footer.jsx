const Footer =()=>{
    return(
<footer>
  <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <p className="fh5co-social-icons">
            <a href="#">
              <i className="icon-twitter2" />
            </a>
            <a href="#">
              <i className="icon-facebook2" />
            </a>
            <a href="#">
              <i className="icon-instagram" />
            </a>
            <a href="#">
              <i className="icon-dribbble2" />
            </a>
            <a href="#">
              <i className="icon-youtube" />
            </a>
          </p>
          <p>
            Copyright 2016 Free Html5 <a href="#">Listing</a>. All Rights
            Reserved. <br />
            Made with <i className="icon-heart3" /> by{" "}
            <a href="http://freehtml5.co/" target="_blank">
              Freehtml5.co
            </a>{" "}
            / Demo Images:{" "}
            <a href="https://unsplash.com/" target="_blank">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}

export default Footer