import React from 'react';
import styled from "styled-components";
import Project from "./Project";

const Section = styled.section`
    background-color: #fff;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center; /* 수직 중앙 정렬 */
`;

const SectionHeading = styled.h2`
    font-size: 2rem;
    color: #343a40;
    margin-bottom: 2rem;
    text-align: center;
`;
const SideProject = () => {
    const projectList = [
        {
            period: '2022.01 - 2022.08',
            title: '호서 Notice',
            company: '호서대학교',
            role: '단독개발, 서버 개발 및 배포/ 서버 구축/ 서버 운영',
            techStack: 'Nodejs, Javascript, MariaDB',
            keyTech: '파일 등록 및 다운로드, 설문지폼 만들기 및 작성, 공지사항 등록, FCM(Firebase Cloud Message) 알림 서비스, 대학교내부서 페이지, 프로그램 신청',
            imageUrl: process.env.PUBLIC_URL + '/notice.png',
            videoUrl: process.env.PUBLIC_URL + '/notice.MP4'
        },
        {
            period: '2022.01 - 2022.05',
            title: 'HCIC 연구센터',
            company: '호서대학교',
            role: '단독개발, 서버 개발 및 배포/ 서버 구축/ 서버 운영',
            techStack: 'Nodejs, Javascript, Html, CSS, jQuery, MariaDB',
            keyTech: '서버 사이드 랜더링, 연구소 연혁 관리, 연구과제 관리, 공지사항, 게시판 관리'
        },
        {
            period: '2021.05 - 2022.03',
            title: '해양 IT 융합 기술 연구소',
            company: '호서대학교',
            role: '단독개발, 서버 개발 및 배포/ 서버 구축/ 서버 운영',
            techStack: 'Nodejs, Javascript, Html, CSS, jQuery, MariaDB',
            keyTech: '서버 사이드 랜더링, 연구소 연혁 관리, 연구과제 관리, 공지사항, 게시판 관리'
        },
        {
            period: '2021.07 - 2021.12',
            title: 'HUB',
            company: 'UCK',
            role: '팀 개발(2명, 기여도 60%), 서버 유지보수 / Firebase 연동 / 서버 운영',
            techStack: 'ReactJS, Nodejs, Javascript, MariaDB, Firebase',
            keyTech: '관리자 싱글 페이지 애플리케이션(SPA) 구축, RESTful API 통신, 버스 위치 조회, 취약점 관리, 검색관리',
            imageUrl: process.env.PUBLIC_URL + '/hub.png'
        },
    ];

    return (
        <Section>
            <SectionHeading>Side Projects</SectionHeading>
            {projectList.map((project, index) => (
                <Project
                    key={index}
                    period={project.period}
                    title={project.title}
                    company={project.company}
                    role={project.role}
                    techStack={project.techStack}
                    keyTech={project.keyTech}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                />
            ))}
        </Section>
    )
}

export default SideProject;