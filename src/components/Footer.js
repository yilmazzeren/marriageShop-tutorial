import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
class Footer extends Component {
  render() {
    return (
      <div>
          <hr/>
        <footer>
          <div className="social">
            <h3>SOSYAL MEDYA</h3>
          </div>
          <Flip left>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Flip>
          <Fade bottom>
            <div className="down-menu">
              <div>
                <span>HAKKIMIZDA</span>
              </div>

              <div>
                <span>ÜRÜNLER</span>
                <ul>
                  <li>Gelinlik</li>
                  <li>Davetiye</li>
                  <li>Fotoğraf</li>
                  <li>Nikah</li>
                  <li>Mekanlar</li>
                  <li>Gelin Çiçeği</li>
                  <li>Gelin Aksesuarları</li>
                  <li>Nikah Şekeri</li>
                  <li>Ayakkabı</li>
                </ul>
              </div>
              <div>
                <span>KAMPANYALAR</span>
              </div>
              <div>
                <span>İLETİŞİM</span>
              </div>
            </div>
          </Fade>
        </footer>
        <hr />
        <div style={{ margin: "40px" }}>
          <p>© 2020 Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
