import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <a href="/">
        <img className="w-30 mr-5 h-10 p-2 " src="/division2 logo.png" />
      </a>
    </div>
  );
}

export default React.memo(Logo);
