
import React from 'react';
import '../Home.css';
import { HomeData } from '../HomeData';
import * as BsIcons from 'react-icons/bs';


export default function MessageSetting(){
    return (
        <>
        <div className='message-setting'>
            <p ><b>Message Setting</b></p>


            <table id="my-table">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "10%" }}>type</th>
                <th style={{ width: "15%" }}>Message</th>
                <th style={{ width: "5%" }}>Action</th>
              </tr>
              {HomeData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td>{item.type}</td>
                    <td>{item.message}</td>
                    <td style={{ textAlign: "center" }}><BsIcons.BsPencilFill /></td>
                  </tr>

                );
              })}


            </table>
          </div>
        </>
    )
}