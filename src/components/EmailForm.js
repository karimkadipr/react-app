import React , {useEffect} from 'react'
import './EmailForm.css'
import But from './Button.js'
import { Input } from '@material-ui/core';
import Aos  from 'aos'
import 'aos/dist/aos.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
      height:20,
    },
    input1: {
        width:'40%',
        paddingTop :'15px',
        paddingBottom :'15px',
    },
    input2: {
        width:'87%',
        marginLeft: '6.66%',
        paddingTop :'15px',
        paddingBottom :'15px',
    },
  });

function EmailForm() {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div id="contact" className="EmailForm">
            <h1>Get in touch</h1>
            <hr/>

            <div data-aos-once="true" data-aos="zoom-out" data-aos-duration="2000" className="email">
                <div className="name">
                    <Input className={classes.input1}placeholder="First Name" label="First Name" type="name" />
                    <Input className={classes.input1} placeholder="Last Name" label="First Name" type="name" />
                </div>
                <div className="input2">
                    <Input className={classes.input2} placeholder="Comments" type="text"/>
                </div>
                    <But text ="Submit"></But>
            </div>
        </div>    
    )
}

export default EmailForm
