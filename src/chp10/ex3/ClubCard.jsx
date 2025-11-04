import React from "react";
import './ClubCard.css';

// [수정된 부분]
// 다운받을 이미지 파일 경로를 import 합니다.
// (imgs 폴더에 club1.jpg, club2.jpg 등이 있다고 가정)
import clubImg1 from './imgs/club1.jpg';
import clubImg2 from './imgs/club2.jpg';
import clubImg3 from './imgs/club3.jpg';
import clubImg4 from './imgs/club4.jpg';

const clubs = [
    // [수정된 부분]
    // avatar 값에 import한 변수(clubImg1)를 넣어줍니다.
    {id: 1, name:"코딩 동아리", description:"React와 Node.js 스터디", avatar: clubImg1},
    {id: 2, name:"사진 동아리", description:"매주 출사를 나갑니다", avatar: clubImg2},
    {id: 3, name:"농구 동아리", description:"점심시간에 농구할 사람", avatar: clubImg3},
    {id: 4, name:"영화 동아리", description:"매주 금요일 영화 감상", avatar: clubImg4},
];

function ClubCard() {
    return(
        <div className="club-container">
            <h2 className={"club-title"}>동아리 소개</h2>
            <div className={"card-container"}>
                {
                    clubs.map((club) => (
                            <div className={"club-card"} key={club.id}>
                                {/* img src에 import한 변수가 연결됩니다. */}
                                <img src={club.avatar} alt={club.name} className={"club-avatar"}/>
                                <div className={"club-info"}>
                                    <h3>{club.name}</h3>
                                    <p>{club.description}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default ClubCard;