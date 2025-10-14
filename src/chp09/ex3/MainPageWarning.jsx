import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import './MainPage_style.css';

function MainPageWarning() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }

    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggleClick} className={`toggle-button ${showWarning} ? 'hide' : ''}`}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}

export default MainPageWarning