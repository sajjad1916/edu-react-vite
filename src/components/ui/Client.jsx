import React from 'react'
import client1 from '../../assets/images/clients/client1.svg'
import client2 from '../../assets/images/clients/client2.svg'
import client3 from '../../assets/images/clients/client3.svg'
import client4 from '../../assets/images/clients/client4.svg'
import client5 from '../../assets/images/clients/client5.svg'


function Client() {
  return (
    <div class="client-logo-section">
        <div class="container">
            <div class="client-logo-wrapper">
                <div class="client-logo-carousel d-flex align-items-center justify-content-between">
                    <div class="client-logo">
                        <img src={client1} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client2} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client3} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client5} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client4} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client1} alt="" />
                    </div>
                    <div class="client-logo">
                        <img src={client1} alt="" />
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client
