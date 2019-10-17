import React, {Component} from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';

import SinhVien from './component/SinhVien/SinhVien.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div>
        <h1>Nguyễn Quốc Cường</h1> 
        <h2>Hello</h2>
        <SinhVien hoten='Nguyễn Quốc Cường' tuoi = '26'>
          Sở thích: Bóng Đá, Chơi Game, Chạy Bo,....
        </SinhVien>
        <SinhVien hoten='Nguyễn Thị Mỹ Hằng' tuoi = '16'>
          Sở thích: Cafe
        </SinhVien>
        <SinhVien hoten='Lê Nguyễn Ý Linh' tuoi = '11'/>
      </div>
    )
  }
}

export default App;
