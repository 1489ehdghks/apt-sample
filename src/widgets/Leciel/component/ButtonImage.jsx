import { useState } from "react";
import './ButtonImage.scss';

const ButtonImage = ({ tabData, title }) => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  return (
    <div className="button-image-container">
      <div className="wrap">
        {title && <div className="textBox2"><p>{title}</p></div>}

        <div className="contentBox">
          <div className="btnBox">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                className={`tab-button ${selectedTab === tab.id ? 'on' : ''}`}
                onClick={() => setSelectedTab(tab.id)}
              >
                <p>{tab.label}</p>
              </div>
            ))}
          </div>

          <div className="content">
            <div className="image-container">
              {tabData.map((tab) => (
                selectedTab === tab.id && (
                  <div key={tab.id} className="images-wrapper">
                    {Array.isArray(tab.image) ? (
                      tab.image.map((img, index) => (
                        <img 
                          key={index}
                          src={img} 
                          alt={`${tab.alt} ${index + 1}`}
                          className="content-image"
                        />
                      ))
                    ) : (
                      <img 
                        src={tab.image} 
                        alt={tab.alt}
                        className="content-image"
                      />
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonImage;
