import '../styles/Home.css';
import NavBar from '../components/NavBar';
import Service from '../components/Service';
import MainBtn from '../components/MainBtn';
import Count from '../components/Count';
import WorkSteps from '../components/WorkSteps';
import ReviewSlider from '../components/ReviewSlider';
import { Link } from 'react-router-dom';
import { BiLogoWhatsapp } from 'react-icons/bi';
import fotterImg from '../assets/footer_img.jpg';
import HorizontalScroll from '../components/HorizontalScroll';
import SlideItems from '../components/SlideItems';
import familyImage from '../assets/hero_img.jpg';
const Home = () => {
  return (
    <>
      {/* navbar */}
      <NavBar />
      {/* header */}
      <header>
        <div className="text_header">
          {/* left text content of header */}
          <div className="content_text">
            <div>
              <h1>Get the Best Therpy for your child</h1>
              <h4>with Butterfly Learnings</h4>
            </div>
            <div>
              <p className="bold_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quos, amet excepturi illum natus rerum officiis in
              </p>
            </div>
            <div>
              <Service icon="user" text="programs" span="personalized" />
              <Service icon="net" text="therapists" span="dedicated" />
              <Service icon="mob" text="programs" span="on demand Resources" />
            </div>
            <div>
              <MainBtn text="book now for £800" />
            </div>
            <div className="counts">
              <Count num="200" before="therapist" after="on board" />
              <Count num="25" before="centers" after="around india" />
              <Count num="200" before="happy" after="families" />
            </div>
          </div>
        </div>
        {/* right image content of header */}
        <div className="image_header">
          <div className="content_image">
            <img src={familyImage} alt="" className="content_image_img" />
          </div>
        </div>
      </header>

      {/* section 1 */}
      <section className="section_work">
        <h2>How it Works</h2>
        <p className="bold_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nesciunt pariatur, vel cum impedit minima quisquam sint.
        </p>
        <MainBtn text="book now for £800" />

        <div className="work_steps">
          <WorkSteps
            icon="payment"
            heading="Initiating a payment"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Booking an appointment"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Specialist assesses your child"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Understanding the problem"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Suggesting Extra Screenings"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Suggestion Suitable Therapy "
            extra="( if needed )"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
          <WorkSteps
            icon="payment"
            heading="Starting Offline or Online Therapy"
            para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        minima quos eos"
          />
        </div>
      </section>
      {/* section2 */}
      <section>
        <h2>Empowering your child with expert minds in behavioral health</h2>
        <div className="horizonal_scroll_container">
          <HorizontalScroll>
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
            <SlideItems />
          </HorizontalScroll>
        </div>
        <div>
          <MainBtn text="book assessment for £800" w="250" />
        </div>
      </section>

      {/* section 3 reviews */}
      <section className="review_section">
        <ReviewSlider />
      </section>
      {/* footer */}
      <footer>
        <div className="footer_links_container">
          <div className="footer_links_logo">
            <div className="footer_logo">Logo</div>
          </div>
          <div className="footer_links_content">
            <div className="link_set">
              <h5>explore</h5>
              <Link to="/" className="link link_set_link">
                Features
              </Link>
              <Link to="/" className="link link_set_link">
                How it works
              </Link>
              <Link to="/" className="link link_set_link">
                Centers
              </Link>
              <Link to="/" className="link link_set_link">
                Blog
              </Link>
            </div>
            <div className="link_set">
              <h5>Company</h5>
              <Link to="/" className="link link_set_link">
                About
              </Link>
              <Link to="/" className="link link_set_link">
                Careers
              </Link>
              <Link to="/" className="link link_set_link">
                Terms & Services
              </Link>
              <Link to="/" className="link link_set_link">
                Privacy Policy
              </Link>
            </div>
            <div className="link_set">
              <h5>Community</h5>
              <Link to="/" className="link link_set_link">
                Twitter
              </Link>
              <Link to="/" className="link link_set_link">
                LinkedIn
              </Link>
              <Link to="/" className="link link_set_link">
                Instagram
              </Link>
              <Link to="/" className="link link_set_link">
                Facebook
              </Link>
            </div>
            <div className="link_set">
              <h5>Contact Us</h5>
              <p>Butterflylearnings@gmail.com</p>
              <address>
                <h6>Butterfly Learnings , Thane (west)</h6>
                <p>Lorem ipsum dolor sit amet </p>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
                <p className="number">+91 8978897867</p>
              </address>
            </div>
          </div>
        </div>
        <div className="footer_whatsapp_link">
          <img src={fotterImg} alt="" />
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ullam delectus hic aperiam vitae omnis quasi voluptate iste
          </p>
        </div>
        <BiLogoWhatsapp className="whatspp_icon" />
      </footer>
    </>
  );
};

export default Home;
