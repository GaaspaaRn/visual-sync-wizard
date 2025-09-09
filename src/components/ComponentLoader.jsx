import React from 'react';

const ComponentLoader = ({ height = "h-32", className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className={`animate-pulse bg-secondary/20 rounded-lg w-full ${height}`}></div>
  </div>
);

export default ComponentLoader;