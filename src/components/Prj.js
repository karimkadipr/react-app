import React , {useEffect} from 'react'
import But from './Button'
import './Prj.css'
import { makeStyles } from '@material-ui/core/styles';
import Aos  from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as Ecommerce } from './undraw_add_to_cart_vkjp.svg';

const styles = {
    width:'100%',
    marginTop:'auto',
    height:'100%'
}
const useStyles = makeStyles({
    root: {
        marginLeft:0 ,
        'background-image': 'linear-gradient(150deg,#c99fff -20%,#4a4eff)',
    },
    
  });
function Prj({dataAos ,ButtonUrl ,imgURL ,TextField , classname}) {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({});
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
                    <But className={classes.root} text="See Project" url={ButtonUrl}/>
                </div>
            </div>
            <div className="Image">
                {imgURL === 'ecommerce'  &&
                <Ecommerce style={styles}/>
                }
            </div>
        </div>
    )
}

export default Prj
