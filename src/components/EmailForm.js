import React , {useEffect} from 'react'
import './EmailForm.css'
import But from './Button.js'
import { Input } from '@material-ui/core';
import Aos  from 'aos'
import 'aos/dist/aos.css'

function EmailForm() {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div className="EmailForm">
            <h1>Get in touch</h1>
            <hr/>

            <div data-aos="zoom-out" data-aos-duration="2000" className="email">
                <div className="input1">
                    <Input fullWidth={true} placeholder="Email" type="email"/>
                </div>
                <div className="name">
                    <Input placeholder="First Name" label="First Name" type="name"/>
                    <Input placeholder="Last Name" label="First Name" type="name"/>
                </div>
                <div className="input2">
                    <Input fullWidth={true} placeholder="Comments" type="text"/>
                </div>
                    <But text ="Submit"></But>
            </div>
        </div>    
    )
}

export default EmailForm
