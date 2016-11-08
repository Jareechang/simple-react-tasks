import React from 'react';

const SectionLabel = ({ label }) => {
    return <div className="section__label-section"> 
        <p className="section-label"> { label }</p>
    </div>
}

SectionLabel.propTypes = {
    label: React.PropTypes.string
}

SectionLabel.defaultProps = { label: `ADD AN ITEM` } 

export default SectionLabel;
