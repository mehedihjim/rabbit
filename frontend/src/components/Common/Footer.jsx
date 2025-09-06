import { Link } from "react-router";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { useSubscribeUserMutation } from "../../api/subscribeApi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [subscribeUser] = useSubscribeUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      return;
    }

    setIsSubmitting(true);

    try {
      await subscribeUser(email).unwrap(); // ✅ call backend
      setIsSubscribed(true);
      setEmail("");

      // reset after 3s
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (err) {
      alert(err.data?.message || "Subscription failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-gray-200 pt-12" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter grid */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first one to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off your first order
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-rabbit-red/50 border border-rabbit-red rounded-md">
              <p className="text-white text-sm">✓ Thank you for subscribing!</p>
            </div>
          ) : (
            <form className="flex" onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                required
                aria-describedby="newsletter-description"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email || !email.includes("@")}
                className="cursor-pointer bg-rabbit-red text-white px-6 py-3 text-sm rounded-r-md hover:bg-rabbit-red/90 focus:bg-rabbit-red/90 focus:outline-none focus:ring-2 focus:ring-rabbit-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          <p id="newsletter-description" className="sr-only">
            Enter your email to subscribe to our newsletter and get 10% off your
            first order
          </p>
        </div>

        {/* Shop grid */}
        <nav aria-label="Shop categories">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/men/tops"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
                aria-label="Shop men's top wear collection"
              >
                {`Men's top wear`}
              </Link>
            </li>
            <li>
              <Link
                to="/women/tops"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
                aria-label="Shop women's top wear collection"
              >
                {`Women's top wear`}
              </Link>
            </li>
            <li>
              <Link
                to="/men/bottoms"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
                aria-label="Shop men's bottom wear collection"
              >
                {`Men's bottom wear`}
              </Link>
            </li>
            <li>
              <Link
                to="/women/bottoms"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
                aria-label="Shop women's bottom wear collection"
              >
                {`Women's bottom wear`}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Support grid */}
        <nav aria-label="Support links">
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none transition-colors"
              >
                Features
              </Link>
            </li>
          </ul>
        </nav>

        {/* Follow up grid */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded transition-colors"
              aria-label="Follow us on Facebook (opens in new window)"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded transition-colors"
              aria-label="Follow us on Instagram (opens in new window)"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded transition-colors"
              aria-label="Follow us on X (formerly Twitter) (opens in new window)"
            >
              <RiTwitterXLine className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <a
              href="tel:+01234567890"
              className="hover:text-gray-600 focus:text-gray-600 focus:outline-none transition-colors"
              aria-label="Call us at 0123-456-789"
            >
              <FiPhoneCall className="inline-block mr-2" />
              0123-456-789
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-12 lg:px-0 border-t border-gray-300 py-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          ©2025,{" "}
          <a
            href="https://github.com/mehedihjim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 focus:text-gray-400 focus:outline-none transition-colors"
            aria-label="Visit MH Jim's GitHub profile (opens in new window)"
          >
            MH Jim
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
