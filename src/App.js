import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import SinhVien from "./components/SinhVien/SinhVien.js";
import SanPham from "./components/SanPham/SanPham.js";

class App extends Component {
  render() {
    return (

      
      <div className="div">
        <h1>Sản Phẩm</h1>
          <SanPham maSP = "01" tenSP = "Cafe" giaSP = "7000">
            ƯU ĐÃI: Sale 100%
          </SanPham>
          <p>--------------------------------------------------</p>
          <SanPham maSP = "02" tenSP = "Soda" giaSP = "10000">
            ƯU ĐÃI: Sale 100%
          </SanPham>
          <p>--------------------------------------------------</p>
          <SanPham maSP = "03" tenSP = "Pepsi" giaSP = "18000">
            ƯU ĐÃI: Sale 100%
          </SanPham>
          <p>--------------------------------------------------</p>
          <SanPham maSP = "04" tenSP = "RedBull" giaSP = "15000">
            ƯU ĐÃI: Sale 100%
          </SanPham>
          <p>--------------------------------------------------</p>
          <SanPham maSP = "04" tenSP = "Dorito" giaSP = "50000">
            ƯU ĐÃI: Sale 100%
          </SanPham>
      </div>
    );
  }
}
export default App;
