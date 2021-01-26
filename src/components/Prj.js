import React , {useEffect} from 'react'
import But from './Button'
import './Prj.css'
import { makeStyles } from '@material-ui/core/styles';
import Aos  from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as Ecommerce } from './undraw_add_to_cart_vkjp.svg';
import { ReactComponent as Messaging } from './undraw_online_messaging_9ro6.svg';
import { ReactComponent as SocialMedia } from './undraw_Social_media_re_w12q.svg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    purple: {
        'background-image': 'linear-gradient(150deg,#c99fff -20%,#4a4eff)',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding': '25px 10px 25px 10px',
        'margin': 'auto',
        width : 150,
        height:50,
    },
    blue: {
        'background': 'linear-gradient(to right, #314755, #26a0da)',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding': '25px 10px 25px 10px',
        'margin': 'auto',
        width : 150,
        height:50,
    },
    brown: {
        'background': 'linear-gradient(to right, #603813, #b29f94)',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'padding': '25px 10px 25px 10px',
        'margin': 'auto',
        width : 150,
        height:50,
    },
  });
let styles = {}
  if (window.innerWidth >920 )  {
     styles = {
        width:'80%',
        margin:'10%',
        height:'80%',
    } 
    }else {
        styles = {
            width:'60%',
            height:'60%',
            marginLeft: '20%', 
            marginTop: 30,
            marginBottom :30,
    }
}

function Prj({dataAos ,ButtonUrl ,imgURL ,TextField , classname , backColor}) {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({offset: 200});
    }, [])
    return (
        <div data-aos-once="true"
            data-aos={dataAos} 
            data-aos-duration="2000" 
            className={classname}>
            <div className="textContent">
                <div className="inside">
                    <h1>{TextField}</h1>
                    <p className="paragrapgh"></p>
                    {imgURL === 'ecommerce'  &&
                      <Button className={classes.purple} href={ButtonUrl} variant="contained"> See Project</Button>
                    }
                    {imgURL === 'messaging'  &&
                      <Button className={classes.blue} href={ButtonUrl} variant="contained"> See Project</Button>
                    }
                    {imgURL === 'social'  &&
                      <Button className={classes.brown} href={ButtonUrl} variant="contained"> See Project</Button>
                    }
                </div>
            </div>
            <div className={backColor}  >
                {imgURL === 'ecommerce'  &&
                <Ecommerce style={styles}/>
                }
                {imgURL === 'messaging'  &&
                <Messaging style={styles}/>
                }
                {imgURL === 'social'  &&
                <SocialMedia style={styles}/>
                }


            </div>
        </div>
    )
}

export default Prj
