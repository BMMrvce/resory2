import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ROOMS } from "../lib/constants";
import { submitEnquiry } from "../services/dataService";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    message: "",
  });

  // Listen for URL changes or custom events to pre-fill room
  useEffect(() => {
    const handleRoomSelect = () => {
      const params = new URLSearchParams(window.location.search);
      const room = params.get("room");
      if (room) {
        setFormData((prev) => ({ ...prev, roomType: room }));
      }
    };

    // Initial check
    handleRoomSelect();

    // Listen for history changes (if using pushState)
    window.addEventListener("popstate", handleRoomSelect);
    return () => window.removeEventListener("popstate", handleRoomSelect);
  }, []);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Basic validation
    if (new Date(formData.checkInDate) > new Date(formData.checkOutDate)) {
      setStatus("error");
      setStatusMessage("Check-out date must be after check-in date.");
      return;
    }

    const response = await submitEnquiry(formData);

    if (response.success) {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        roomType: "",
        checkInDate: "",
        checkOutDate: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
    setStatusMessage(response.message);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 flex items-center justify-center relative scroll-mt-24"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info Text */}
        <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white text-glow mb-6">
              Plan Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-sand to-accent-gold">
                Getaway
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Ready to experience luxury amidst nature? Fill out the form and
              our team will get back to you immediately to confirm your
              reservation.
            </p>
          </div>

          {/* Detailed Contact Info */}
          <div className="space-y-6 bg-primary-950/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md shadow-xl">
            <div className="flex items-start space-x-5 group">
              <div className="p-3 bg-primary-500/20 rounded-full text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-lg mb-1">
                  Our Location
                </h4>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Forest Valley Rd, Green Hills,
                  <br />
                  Munnar, Kerala 685612
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-5 group">
              <div className="p-3 bg-primary-500/20 rounded-full text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-lg mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 font-light hover:text-accent-sand transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-5 group">
              <div className="p-3 bg-primary-500/20 rounded-full text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-lg mb-1">
                  Email
                </h4>
                <a
                  href="mailto:bookings@shinelavish.com"
                  className="text-gray-300 font-light hover:text-accent-sand transition-colors"
                >
                  bookings@shinelavish.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card p-6 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden order-1 lg:order-2">
          {/* Decorative background blob */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 relative z-10 border-b border-white/10 pb-4 inline-block">
            Enquiry Form
          </h2>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-[500px] text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(52,160,109,0.6)]">
                <CheckCircle className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white">Thank You!</h3>
              <p className="text-gray-300 text-lg">{statusMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-accent-sand hover:text-white underline decoration-primary-500/50 underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/30 transition-all placeholder-gray-500 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/30 transition-all placeholder-gray-500 backdrop-blur-sm"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1">
                  Room Preference
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/90 transition-all appearance-none cursor-pointer backdrop-blur-sm"
                >
                  <option value="" className="bg-primary-950 text-gray-400">
                    Select a Room
                  </option>
                  {ROOMS.map((r) => (
                    <option
                      key={r.id}
                      value={r.name}
                      className="bg-primary-950 text-white"
                    >
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1 flex items-center gap-2">
                    <Calendar size={14} /> Check-in
                  </label>
                  <input
                    type="date"
                    name="checkInDate"
                    required
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/30 transition-all [color-scheme:dark] backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1 flex items-center gap-2">
                    <Calendar size={14} /> Check-out
                  </label>
                  <input
                    type="date"
                    name="checkOutDate"
                    required
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/30 transition-all [color-scheme:dark] backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary-300 ml-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-primary-950/30 transition-all placeholder-gray-500 backdrop-blur-sm resize-none"
                  placeholder="Any special requests or questions?"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center space-x-2 text-red-300 text-sm bg-red-900/20 p-4 rounded-xl border border-red-500/20">
                  <AlertCircle size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center space-x-3 mt-4"
              >
                {status === "submitting" ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span className="tracking-wide">Send Enquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
