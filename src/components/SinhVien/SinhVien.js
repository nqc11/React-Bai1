import React from 'react';

const inTuoi = () => {
    return Math.floor((Math.random() * 100));

} 

const sinhVien = (props) => {
    return(
        <div>
            <p>{ props.hoten } - Tuổi: { props.tuoi }</p>
            <p> { props.children } </p>
        </div>
    );
}   

export default sinhVien;