"use client"

import React, {useState, ReactElement, JSX} from 'react';

interface AccordionItem {
  title: string;
  content: string | ReactElement | JSX.Element;
}
interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
      <div className="accordion">
        {items.map((item, index) => (
            <div key={item.title} className="accordion-item">
              <div className="accordion-title" onClick={() => onTitleClick(index)}>
                <div>{item.title}</div>
                <div>{activeIndex === index ? '-' : '+'}</div>
              </div>
              {activeIndex === index && (<div className="accordion-content">{item.content}</div>)}
            </div>
        ))}
      </div>
  );
};
export default Accordion;
