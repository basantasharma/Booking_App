import React from "react";
import Navigation from "../../components/HomePages/Navigation";
import Footer from "../../components/HomePages/Footer";
import Herosection from "../../components/HomePages/Herosection";

const Bus = () => {
  return (
    <div>
      <Navigation />
      <Herosection name =" Our Vehicles" />
      <div className="flex justify-center ">
        <div className="container bg-slate-100">
          <div className=" text-center  font-semibold text-3xl p-14">
            Our Transportation
          </div>
          <div>
          <table className="w-full ">
            
            <tr className="text-xl">
              <th></th>
              <th >Vehicle-Information</th>
              <th>Bus-seat</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
            
            <tr className="text-center font-medium">
              <td>
                
                <img
                  className="  h-32 w-50 mx-14  "
                  src="https://purepng.com/public/uploads/large/purepng.com-black-jeep-wrangler-carcarvehicletransportjeepjeep-wrangler-9615246538758apyw.png"
                  alt=""
                />
              </td>
              <td>VIP TOYOTO COASTER</td>
              <td>Total Seat:17</td>
              <td>7:00 AM</td>
              <td>Rs.1600 (One-Way)<br></br>
                Rs.3100(Two-Way)
              </td>
              
            </tr>
            
            <tr className="text-center font-medium">
              <td>
               
                <img
                  className="  h-32 w-50 mx-14  "
                  src="https://th.bing.com/th/id/R.25b3e9fa078a072109ed23fc513bd818?rik=be3pqlHljGIGig&pid=ImgRaw&r=0"
                  alt=""
                />
              </td>
              <td>VIP TOYOTO COASTER</td>
              <td>Total Seat:29</td>
              <td>7:00 AM</td>
              <td>Rs.1600</td>
              
            </tr>
            <tr className="text-center font-medium">
              <td>
                
                <img
                  className=" justify-between h-32 w-50 mx-14  "
                  src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qyjsrlrjkftolr1huncb/PrivateCarChartertoBlueMountains,Wollongong,HunterValleyfromSydneyCity.jpg"
                  alt=""
                />
              </td>
              <td>Tourist A/C</td>
              <td>Total Seat:35</td>
              <td>7:00 AM</td>
              <td>Rs.1200</td>
              
            </tr>
            <tr className="text-center font-medium">
              <td>
               
                <img
                  className=" justify-between h-32 w-50 mx-14  "
                  src="https://www.autoblog.com/img/research/styles/photos/van.jpg"
                  alt=""
                />
              </td>
              <td>Premium Sofa Seat</td>
              <td>Total Seat:17</td>
              <td>7:00 AM</td>
              <td>Rs.1600</td>
             
            </tr>
            
          </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bus;
