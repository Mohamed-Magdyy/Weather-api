import React from "react";
import weather from "../Imge/Weather-amico.png";
import cloud from "../Imge/foggy.gif";
import clear from "../Imge/sun.gif";
import storm from "../Imge/storm.gif";
import rain from "../Imge/rain.gif";
import drizzle from "../Imge/drizzle.gif";
import snow from "../Imge/snow.gif";
import erth from "../Imge/earth.gif";
import weathers from "../Imge/Raining-amico.png";


import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";

export default function Search() {
  const [search, setSearch] = useState([]);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  let componet = true;

  useEffect(() => {
    const fetchMesode = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=`
      );
      if (componet) {
        setData(await response.json());
      }
      return () => {
        componet = false;
      };
    };
    fetchMesode();
  }, [search]);

  let emoji = null;

  if (typeof data.main != "undefined") {
    if (data.weather[0].main == "Clouds") {
      emoji = cloud;
    } else if (data.weather[0].main == "Thunderstorm") {
      emoji = storm;
    } else if (data.weather[0].main == "Drizzle") {
      emoji = drizzle;
    } else if (data.weather[0].main == "Rain") {
      emoji = rain;
    } else if (data.weather[0].main == "Snow") {
      emoji = snow;
    } else if (data.weather[0].main == "Clear") {
      emoji = clear;
    }
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
  };

  //dataaaaaaaaa
let d =new Date();
let date =d.getDate();
let yerar =d.getFullYear();
let month =d.toLocaleString("default",{month:'long'});
let day =d.toLocaleString("default",{weekday:'long'});

//timeeeeeee
let time  =d.toLocaleString([],{
     hour : '2-digit',
     minute: '2-digit' 
});

useEffect(()=>{
  Aos.init({duration:2000})
},[])
  return (
    <>
   <div className="container mt-5 mb-5">
    <div className="row d-flex  justify-content-between">
      <form className="" onSubmit={handelSubmit}>
          <div className="input-group  mb-3 mt-5">
            <input name='search' value={input}  onChange={(e)=>setInput(e.target.value)} required type="text" className="form-controll" placeholder="Search City ....."  />
            <button type='submit' className="input-group-text" id="basic-addon2"><i className='fas fa-search'></i></button>
          </div>
      </form>
      <div className="col-md-6 text-center">
        <div className="imge-pople  ">
          <img className="w-75 mt-3" src={weathers} alt="" />
        </div>
      </div>
          {/* START DIV SEARCH */}
    {typeof data.name === "undefined"?<div className="alert mt-4 0 w-25 m-auto " data-aos="fade-up">Not Found City !!!!</div>:
      <div className="col-md-4 me-5   mt-2 mb-5" >
      <div className="item-weather bg-dark text-white p-3 " data-aos="fade-up-right">
      <div className="title-top d-flex align-items-center">
        <img className="imge-jps" src={erth} alt="" />
          <h1 className="ms-2 mt-1">{data.name}</h1>
      </div>
      <hr />
      <div className="emoji text-center mt-4">
         <img className="gif w-25 mb-2" src={emoji} alt="" />
                {data.main ? (
                  <h5>{data.main.temp.toFixed(0)}&deg;</h5>
                ) : null}
                {data.weather ? (
                  <h5>{data.weather[0].description}</h5>
                ) : null}
                <p className="card-text">
                  {day} , {month} , {date} , {yerar}
                  <br />
                  {time}.
                </p>
        </div>
        <hr />
              <div className="formation">
                <div className="temp d-flex justify-content-between">
                  <div className="icon-temp ">
                    <i className="fa-solid fa-temperature-three-quarters"></i>
                    <span className="ps-1">Hight / Low</span>
        </div>
                  <div className="title-temp d-flex">
                    {data.main ? (
                      <p>{data.main.temp_min.toFixed(1)}&deg;</p>
                    ) : null}{" "}
                    /
                    {data.main ? (
                      <p> {data.main.temp_max.toFixed(1)}&deg;</p>
                    ) : null}
        </div>
        </div>
                <div className="wind d-flex justify-content-between">
                  <div className="icon-wind">
                    <i className="fa-solid fa-wind"></i>
                    <span className="ps-1">Wind</span>
        </div>
                  {data.wind ? (
                    <p>{data.wind.speed.toFixed(1)} Km/h</p>
                  ) : null}
        </div>
                <div className="humidity d-flex justify-content-between">
                  <div className="icon-hum">
                    <i className="position-relative fa-solid fa-droplet">
                      <span className="humi-icon position-absolute">%</span>
                    </i>
                    <span className="ps-1">Humidity</span>
        </div>
                  {data.main ? (
                    <p> {data.main.humidity.toFixed()} % </p>
                  ) : null}
      </div>
        </div>
         </div>
          </div>
          
    }
          {/* END DIV SEARCH */}

        </div>
      </div>
  <div className="footer-search container-fluid  bg-dark w-100 text-white pb-5 text-center pt-4  ">
     <p>Design by _ Mohamed Magdy</p>
  </div>
    </>
  );
}
