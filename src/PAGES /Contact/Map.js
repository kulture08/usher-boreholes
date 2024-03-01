import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section``;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;

  .map-iframe {
    width: 100%;
    height: 420px;
    border: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    .map-iframe {
      width: 100%;
      height: 23vh;
    }
  }

  @media (max-width: 768px) {
    .map-iframe {
      height: 30vh;
    }
  }

  @media (max-width: 600px) {
    .map-iframe {
      height: 25vh;
    }
  }
`;

function Map() {
  return (
    <Wrapper>
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29954.916500608964!2d28.508298144683174!3d-20.202166374102433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb55182778503dd%3A0x84b0983313e8ca2a!2sNketa%207%20Park%2C%20Bulawayo!5e0!3m2!1sen!2szw!4v1709290677869!5m2!1sen!2szw"
          // width="1400"
          height="450"
          style={{ border: 'none', width:'100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapWrapper>
    </Wrapper>
  )
}

export default Map