import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll'
import './Consensys.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import animationData from './Assets/Animation.json';
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { hideloader } from "./Cons";




function Consensys() {

  useEffect(() => {
    hideloader(); 
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our team will perform a full audit on your smart contract to ensure all security measures have been carried out efficiently and effectively before launch. ",
      title: "AUDITING"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN1bHRvcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "We offer consulting on every stage of your project, from the beginning, all the way to the mint, even providing post mint support for clients.",
      title: "CONSULTING"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "If you're starting a project, finding developers you can trust and have a proven track record can be very difficult. Our team has worked extremely hard since we opened our doors",
      title: 'CONTRACT BUILD'
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "You'll be pleased to know that we offer website design and development to help kickstart your project with a site that you and your community.",
      title: "WEBSITE BUILD"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "If for any reason we do find a high risk issue in the contract close to your launch, we can assess the situation and offer a full rebuild in a timely manner. ",
      title: "EMERGENCY REBUILD"
    }

  ]
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  console.log(services[0].title)

  return (

    <div id="page1">

      <div id="loader">
        <h1 className="gradientt">TRANSFORM</h1>
        <h1 className="gradientt">NFT</h1>
        <h1 className="gradientt">ADVENTURES</h1>
      </div>

      {hoveredCard !== null && (
  <div id="fixed-img">
    <img src={services[hoveredCard].imageSrc} alt="Service" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: "10px", height: "250px", width: '100%' }} />
    
    <p className="description" style={{ marginTop: '5px', margin: "10px" }}>{services[hoveredCard].description}</p>
  </div>
)}


      <Navbar bg="" expand="lg" variant="dark" className="navbar" id="home"> 
        <Container>
          <Navbar.Brand href="home">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9Uvq6LdcXJ7sFLWoYXdw75DOHeOazZwvuPQ_0NNRWNsuO70usUYT_KNPDzSw69WLUfI&usqp=CAU" alt="" style={{ height: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              
              <Link to="home" spy={true} smooth={true} offset={50} duration={500} href="home" className="neonn" >HOME</Link>
              <Link to="services" spy={true} smooth={true} offset={50} duration={500}  href="services" className="neonn">SERVICES</Link>
              <Link to="clients" spy={true} smooth={true} offset={50} duration={500}  href="clients" className="neonn">CLIENTS</Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  href="contact" className="neonn">CONTACT</Link>
            </Nav>
            <Button variant="outline-light" className="me-3 btn1"  style={{ borderRadius: "100px" }}>Join Us</Button>
            <Button variant="outline-light" className="btn1" style={{ borderRadius: "100px" }}>Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="borderr">
        <div className="" id="flexx">

          <div>
            <h1 id="h1">WE HELP <span className="neon-green">NFT</span></h1>
          </div>

          <div className="lottie" style={{ width: "90%", height: "25vh", marginTop: "-30%", marginLeft: '55%', float: "right" }}>
            <Lottie animationData={animationData} />
          </div>
        </div>
        <h1 id="header">PROJECTS LAUNCH.</h1>

        <div id="para" className="text-center" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
          <p>Our mission is to help ensure the <span className="white">integrity</span> of the nft space continues to thrive by providing clients with a <span className="white">full suite of services </span> to assist them with the launch of their projects.</p>
        </div>

      </div>
      <div id="services"></div>
      <div >
        <h1 id="header2">OUR <span id="pink">SERVICES</span></h1>
      </div>

      <div>
        <div id="elem-container">

          {services.map((service, index) => (
            <div key={index} className="elem" onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div className="overlay"></div>
              <h1>{service.title}</h1>


            </div>
          ))}


        </div>


        <div className="thin-border-box" >
          <h2 style={{ color: "white", marginTop: "25px", fontFamily: " Neuehaasdisplay Roman, sans-serif" }}> <span className="neon-green">/</span> ARE YOU READY TO SCALE YOUR <span className="neon-green">NFT</span> PROJECT?</h2>

          <div style={{ width: "50%", marginLeft: '25%', marginTop: "-6%" }}>
            <Lottie animationData={animationData} />
          </div>

          <div>
            <button class="neon-button">

              <span>GET STARTED
              <img src="https://www.freeiconspng.com/uploads/right-arrow-icon-27.png" style={{height:"50px"}} alt="" />
              </span>

            </button>

          </div>
        </div>

      </div>


       <div id="clients"></div>
      <div id="page2" >
        <div>
          <h1 id="header3" >OUR <span id="pink">CLIENTS</span></h1>
        </div>

        <Swiper

          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}

        >
          <SwiperSlide><img src="https://i.seadn.io/s/raw/files/c21271f6b54ce55877a5cffdd437b4b3.jpg?auto=format&dpr=1&w=3840" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://media1.tenor.com/m/0sZV4Gi6Nu0AAAAd/founder-pass.gif" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://openseauserdata.com/files/ec9cf586e441fb0934cdde18a2d5002e.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/63482693199ee247428cca9f_PW_BANNER%201-p-1600.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/6380d40598ee1229240be43c_bg-img-p-1600.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://pbs.twimg.com/media/Fyg1e3FX0AIrslg?format=jpg&name=medium" alt="" /></SwiperSlide>

        </Swiper>

      </div>


      <div id="page3">
        <h1 id="header3">MEET THE<span id="pink"> TEAM</span></h1>

        <div className="elem1"><div class="circle-image"><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/63e038e96af00b17415e1b9a_Bored_Ape_Yacht_Club_BoredApeYachtClub_5458.png" alt="" class="circle-image" /></div><p><span className="neon-green">/ </span>MR_HMMM</p> <h5><span className="neon-green">/ </span>CEO & FOUNDER</h5></div>

        <div className="elem1"><div class="circle-image"><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/62594ce518a5ce541167278b_ziggy-pp%20(1).jpg" alt="" class="circle-image" /></div><p><span className="neon-green">/ </span>ZIGGY</p><h5><span className="neon-green">/ </span>DEV & PARTNER</h5></div>
        <div className="elem1"> <div class="circle-image"><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/62594ce7007f387cf5e68bac_zooper-dooper-pp%20(1).jpg" alt="" class="circle-image" /></div><p><span className="neon-green">/ </span>ZOOPERDOOPER</p> <h5><span className="neon-green">/ </span>DEV & PARTNER</h5></div>
        <div className="elem1"> <div class="circle-image"><img src="https://assets-global.website-files.com/625416e0a64e0c6895f79107/6532733bcaf2102b4a31748b_Start.png" alt="" class="circle-image" /></div><p><span className="neon-green">/ </span>CRISTHIAN</p> <h5><span className="neon-green">/ </span>DEV & PARTNER</h5></div>
      </div>
        <div id="contact"></div>
      <div id="page4"  className="thin-border-box2">
        <h1 id="header3" style={{ marginTop: "4%" }}>GET STARTED</h1>
          
        <Form>
          <div className="elem2" >
            <Form.Label ><span className="neon-green">01.</span> NAME</Form.Label>
            <input type="text" placeholder="Your name..." style={{backgroundColor: 'black',border: 'none',marginLeft:"35.5%",color: 'white',}} />

          </div>

          <div className="elem2">
            <Form.Label><span className="neon-green">02.</span> PROJECT NAME</Form.Label>
            <input type="text" placeholder="Your project name..." style={{backgroundColor: 'black',border: 'none',marginLeft:"28%",color: 'white',}} />

          </div>
         

          <div className="elem2">
            <Form.Label><span className="neon-green">03.</span> TWITTER</Form.Label>
            <input type="text" placeholder="Your twitter..." style={{backgroundColor: 'black',border: 'none',marginLeft:"33%",color: 'white',}} />

          </div>
        
          <div className="elem2">
            <Form.Label> <span className="neon-green">04.</span> EMAIL</Form.Label>
            <input type="text" placeholder="Your email-address..." style={{backgroundColor: 'black',border: 'none',marginLeft:"35%",color: 'white',}} />

          </div>

          <div className="elem2">
            <Form.Label><span className="neon-green">05.</span> MESSAGE</Form.Label>
            <input type="text" placeholder="Your message..." style={{backgroundColor: 'black',border: 'none',marginLeft:"32.5%",color: 'white',}} />

          </div>
          <div className="elem2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button class="neon-button2" >

<span>SEND ENQUIRY
<img src="https://www.freeiconspng.com/uploads/right-arrow-icon-27.png" style={{height:"50px"}} alt="" />

</span>
</button>
          </div>

        </Form>



      </div>
      <div id="page5">
       <div className="elem3">

        <p>NFTX</p>
       </div>
      
       <div className="elem5"> <p><span className="neon-green">/ </span>  © NFTX 2023</p> <p className="rightt"> <span className="neon-green">/ </span> SITE BY KADEJASHERIN</p></div>

      </div>
      
      <div className="elem4">
      </div>







    </div>
  );
}

export default Consensys;
