import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
      <div className='footer-body'>
        <footer className="Footer">
  {/* <!-- Start the navigation section --> */}
  <div className="FooterNavigation">
    <nav className="FooterNavigationSection">
      <h2 className='h2'>About</h2>
      <ul className='ul'>
        <li><Link className='a' to="/aboutUs">About Us</Link></li>
        <li><Link className='a' to="*">HelmatesBD Blog</Link></li>
        <li><Link className='a' to="*">Press</Link></li>
        <li><Link className='a' to="*">Jobs</Link></li>
        <li><Link className='a' to="*">Reviews</Link></li>
        <li><Link className='a' to="/contactUs">Contact us</Link></li>
      </ul>
    </nav>
    <nav className="FooterNavigationSection">
      <h2 className='h2'>Support</h2>
      <ul className='ul'>
        <li><Link className='a' to="#">Help Centre</Link></li>
        <li><Link className='a' to="#">Accident Cover</Link></li>
      </ul>
    </nav>
    <nav className="FooterNavigationSection">
      <h2 className='h2'>Our Brands</h2>
      <ul className='ul'>
        <li><Link className='a' to="*">Dinner Bowl</Link></li>
        <li><Link className='a' to="*">Waggly</Link></li>
        <li><Link className='a' to="*">HelmatesBD Insurance</Link></li>
      </ul>
    </nav>
    <nav className="FooterNavigationSection">
      <h2 className='h2'>Our Partners</h2>
      <ul className='ul'>
        <li><Link className='a' to="#"><img src="https://assets.codepen.io/167732/Qantas_logo.svg" alt="Qantas" width="101" height="20" loading="lazy"/></Link></li>
        <li><Link className='a' to="#"><img src="https://assets.codepen.io/167732/TheSharingHub_logo.svg" alt="Sharing Hub" width="76" height="40" loading="lazy"/></Link></li>
      </ul>
    </nav>
    <nav className="FooterNavigationSection">
      <h2 className='h2'>Our App</h2>
      <ul className='ul'>
        <li><Link className='a' to="#"><img src="https://assets.codepen.io/167732/App_Store_badge.svg" alt="Qantas" width="120" height="40" loading="lazy"/></Link></li>
        <li><Link className='a' to="#"><img src="https://assets.codepen.io/167732/Google_Play_badge.svg" alt="Sharing Hub" width="120" height="40" loading="lazy"/></Link></li>
      </ul>
    </nav>
  </div>
  {/* <!-- End the navigation section --> */}

  {/* <!-- Start the copyright and sub-links section --> */}
  <div className="FooterCopyrightAndSubLinks">
    <div className="socialLinks">
      <Link className='a' to="#">
        <span className="visuallyHidden">HelmatesBD Facebook page</span>
        <svg className='svg' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 9.04889C17 4.60361 13.4183 1 9 1C4.58172 1 1 4.60361 1 9.04889C1 13.0663 3.92547 16.3962 7.75 17V11.3755H5.71875V9.04889H7.75V7.27562C7.75 5.25837 8.94438 4.1441 10.7717 4.1441C11.6467 4.1441 12.5625 4.3013 12.5625 4.3013V6.28208H11.5538C10.56 6.28208 10.25 6.90257 10.25 7.53972V9.04889H12.4688L12.1141 11.3755H10.25V17C14.0745 16.3962 17 13.0663 17 9.04889Z" fill="black" />
        </svg></Link>
      <Link className='a' to="#">
        <span className="visuallyHidden">HelmatesBD Instagram page</span>
        <svg className='svg' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2.44257C11.1362 2.44257 11.389 2.45082 12.2328 2.48924C13.0127 2.52481 13.4363 2.655 13.7183 2.76455C14.0662 2.89264 14.3809 3.09718 14.6393 3.3631C14.9052 3.62139 15.1098 3.93608 15.2379 4.28396C15.3474 4.56593 15.4776 4.98952 15.5132 5.76939C15.5516 6.61308 15.5599 6.86584 15.5599 9.00191C15.5599 11.138 15.5516 11.3907 15.5132 12.2344C15.4776 13.0143 15.3474 13.4379 15.2379 13.7199C15.1046 14.0648 14.9007 14.378 14.6393 14.6394C14.3778 14.9009 14.0645 15.1048 13.7196 15.238C13.4376 15.3475 13.014 15.4777 12.234 15.5133C11.3906 15.5517 11.1375 15.56 9.00127 15.56C6.86504 15.56 6.61194 15.5517 5.7685 15.5133C4.98857 15.4777 4.56494 15.3475 4.28295 15.238C3.93504 15.1099 3.62033 14.9054 3.36202 14.6394C3.09608 14.3811 2.89152 14.0665 2.76342 13.7186C2.65386 13.4366 2.52366 13.013 2.48809 12.2332C2.44967 11.3895 2.44141 11.1367 2.44141 9.00064C2.44141 6.86457 2.44967 6.61181 2.48809 5.76812C2.52366 4.98825 2.65386 4.56466 2.76342 4.28269C2.89152 3.93481 3.09608 3.62012 3.36202 3.36183C3.62033 3.09591 3.93504 2.89137 4.28295 2.76328C4.56494 2.65373 4.98857 2.52354 5.7685 2.48797C6.61226 2.44955 6.86504 2.4413 9.00127 2.4413L9 2.44257ZM9.00127 1C6.82852 1 6.55605 1.00921 5.70276 1.04827C4.84948 1.08732 4.26866 1.22355 3.75961 1.42137C3.22584 1.6222 2.74229 1.93699 2.34265 2.34381C1.93637 2.74358 1.6221 3.22708 1.42172 3.76066C1.22229 4.26967 1.08701 4.85108 1.04827 5.70239C1.00953 6.5537 1 6.82805 1 9.00064C1 11.1732 1.00921 11.4457 1.04827 12.2989C1.08733 13.1521 1.22229 13.7316 1.42013 14.2406C1.62098 14.7743 1.93579 15.2578 2.34265 15.6575C2.74236 16.0643 3.22589 16.3792 3.75961 16.5802C4.2677 16.7777 4.85011 16.913 5.70149 16.9521C6.55287 16.9911 6.82725 17 9 17C11.1728 17 11.4452 16.9908 12.2985 16.9521C13.1518 16.9133 13.7313 16.7777 14.2404 16.5802C14.7718 16.3746 15.2544 16.0603 15.6574 15.6575C16.0603 15.2546 16.3746 14.772 16.5802 14.2406C16.7777 13.7326 16.913 13.1502 16.952 12.2989C16.9911 11.4476 17 11.1732 17 9.00064C17 6.82805 16.9908 6.55561 16.952 5.70239C16.9133 4.84917 16.7777 4.26967 16.5802 3.76066C16.3791 3.22698 16.0642 2.74349 15.6574 2.34381C15.2576 1.93756 14.774 1.62332 14.2404 1.42296C13.7313 1.22355 13.1499 1.08827 12.2985 1.04954C11.4471 1.0108 11.1728 1.00127 9 1.00127L9.00127 1Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.1277 8.99556C13.1277 11.2666 11.2865 13.1076 9.01524 13.1076C6.74402 13.1076 4.90282 11.2666 4.90282 8.99556C4.90282 6.72451 6.74402 4.88347 9.01524 4.88347C11.2865 4.88347 13.1277 6.72451 13.1277 8.99556ZM11.6828 8.99556C11.6828 10.4687 10.4885 11.6629 9.01524 11.6629C7.54201 11.6629 6.34773 10.4687 6.34773 8.99556C6.34773 7.52245 7.54201 6.32825 9.01524 6.32825C10.4885 6.32825 11.6828 7.52245 11.6828 8.99556Z" fill="black" />
          <path d="M14.2455 4.72311C14.2455 5.2536 13.8154 5.68365 13.2849 5.68365C12.7543 5.68365 12.3242 5.2536 12.3242 4.72311C12.3242 4.19261 12.7543 3.76256 13.2849 3.76256C13.8154 3.76256 14.2455 4.19261 14.2455 4.72311Z" fill="black" />
        </svg>
      </Link>
    </div>
    <div className="copyright">
      <p><small>Copyright ©2021 HelmatesBD</small></p>
      <Link className='a' to="#">Privacy Policy</Link>
      <Link className='a' to="#">Terms of Service</Link>
    </div>
  </div>
  {/* <!-- End the copyright and sub-links section --> */}

</footer>
      </div>
    );
};

export default Footer;