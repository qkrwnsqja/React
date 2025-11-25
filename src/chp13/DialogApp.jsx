import React from "react";
import Dialog from "./Dialog";
import "./Dialog.css"; // 디자인 적용을 위해 CSS 파일 임포트

// 1. 특수화: 환영 다이얼로그 (파란색)
function WelcomeDialog() {
    return (
        <Dialog
            color="blue"
            title="👋 환영합니다!"
            message="우리 사이트에 방문해주셔서 감사합니다. 애플 스타일을 즐겨보세요."
        />
    );
}

// 2. 특수화: 경고 다이얼로그 (노란색)
function WarningDialog() {
    return (
        <Dialog
            color="yellow"
            title="⚠️ 주의하세요"
            message="이 작업은 되돌릴 수 없습니다. 신중하게 선택해주세요."
        />
    );
}

// 3. 특수화: 오류 다이얼로그 (빨간색)
function ErrorDialog() {
    return (
        <Dialog
            color="red"
            title="🚨 시스템 오류"
            message="치명적인 오류가 발생했습니다. 관리자에게 문의하세요."
        />
    );
}

// 메인 컴포넌트 (함수 이름도 파일명에 맞춰 DialogApp으로 설정)
function DialogApp() {
    return (
        <div className="app-container">
            <WelcomeDialog />
            <WarningDialog />
            <ErrorDialog />
        </div>
    );
}

export default DialogApp;