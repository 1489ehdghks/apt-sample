import React, { useState } from "react";
import axios from "axios";
import "./ReservationPage.scss";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    gender: "",
    apartment_id: 1,  // 현재는 고정값 1 사용
    agree: false,
    receiveInfo: false,
  });

  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, "");  // 숫자만 남기고 모든 문자 제거
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone_number") {
      setFormData({
        ...formData,
        [name]: formatPhoneNumber(value),
      });
    } else if (name === "gender") {
      setFormData({
        ...formData,
        [name]: value === "male" ? "MALE" : "FEMALE",  // API 형식에 맞게 변환
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agree || !formData.receiveInfo) {
      alert("필수 동의사항에 모두 동의해주세요.");
      return;
    }

    try {
      const response = await axios.post('http://13.209.59.247/api/landing/counsel/application', {
        name: formData.name,
        phone_number: formData.phone_number,
        apartment_id: formData.apartment_id,
        gender: formData.gender
      });

      if (response.status === 200) {
        alert("예약이 성공적으로 등록되었습니다.");
        setFormData({
          name: "",
          phone_number: "",
          gender: "",
          apartment_id: 1,
          agree: false,
          receiveInfo: false,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("예약 등록에 실패했습니다. 다시 시도해주세요.");
    }
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
          <label htmlFor="phone_number">휴대전화</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            maxLength="11"
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
                checked={formData.gender === "MALE"}
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
                checked={formData.gender === "FEMALE"}
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
