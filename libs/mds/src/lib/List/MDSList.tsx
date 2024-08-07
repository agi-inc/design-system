import React from 'react';

export function MDSList({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="p-2">
      {items.map((item, idx) => {
        if (React.isValidElement(item)) {
          return React.cloneElement(item, { key: idx }); // Add key to JSX element
        }
        return item;
      })}
    </div>
  );
}
