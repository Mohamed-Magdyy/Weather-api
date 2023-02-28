import React from "react";
import weather from "../Imge/Weather-amico.png";
import cloud from "../Imge/foggy.gif"
import clear from "../Imge/sun.gif"
import storm from "../Imge/storm.gif"
import rain from "../Imge/rain.gif"
import drizzle from "../Imge/drizzle.gif"
import snow from "../Imge/snow.gif"
import erth from "../Imge/earth.gif"
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../Footer/Footer";

export default function Weather() {
  const [search, setSearch] = useState("Alexandria");
  const [dataCairo, setDataCairo] = useState([]);
  const [dataAlex, setDataAlex] = useState([]);
  const [dataPort, setDataPort] = useState([]);
  const [dataAsWan, setDataAswan] = useState([]);
  const [dataDamieta, setDataDamieta] = useState([]); 
  const [dataIsmailia, setDataIsmailia] = useState([]); 
  const [input, setInput] = useState("");
  let componet = true;

  ////////////////CAIRO//////////////////
  useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Cairo&units=metric&appid=`
      );
      if (componet) {
        setDataCairo(await response.json());
        console.log(dataCairo);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);

  ////////////////ALEX//////////////////
  useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Alexandria&units=metric&appid=`
      );
      if (componet) {
        setDataAlex(await response.json());
        console.log(dataAlex);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);
   ////////////////PORT//////////////////
   useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Port said&units=`
      );
      if (componet) {
        setDataPort(await response.json());
        console.log(dataPort);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);
   ////////////////ASWAN//////////////////
   useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Aswan&units=metric&appid=`
      );
      if (componet) {
        setDataAswan(await response.json());
        console.log(dataAsWan);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);
   ////////////////DAMIETA//////////////////
   useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Damieta&units=metric&appid=`
      );
      if (componet) {
        setDataDamieta(await response.json());
        console.log(dataDamieta);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);
  ////////////////Ismailia//////////////////
  useEffect(() => {
    const fetchMes = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Ismailia&units=metric&appid=`
      );
      if (componet) {
        setDataIsmailia(await response.json());
        console.log(dataIsmailia);
      }
      return () => {
        componet = false;
      };
    };
    fetchMes();
  }, [search]);
  ////////////////////////////////

  let emojiCairo = null;
  if (typeof dataCairo.main  != "undefined") {
    if (dataCairo.weather[0].main == "Clouds") {
      emojiCairo = cloud;
    } else if (dataCairo.weather[0].main == "Thunderstorm") {
      emojiCairo = storm;
    } else if (dataCairo.weather[0].main == "Drizzle") {
      emojiCairo = drizzle;
    } else if (dataCairo.weather[0].main == "Rain") {
      emojiCairo = rain;
    } else if (dataCairo.weather[0].main == "Snow") {
      emojiCairo = snow;
    }else if (dataCairo.weather[0].main == "Clear") {
      emojiCairo = clear;
    }else if (dataCairo.weather[0].main == "Haze") {
      emojiCairo = cloud ;
    }
    else if (dataCairo.weather[0].main == "Mist") {
      emojiCairo = cloud ;
    }
}
  let emojiALex = null;

  if (typeof dataAlex.main  != "undefined") {
    if (dataAlex.weather[0].main == "Clouds") {
      emojiALex = cloud;
    } else if (dataAlex.weather[0].main == "Thunderstorm") {
      emojiALex = storm;
    } else if (dataAlex.weather[0].main == "Drizzle") {
      emojiALex = drizzle;
    } else if (dataAlex.weather[0].main == "Rain") {
      emojiALex = rain;
    } else if (dataAlex.weather[0].main == "Snow") {
      emojiALex = snow;
    }else if (dataAlex.weather[0].main == "Clear") {
      emojiALex = clear;

    }else if (dataAlex.weather[0].main == "Haze") {
      emojiALex = cloud ;
    }
    else if (dataAlex.weather[0].main == "Mist") {
      emojiALex = cloud ;
    }
  }
  let emojiPort = null;

  if (typeof dataPort.main  != "undefined") {
    if (dataPort.weather[0].main == "Clouds") {
      emojiPort = cloud;
    } else if (dataPort.weather[0].main == "Thunderstorm") {
      emojiPort = storm;
    } else if (dataPort.weather[0].main == "Drizzle") {
      emojiPort = drizzle;
    } else if (dataPort.weather[0].main == "Rain") {
      emojiPort = rain;
    } else if (dataPort.weather[0].main == "Snow") {
      emojiPort = snow;
    }else if (dataPort.weather[0].main == "Clear") {
      emojiPort = clear;

    }else if (dataPort.weather[0].main == "Haze") {
      emojiPort = cloud ;
    }
    else if (dataPort.weather[0].main == "Mist") {
      emojiPort = cloud ;
    }
  }

  let emojiAswan = null;

  if (typeof dataAsWan.main  != "undefined") {
    if (dataAsWan.weather[0].main == "Clouds") {
      emojiAswan = cloud;
    } else if (dataAsWan.weather[0].main == "Thunderstorm") {
      emojiAswan = storm;
    } else if (dataAsWan.weather[0].main == "Drizzle") {
      emojiAswan = drizzle;
    } else if (dataAsWan.weather[0].main == "Rain") {
      emojiAswan = rain;
    } else if (dataAsWan.weather[0].main == "Snow") {
      emojiAswan = snow;
    }else if (dataAsWan.weather[0].main == "Clear") {
      emojiAswan = clear;
    }else if (dataAsWan.weather[0].main == "Haze") {
      emojiAswan = cloud ;
    }
    else if (dataAsWan.weather[0].main == "Mist") {
      emojiAswan = cloud ;
    }
  }
  let emojiDamieta = null;

  if (typeof dataDamieta.main  != "undefined") {
    if (dataDamieta.weather[0].main == "Clouds") {
      emojiDamieta = cloud;
    } else if (dataDamieta.weather[0].main == "Thunderstorm") {
      emojiDamieta = storm;
    } else if (dataDamieta.weather[0].main == "Drizzle") {
      emojiDamieta = drizzle;
    } else if (dataDamieta.weather[0].main == "Rain") {
      emojiDamieta = rain;
    } else if (dataDamieta.weather[0].main == "Snow") {
      emojiDamieta = snow;
    }else if (dataDamieta.weather[0].main == "Clear") {
      emojiDamieta = clear;
    }else if (dataDamieta.weather[0].main == "Haze") {
      emojiDamieta = cloud ;
    }
    else if (dataDamieta.weather[0].main == "Mist") {
      emojiDamieta = cloud ;
    }
  }

  let emojiIsmailia = null;

  if (typeof dataIsmailia.main  != "undefined") {
    if (dataIsmailia.weather[0].main == "Clouds") {
      emojiIsmailia = cloud;
    } else if (dataIsmailia.weather[0].main == "Thunderstorm") {
      emojiIsmailia = storm;
    } else if (dataIsmailia.weather[0].main == "Drizzle") {
      emojiIsmailia = drizzle;
    } else if (dataIsmailia.weather[0].main == "Rain") {
      emojiIsmailia = rain;
    } else if (dataIsmailia.weather[0].main == "Snow") {
      emojiIsmailia = snow;
    }else if (dataIsmailia.weather[0].main == "Clear") {
      emojiIsmailia = clear;

    }else if (dataIsmailia.weather[0].main == "Haze") {
      emojiIsmailia = cloud ;
    }
    else if (dataIsmailia.weather[0].main == "Mist") {
      emojiIsmailia = cloud ;
    }
  }
  const handelSubmit =(event) =>{
    event.preventDefault();
    setSearch(input);
  }
  
//date
let d =new Date();
let date =d.getDate();
let yerar =d.getFullYear();
let month =d.toLocaleString("default",{month:'long'});
let day =d.toLocaleString("default",{weekday:'long'});

//time
let time  =d.toLocaleString([],{
     hour : '2-digit',
     minute: '2-digit'
      
});



useEffect(()=>{
   Aos.init({duration:2000})
},[])
  return (
    <>
      <div className="home d-flex align-items-center position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="titel mt-5 pt-5 text-uppercase">
                <h1>
                  Welcome to <br /> the weather site
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imge-home w-75">
                <img className="w-100 " src={weather} alt="" />
              </div>
            </div>
          </div>
          <svg className=" position-absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(22, 75, 141)" fillOpacity="0.9" d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,234.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>  
        </div>
      </div>
      
      <div className="container mt-5 overflow-hidden">
        <div className="row">
          <div className="titl-head">
            
          <h2 className="text-center pb-2"  data-aos="fade-up"> Some weather in Egypt</h2>
          </div>
        
         {/* START CAIRO */}
         <div className="col-md-4 mt-5 mb-5">
          <div className="item-weather bg-dark text-white p-3"data-aos="fade-up-right">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataCairo.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiCairo} alt="" />
            {dataCairo.main ? <h5>{dataCairo.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataCairo.weather ? <h5>{dataCairo.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataCairo.main ? <p>{dataCairo.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataCairo.main ? <p> {dataCairo.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataCairo.wind ? <p>{dataCairo.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataCairo.main ? <p> {dataCairo.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END CAIRO */}
        {/* START ALEX */}
        <div className="col-md-4 mt-5 mb-5">
          <div className="item-weather bg-dark text-white p-3"data-aos="fade-up">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataAlex.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiALex} alt="" />
            {dataAlex.main ? <h5>{dataAlex.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataAlex.weather ? <h5>{dataAlex.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataAlex.main ? <p>{dataAlex.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataAlex.main ? <p> {dataAlex.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataAlex.wind ? <p>{dataAlex.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataAlex.main ? <p> {dataAlex.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END ALEX */}
        {/* START PORT */}
        <div className="col-md-4 mt-5 mb-5 over">
          <div className="item-weather  bg-dark text-white p-3"data-aos="fade-up-left">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataPort.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiPort} alt="" />
            {dataPort.main ? <h5>{dataPort.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataPort.weather ? <h5>{dataPort.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataPort.main ? <p>{dataPort.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataPort.main ? <p> {dataPort.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataPort.wind ? <p>{dataPort.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataPort.main ? <p> {dataPort.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END PORT */}
        {/* START ASWAN */}
        <div className="col-md-4 mt-5 mb-5">
          <div className="item-weather bg-dark text-white p-3" data-aos="fade-up-right">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataAsWan.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiAswan} alt="" />

            {dataAsWan.main ? <h5>{dataAsWan.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataAsWan.weather ? <h5>{dataAsWan.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataAsWan.main ? <p>{dataAsWan.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataAsWan.main ? <p> {dataAsWan.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataAsWan.wind ? <p>{dataAsWan.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataAsWan.main ? <p> {dataAsWan.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END ASWAN */}
        {/* START DAMIETA */}
          <div className="col-md-4 mt-5 mb-5"data-aos="fade-up">
          <div className="item-weather bg-dark text-white p-3">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataDamieta.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiDamieta} alt="" />

            {dataDamieta.main ? <h5>{dataDamieta.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataDamieta.weather ? <h5>{dataDamieta.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataDamieta.main ? <p>{dataDamieta.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataDamieta.main ? <p> {dataDamieta.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataDamieta.wind ? <p>{dataDamieta.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataDamieta.main ? <p> {dataDamieta.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END DAMIETA */}
        {/* START Ismailia */}
        <div className="col-md-4 mt-5 mb-5">
          <div className="item-weather bg-dark text-white p-3"data-aos="fade-up-left">
          <div className="title-top d-flex align-items-center">
          <img className="imge-jps" src={erth} alt="" />
            <h1 className="ms-2 mt-1">{dataIsmailia.name}</h1>
          </div>
          <hr/>
          <div className="emoji text-center mt-4">
            <img className="gif w-25 mb-2" src={emojiIsmailia} alt="" />

            {dataIsmailia.main ? <h5>{dataIsmailia.main.temp.toFixed(0)}&deg;</h5> : null }
            {dataIsmailia.weather ? <h5>{dataIsmailia.weather[0].description}</h5> : null }
            <p className="card-text">{day} , {month} ,  {date} , {yerar}
           <br/>
          {time}
           .</p>
          </div>
          <hr/>
          <div className="formation">
          <div className="temp d-flex justify-content-between mt-4 ">
          <div className="icon-temp ">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <span className="ps-1">Hight / Low</span>
          </div>
          <div className="title-temp d-flex">
          {dataIsmailia.main ? <p>{dataIsmailia.main.temp_min.toFixed(1)}&deg;</p>  : null }  /
          {dataIsmailia.main ? <p> {dataIsmailia.main.temp_max.toFixed(1)}&deg;</p> : null }
          </div>
          </div>
          <div className="wind d-flex justify-content-between mt-3">
           <div className="icon-wind">
           <i className="fa-solid fa-wind"></i>
          <span className="ps-1">Wind</span>
           </div>
          {dataIsmailia.wind ? <p>{dataIsmailia.wind.speed.toFixed(1)} Km/h</p>  : null }
          </div>
          <div className="humidity d-flex justify-content-between mt-3">
          <div className="icon-hum">
          <i className="position-relative fa-solid fa-droplet"><span className="humi-icon position-absolute">%</span></i>
          <span className="ps-1">Humidity</span>
          </div>
          {dataIsmailia.main ? <p> {dataIsmailia.main.humidity.toFixed()} % </p> : null }
          </div>
          </div>
          </div>
        </div>
        {/* END Ismailia */}
        </div>
      </div>
      <Footer/>
    </>
  );
}
