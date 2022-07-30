import React from 'react';
import '../Home.css';
import { LoyaltyData } from '../HomeData';
import * as AiIcons from 'react-icons/ai';


export default function LoyaltyType(){
    return (
        <>
        <div className='loyalty-type'>
              <div className='loyalty-head'>
                <p>Loyalty Type</p>
                <button className='button'>Add New</button> 
              </div>
              <table id="my-table">
                <tr>
                  <th style={{ width: "5%" }}>#</th>
                  <th style={{ width: "10%" }}>Customer</th>
                  <th style={{ width: "5%" }}>color</th>
                  <th style={{ width: "5%" }}>Action</th>
                </tr>
                {LoyaltyData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: "center" }}>{index + 1}</td>
                      <td style={{ textAlign: "center" }}>{item.customer}</td>
                      <td style={{ alignItems: "center" }}><div style={{ width: "40px", height: "10px", backgroundColor: `${item.color}` }}></div></td>
                      <td style={{ textAlign: "center" }}><AiIcons.AiFillDelete style={{ fontSize: '25px' }} /></td>
                    </tr>

                  );
                })}



              </table>

            </div>
        </>
    )
}