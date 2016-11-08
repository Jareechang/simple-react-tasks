import React from 'react';

const TitleSection = ({ title, subtitle }) => {
    return <div className="main__title-section"> 
        <p className="main--title"> { title }</p>
        <p className="main--subtitle"> { subtitle }</p>
    </div>
}

TitleSection.propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
}

TitleSection.defaultProps = { title: `Marvelous!`, 
                              subtitle: `Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since.` } 

export default TitleSection;
