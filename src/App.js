import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import SinhVien from "./components/SinhVien/SinhVien.js";
import SanPham from "./components/SanPham/SanPham.js";

class App extends Component {
  state = {
    sinhVien : [
      { hoten:'Nguyễn Thị Mỹ Hằng', tuoi: 19, sothich: 'cafe' },
      { hoten: 'Nguyễn Quốc Cường', tuoi: 19, sothich: 'bida' },
      { hoten: 'Hoàng Kim Anh', tuoi: 19, sothich: 'milktea' },
    ],
    lop : 'Lập trình ReactJS'
  }

  xuLyCapNhat = () => {
    this.setState(
      {
        lop: '18CDTH11',
        sinhVien : [
          { hoten:'Lý Thị Kim Ngân', tuoi: 19, sothich: 'cafe' },
          { hoten: 'Nguyễn Quốc Anh', tuoi: 19, sothich: 'bida' },
          { hoten: 'Nguyễn Thị Thu Trang', tuoi: 19, sothich: 'milktea' },
        ]
      }
    );
  }
  render() {
    return (
      <div className="App">
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Nguyễn Thị Mỹ Hằng - Lớp {this.state.lop} </p>
        <button onClick = {this.xuLyCapNhat} >
          Cập nhật
        </button>
        <SinhVien
          hoten={this.state.sinhVien[0].hoten}
          tuoi={this.state.sinhVien[0].tuoi} >
          sothich: {this.state.sinhVien[0].sothich}
        </SinhVien>
        <SinhVien 
        hoten={this.state.sinhVien[1].hoten}
        tuoi={this.state.sinhVien[1].tuoi} >
          sothich: {this.state.sinhVien[1].sothich}
        </SinhVien>
        <SinhVien
         hoten={this.state.sinhVien[2].hoten}
         tuoi={this.state.sinhVien[2].tuoi} />
         sothich: {this.state.sinhVien[1].sothich}
      </div>
    );
  }
}
export default App;
