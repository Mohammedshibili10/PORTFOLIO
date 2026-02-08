import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later: send email / API call
  };

  const inputClasses =
    "w-full bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#D3E97A] placeholder-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* NAME + EMAIL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={inputClasses}
          required
          maxLength={100}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={inputClasses}
          required
          maxLength={255}
        />
      </div>

      {/* SUBJECT */}
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) =>
          setFormData({ ...formData, subject: e.target.value })
        }
        className={inputClasses}
        required
        maxLength={200}
      />

      {/* MESSAGE */}
      <textarea
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        className={`${inputClasses} resize-none`}
        required
        maxLength={1000}
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="group flex items-center gap-3 bg-[#D3E97A] text-black px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-300"
      >
        Send Message
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </form>
  );
}
