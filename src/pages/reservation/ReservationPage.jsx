import React, { useState } from "react";
import "./ReservationPage.scss";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",  // Gender field
    agree: false,
    receiveInfo: false,
  });

  // Format phone number to 010-0000-0000 pattern
  const formatPhoneNumber = (phone) => {
    // Remove non-numeric characters
    const cleaned = phone.replace(/\D/g, "");
    // Apply format if the number is valid
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 7) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If phone field, format the phone number while typing
    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: formatPhoneNumber(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    console.log(formData); // Log the form data
    // You can proceed with API call or other actions here
  };

  return (
    <div className="reservation">
      <header className="reservation-header">
        <h1>RESERVATION</h1>
        <p>예약센터</p>
      </header>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="name">성명</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">휴대전화</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="13" // Prevents exceeding phone number length
            required
          />
        </div>

        <div className="form-group">
          <label>성별</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                required
              />
              여자
            </label>
          </div>
        </div>

        <div className="agreement">
          <p>개인정보 수집 및 이용에 대한 동의 (필수사항)</p>
          <textarea
            readOnly
            value="당사는 고객님의 개인정보를 중요시하며, 개인정보보호법을 준수하고 있습니다."
          ></textarea>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleCheckboxChange}
              required
            />
            동의합니다.
          </label>
        </div>

        <div className="info">
          <p>모집정보 제공에 관한 동의 (필수사항)</p>
          <textarea
            readOnly
            value="해당 고객정보의 수집 및 이용은 '예약서비스'의 모집정보 제공 공적 목적 사용됩니다."
          ></textarea>
          <label>
            <input
              type="checkbox"
              name="receiveInfo"
              checked={formData.receiveInfo}
              onChange={handleCheckboxChange}
              required
            />
            동의합니다.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          예약등록
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
