import React, { useState } from "react";
import { Github, Linkedin, Instagram, Twitter, Mail, Send, X, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://email-service-fuxe.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setEmailSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Error sending email");
        setEmailSent(false);
      }
    } catch (error) {
      console.log(error);
      setEmailSent(false);
    } finally {
      setIsSubmitting(false);
      setShowDialog(true);
    }
  };

  const socialLinks = [
    { icon: Mail, name: "Email", href: "mailto:mohammedfahad1905@gmail.com", color: "hover:text-red-500" },
    { icon: Github, name: "GitHub", href: "https://github.com/fahad1722/", color: "hover:text-gray-700" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/fahad177/", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/fahad177__", color: "hover:text-pink-500" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/fahad177__", color: "hover:text-blue-400" },
  ];

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 pt-24 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h1>

        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
          {/* Left Section - Contact Info */}
          <div className="lg:w-1/2 space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly conversation about technology and design.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <social.icon size={32} className="mb-3 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  <span className={`text-sm font-medium text-gray-600 transition-opacity duration-300 ${
                    hoveredIcon === social.name ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {social.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>           
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Send me a message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="mb-4">
                {emailSent ? (
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                ) : (
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {emailSent ? "Message Sent!" : "Oops! Something went wrong"}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {emailSent
                  ? "Thank you for reaching out! I'll get back to you as soon as possible."
                  : "There was an error sending your message. Please try again or contact me directly via email."}
              </p>
              
              <button
                onClick={() => setShowDialog(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;