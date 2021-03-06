import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';



function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Pedro Paulo
            <div className="footer-icons" >

                <a href="https://www.youtube.com/c/DevSuperior" target="new">
                    <YouTubeIcon />
                </a>

                <a href="https://www.linkedin.com/in/pedro-silva-36ab44127/" target="new">
                    <LinkedinIcon />
                </a>

                <a href="https://www.instagram.com/pedrors99999/" target="new">
                    <InstagramIcon />
                </a>




            </div>
        </footer>

    )
}

export default Footer;