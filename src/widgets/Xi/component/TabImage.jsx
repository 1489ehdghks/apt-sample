import { useState } from "react";
import './TabImage.scss';

const TabImage = ({ tabData, title }) => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].id);

  return (
    <div className="tab-image-container">
      <div className="tab-header">
        {title && <h2 className="title">{title}</h2>}

        <div className="tab-container">
          {tabData.map((tab) => (
            <button 
              key={tab.id}
              className={`tab-button ${selectedTab === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="content-scroll-container">
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
  );
};

export default TabImage;