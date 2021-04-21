import './Footer.css';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="footer-distributed">

			<div className="footer-left">
          
				<h3><span>Le Bantou</span></h3>		
               
				<p className="footer-company-name">© 2021 Sam Mbende || Le Bantou Restaurant Ltd.</p>
                
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					  <p><span>250 - Rue des Poissonières</span>
						75018, Paris 18eme</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+33 (0) 61-74-89-170</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:mbende2000@yahoo.com">support@lebantou.fr</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>Bienvenue Chez Le Bantou </span>
					Commandez vos plats sur Le Bantou Resto et faites vous livrer dès 30 minutes 7/7j. Livraison dès 30 Minutes</p>
				<div className="footer-icons">
                
				
                    <a href='https://www.facebook.com/sam.mbende' 
                    target='_blank' 
                    aria-label='Facebook'
                    rel='noopener noreferrer'
                    >
                    <FaFacebook />    
                    </a>
                    <a href='https://twitter.com/SamMbende2' 
                    target='_blank' 
                    aria-label='Twitter'
                    rel='noopener noreferrer'
                    >
                    <FaTwitter />    
                    </a>
                    <a href='https://www.youtube.com/' 
                    target='_blank' 
                    aria-label='Youtube'
                    rel='noopener noreferrer'
                    >
                    <FaYoutube />    
                    </a>
                    <a href='https://www.instagram.com/sammbende/' 
                    target='_blank' 
                    aria-label='Instagram'
                    rel='noopener noreferrer'
                    >
                    <FaInstagram />    
                    </a>
                    
				
                </div>
			</div>
		</div>
    )
}

export default Footer;
