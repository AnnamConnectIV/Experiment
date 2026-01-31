import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    userType: "",
    organization: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        backgroundColor: "#E8F4F8", // Light pastel blue background
      }}
    >
      <div className="w-full max-w-2xl">
        {/* Form Card */}
        <div
          className="rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12"
          style={{ backgroundColor: "#FAFAFA" }} // Very light gray / off-white
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1
              className="mb-3"
              style={{
                color: "#0F5959", // Deep teal
                fontSize: "2rem",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              User Information Form
            </h1>
            <p
              className="max-w-lg mx-auto"
              style={{
                color: "#5A5A5A",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              Join our mission to reduce food waste and connect
              surplus food with those in need. Your information
              helps us build a stronger community.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Location / City */}
            <div>
              <label
                htmlFor="location"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Location / City
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Enter your city or location"
                />
              </div>
            </div>

            {/* User Type Dropdown */}
            <div>
              <label
                htmlFor="userType"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                User Type
              </label>
              <div className="relative">
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none appearance-none cursor-pointer"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: formData.userType
                      ? "#2C2C2C"
                      : "#9CA3AF",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="donor">Donor</option>
                  <option value="receiver">Receiver</option>
                  <option value="volunteer">Volunteer</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#5A9A9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Organization Name (Optional) */}
            <div>
              <label
                htmlFor="organization"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Organization Name{" "}
                <span
                  style={{
                    color: "#9CA3AF",
                    fontWeight: "400",
                  }}
                >
                  (optional)
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Enter your organization name"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block mb-2"
                style={{ color: "#2C2C2C", fontSize: "0.9rem" }}
              >
                Additional Notes
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                  <MessageSquare
                    size={18}
                    style={{ color: "#5A9A9A" }}
                  />
                </div>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1E5E5",
                    color: "#2C2C2C",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#5A9A9A")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#D1E5E5")
                  }
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "#8B6F47", // Warm brown accent
                color: "#FFFFFF",
                fontWeight: "600",
                marginTop: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#6F5838";
                e.currentTarget.style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#8B6F47";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              Submit Details
            </button>

            {/* Secondary Link */}
            <div className="text-center mt-4">
              <a
                href="#contact-admin"
                className="transition-colors duration-200"
                style={{
                  color: "#5A9A9A", // Soft teal
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0F5959")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#5A9A9A")
                }
              >
                Already registered? Contact admin
              </a>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p style={{ color: "#6B7280", fontSize: "0.85rem" }}>
            Your information is secure and will only be used to
            facilitate food donations.
          </p>
        </div>
      </div>
    </div>
  );
}