import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { supabase } from "../Supabase";
import "./Services.css";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [Heros, setHeros] = useState([]);

  
  useEffect(() => {
    async function getAllServicesAPI() {
      const { data, error } = await supabase.from("Services").select("*");
      const HerosRes = await supabase.from("Heros").select("*");

      if (error) {
        console.error("Supabase error:", error);
        setServices([]);
      } else {
        setServices(data || []);
      }

      setHeros(HerosRes.data);

      setLoading(false);
    }

    getAllServicesAPI();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Nav />

      <section>

        <div className="hero">

            {
                Heros.map((Heros)=>{
                    return<>
                    
                    <img className="hero" src={Heros.services} alt='' />
                    
                    </>
                })
            }



        </div>

        <section class="services-section" id="services">
        <div class="services-container">
            <div class="service-card web-design">
                <span>WEB-DESIGN</span>
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </div>

            <div class="service-card graphic-design">
                <span>GRAPHIC DESIGN</span>
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </div>

            <div class="service-card app-design">
                <span>APP-DESIGN</span>
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </div>

            <div class="service-card photography">
                <span>PHOTOGRAPHY</span>
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </div>

            <div class="service-card content-creation">
                <span>CONTENT CREATION</span>
                <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </div>
        </div>
    </section>

   
      </section>
    </>
  );
};

export default Services;
