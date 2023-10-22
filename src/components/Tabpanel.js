import React from 'react';

const TabPanel = ({ value, index, children }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

export default TabPanel;
