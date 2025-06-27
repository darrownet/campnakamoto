import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  hideTitle?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, hideTitle = false }) => {
  return (
    <>
      <div className="section-divider" id={id}>&nbsp;</div>
      <section>
        {!hideTitle && <h2>{title}</h2>}
        {children}
      </section>
    </>
  );
};

export default SectionWrapper;
