import React from "react";

interface KeyValueProps {
  keyValuePair: [string, any];
}

const KeyValueComponent: React.FC<KeyValueProps> = ({ keyValuePair }) => {
  const [key, value] = keyValuePair;

  return (
    <div className="m-1">
      <h3 className="text-sm md:text-md overflow-hidden text-overflow-ellipsis whitespace-nowrap">
        {key}: <strong>{value}</strong>
      </h3>
      {/* {key}: <strong>{value}</strong> */}
    </div>
  );
};

export default KeyValueComponent;
