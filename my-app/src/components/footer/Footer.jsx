import './footer.css'


const Footer = () => {
  return (
    <footer className="u-clearfix u-footer u-grey-80" id="sec-5eb8">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-20 u-size-30-md u-layout-cell-1">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  {/*position*/}
                  <div data-position="" className="u-position">
                    {/*block*/}
                    <div className="u-block">
                      <div className="u-block-container u-clearfix">
                        {/*block_header*/}
                        <h5 className="u-block-header u-text">
                          {/*block_header_content*/}Uniworld
                          {/*/block_header_content*/}
                        </h5>
                        {/*/block_header*/}
                        {/*block_content*/}
                        <div className="u-block-content u-text">
                          {/*block_content_content*/}Your Travel Website
                          {/*/block_content_content*/}
                        </div>
                        {/*/block_content*/}
                      </div>
                    </div>
                    {/*/block*/}
                  </div>
                  {/*/position*/}
                </div>
              </div>
              <div className="u-align-center-sm u-align-right-md u-container-style u-layout-cell u-size-20 u-size-30-md u-layout-cell-2">
                <div className="u-container-layout u-valign-middle u-container-layout-2">
                  <a
                    href="/"
                    className="u-image u-logo u-image-1"
                    data-image-width={158}
                    data-image-height={128}
                  >
                    <img
                      src="https://th.bing.com/th/id/R.d4147baeccf9d3b12c0ee321174f4f16?rik=bL7mvACPAzom8w&pid=ImgRaw&r=0"
                      className="u-logo-image u-logo-image-1"
                    />
                    <span>
                      Copyright 2016 Free Html5.
                      <br />
                      All Rights
                      Reserved. <br /> <br />
                      Made with <i className="icon-heart3" /> by{" "}
                      <a href="/" target="_blank">
                        Freehtml5.co
                      </a>{" "}
                    </span>
                  </a>
                </div>
              </div>
              <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-right-lg u-align-right-xl u-container-style u-layout-cell u-right-cell u-size-20 u-size-30-md u-layout-cell-3">
                <div className="u-container-layout u-valign-middle u-container-layout-3">
                  <div>
                    <img
                      src="https://www.uniworld.com/dfsmedia/0abe5a49082f4fa787b315e25f74cead/9872-50037/"
                      alt="Left Image"
                      style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
                    />
                    <img
                      src="https://www.uniworld.com/-/media/Uniworld/Awards/feefo_platinum_service.png"
                      alt="Right Image"
                      style={{ width: '100%', maxWidth: '150px', height: 'auto', float: 'right' }}
                    />
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>



  );
}

export default Footer
