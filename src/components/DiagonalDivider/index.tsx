import React, { ReactNode } from 'react';

const DiagonalDivider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative bg-[#FEF3C7] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full h-full bg-[#FFFBEB] transform origin-left -skew-y-[75deg] md:-skew-y-[20deg]"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DiagonalDivider;