import React from "react";
import "../styles/style.css";

// Importo imazhet
import img1 from "./imazhe/germany.png";
import img2 from "./imazhe/foto0.5.png";
import img3 from "./imazhe/foto3.jpg";
import img4 from "./imazhe/foto4.jpg";
import img5 from "./imazhe/foto5.jpg";
import img6 from "./imazhe/foto6.jpg";


const updates = [
  { version: "3.3.0", date: "14/05/2018", type: "New", description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permissions re-design and optimization.", author: "Kevin Joe", img: img1 },
  { version: "3.1.0", date: "20/05/2015", type: "Fix", description: "Introducing Host Cloud Drive - virtual drive functionality. New Share options and management. New, more user-friendly design. Sync optimizations. Various performance improvements and bug fixes.", author: "David max", img: img2 },
   { version: "3.1.0", date: "20/05/2015", type: "Improvement", description: "Added Settings for Auto Start. Added Update Notification. Speed Optimization. Bug Fixes.", author: "Brian leo", img: img3 },
   { version: "3.3.0", date: "14/05/2018", type: "New", description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permissions re-design and optimization.", author: "Jacob Ray", img: img4 },
   { version: "3.1.0", date: "20/05/2015", type: "Fix", description: "Introducing Host Cloud Drive - virtual drive functionality. New Share options and management. New, more user-friendly design. Sync optimizations. Various performance improvements and bug fixes.", author: "Oscar Lan", img: img5 },
   { version: "3.1.0", date: "20/05/2015", type: "Improvement", description: "Added Settings for Auto Start. Added Update Notification. Speed Optimization. Bug Fixes.", author: "Felix Tom", img: img6 },
];

const DomainList = () => {
  return (
    <div className="domain-list">
      {updates.map((update, index) => (
        <div className="card" key={index}>
          <h3>{update.version} ({update.date})</h3> 
          <div className="card-header">
            <div className={`tag ${update.type.toLowerCase()}`}>{update.type}</div>
            <img className="img" src={update.img} alt="Country" />
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
