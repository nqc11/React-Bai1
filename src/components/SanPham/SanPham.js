import React from "react";

const sanPham = (props) => {
    return (
        <div>
            <p>Mã sản phẩm: {props.maSP}</p>
            <p>Tên sản phẩm: {props.tenSP}</p> 
            <p>Giá sản phẩm: {props.giaSP}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default sanPham;