import './App.css'
import React from 'react';

const Contact=()=>{
    return(
        <div>
            <div>
                <div>
                    <div className="ac">
                        <h1>Contact Details</h1><hr/>
                        <ul>
                            <li><a href="mailto:example@email.com">example@email.com</a></li>
                            <li>(+1) 123-456-7890</li>
                        </ul>
                    </div>
                    <div className='ac'>
                        <h1>Social Media Links</h1><hr/>
                        <ul>
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://twitter.com/">Twitter</a></li>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className='ac'>
                        <h1>FAQ</h1><hr/>
                        <ol type="A">
                            <li>What is your business name?</li><li>Where are you located?</li>
                            <li>How can I contact you?</li><li>Can I visit your store in person?</li>
                            <li>Do you have a return policy?</li><li>Are there any discounts available?</li>
                            <li>Is my data secure when shopping with you?</li>
                            </ol>
                    </div>
                    <div className='ac'>
                        <h1>Privacy Policy</h1><hr/>
                        <p>This privacy statement applies to the website of our company and governs data collection and usage. By using our site, you</p>
                            <p>Your privacy is important to us.</p>
                            <p>We do not collect personal information from our website visitors unless they voluntarily provide it to us.</p>
                            <p>We do not collect personal information from our customers unless required by law or as part of a legitimate request for customer service.</p>
                    </div>
                    <div className='ac'>
                        <h1>Address</h1><hr/>
                        <p>234567890, ABCD Street, City, State 12345</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;