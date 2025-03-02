import React from "react";
import "../styles/style.css";
import img from "./imazhe/germany.png";

const updates = [
  { version: "3.3.0", date: "14/05/2018", type: "New", description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permissions re-design and optimization.", author: "Kevin Joe" },
  { version: "3.1.0", date: "20/05/2015", type: "Fix", description: "Introducing Host Cloud Drive - virtual drive functionality. New Share options and management. New, more user-friendly design. Sync optimizations. Various performance improvements and bug fixes.", author: "Kevin Joe" },
  { version: "3.1.0", date: "20/05/2015", type: "Improvement", description: "Added Settings for Auto Start. Added Update Notification. Speed Optimization. Bug Fixes.", author: "Kevin Joe" },
  { version: "3.3.0", date: "14/05/2018", type: "New", description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permissions re-design and optimization.", author: "Kevin Joe" },
  { version: "3.1.0", date: "20/05/2015", type: "Fix", description: "Introducing Host Cloud Drive - virtual drive functionality. New Share options and management. New, more user-friendly design. Sync optimizations. Various performance improvements and bug fixes.", author: "Kevin Joe" },
  { version: "3.1.0", date: "20/05/2015", type: "Improvement", description: "Added Settings for Auto Start. Added Update Notification. Speed Optimization. Bug Fixes.", author: "Kevin Joe" },
];

const DomainList = () => {
  return (
    <div className="domain-list">
      {updates.map((update, index) => (
        <div className="card" key={index}>
          <h3>{update.version} ({update.date})</h3> 
          <div className="card-header">
            <div className={`tag ${update.type.toLowerCase()}`}>{update.type}</div>
            <img className="img" src={img} alt="Germany" />
            <p className="author">{update.author}</p>
          </div>
          <p>{update.description}</p>
          <button className="download-btn">Download</button>
        </div>
      ))}
    </div>
  );
};

export default DomainList;