import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'WebPixel';
    const routes = {
      '/': 'Home | Modern Web Agency',
      '/about': 'About Us | Our Story & Vision',
      '/services': 'Services | Web Design & Development',
      '/portfolio': 'Work | Our Latest Projects',
      '/pricing': 'Pricing | Transparent Web Solutions',
      '/contact': 'Contact | Let\'s Build Your Dream Site',
    };

    const title = routes[location.pathname] || 'Modern Web Agency';
    document.title = `${baseTitle} | ${title}`;

    // Update meta description dynamically if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        '/': 'WebPixel creates modern, fast, and conversion-focused websites for startups and established brands.',
        '/about': 'Learn about WebPixel, our mission to build digital experiences that inspire and perform.',
        '/services': 'Explore our wide range of services including Custom Web Design, Development, and UI/UX.',
        '/portfolio': 'See how WebPixel has helped businesses achieve next-level results with our web projects.',
        '/pricing': 'Check out our transparent and affordable pricing plans for every business size.',
        '/contact': 'Contact WebPixel today to start your digital transformation journey.',
      };
      metaDescription.setAttribute('content', descriptions[location.pathname] || 'Modern Web Design & Development Agency.');
    }
  }, [location]);

  return null;
};

export default PageTitle;
