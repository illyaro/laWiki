import React from "react";

const WikiList = ({ wikis }) => {
  // Elimina duplicados si es necesario
  const uniqueWikis = Array.from(new Set(wikis.map(wiki => wiki._id)))
    .map(id => {
      return wikis.find(wiki => wiki._id === id);
    });

  return (
    <div>
      {uniqueWikis.map(wiki => (
        <div key={wiki._id} className="wiki-item">
          <img src={wiki.image} alt={wiki.title} />
          <h2>{wiki.title}</h2>

        </div>
      ))}
    </div>
  );
};

export default WikiList;