import React from "react";

function BoilVerdict(props) {
    // 100도 이상인지 확인
    if (props.celcius >= 100) {
        return (
            // 끓으면: 빨간색 스타일(verdict-boil) 적용
            <div className="verdict-card verdict-boil">
                🔥 물이 끓습니다!
            </div>
        );
    }
    return (
        // 안 끓으면: 파란색 스타일(verdict-not-boil) 적용
        <div className="verdict-card verdict-not-boil">
            💧 물이 끓지 않습니다.
        </div>
    );
}

export default BoilVerdict;