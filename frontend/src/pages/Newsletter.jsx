import { useState } from "react";
import { Link } from "react-router";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import newsletter from "../assets/newsletter.jpg";
import { useSubscribeUserMutation } from "../api/subscribeApi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribeUser] = useSubscribeUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await subscribeUser(email).unwrap(); // calls backend
      setIsSubscribed(true);
      setEmail(""); // optional: clear input
    } catch (err) {
      alert(err.data?.message || err.message || "Subscription failed");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Welcome to the Family!</h2>
          <p className="text-gray-600 mb-6">
            {`Thank you for subscribing to our newsletter. You'll receive your
            first email soon.`}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-rabbit-red text-white rounded-lg font-semibold hover:bg-rabbit-red/80 transition-all duration-300 group"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-[750px] flex">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-10 bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-2">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <h2 className="text-2xl font-rabbit-saadhu font-medium text-gray-800">
              Saadhu.
            </h2>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <Mail className="w-12 h-12 text-rabbit-red mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Stay In The Loop
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get exclusive access to new collections, special offers, and style
              inspiration delivered straight to your inbox.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-rabbit-red/20 focus:border-rabbit-red transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-8 p-3 font-semibold transition-all duration-300 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rabbit-red hover:bg-rabbit-red/80 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            } text-white`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin mr-2"></div>
                Subscribing...
              </div>
            ) : (
              "Subscribe to Newsletter"
            )}
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
            By subscribing, you agree to our{" "}
            <Link
              to="/privacy"
              className="text-rabbit-red underline hover:no-underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/terms"
              className="text-rabbit-red underline hover:no-underline"
            >
              Terms of Service
            </Link>
            . You can unsubscribe at any time.
          </p>
        </form>
      </div>

      {/* Right Column - Visual Content */}
      <div className="hidden md:block w-1/2 bg-gray-300">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={newsletter}
            alt="Newsletter"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
