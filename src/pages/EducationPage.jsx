// components/EducationPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Education from '../components/Education/Education';
import Skills from "../components/Education/Skills";
import Projects from "../components/Education/Projects";
import WorkExperience from "../components/Education/Experience";
import Experience from "../components/Education/Experience";
import '../App.css';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column; /* 기본적으로 수직 방향으로 정렬 */
    max-width: 1200px;
    margin: auto;
    padding: 2rem;

    @media (min-width: 768px) {
        flex-direction: row; /* 데스크탑에서는 수평 정렬 */
    }
`;

const Sidebar = styled.nav`
    flex: 0 0 200px;
    padding: 2rem;
    height: auto; // 뷰포트 높이에 맞춤
    position: static; // 기본적으로 정적 위치
    top: auto; // 기본적으로 top 값 없음
    z-index: auto; // 기본적으로 z-index 값 없음

    @media (min-width: 768px) {
        height: 50vh; // 데스크탑에서는 뷰포트 높이에 맞춤
        position: sticky; // 스크롤시 고정
        top: 40px; // 상단에서의 거리
        z-index: 0; // 다른 콘텐츠 위에 표시되도록 z-index 설정
    }
`;

const SidebarLink = styled(Link)`
    display: block;
    padding: 0.5rem 0;
    color: #007bff;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &.active {
        color: #fff; // 활성화된 링크의 텍스트 색상
        background-color: #007bff; // 활성화된 링크의 배경 색상
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const Content = styled.div`
    flex: 1;
    padding-left: 2rem;

    @media (max-width: 767px) {
        padding-left: 0; // 모바일에서는 좌측 패딩 제거
    }
`;

const EducationPage = () => {
    return (
        <PageContainer>
            <Sidebar>
                <SidebarLink className="nav-link" to="side-education-section" spy={true} smooth={true} duration={500} activeClass="active">Education</SidebarLink>
                <SidebarLink className="nav-link" to="side-experience-section" spy={true} smooth={true} duration={500} activeClass="active">Experience</SidebarLink>
                <SidebarLink className="nav-link" to="side-skills-section" spy={true} smooth={true} duration={500} activeClass="active">Skills</SidebarLink>
                <SidebarLink className="nav-link" to="projects-section" spy={true} smooth={true} duration={500} activeClass="active">Projects</SidebarLink>
            </Sidebar>
            <Content>
                <div id="side-education-section" className="contain-top"><Education/></div>
                <hr/>
                <div id="side-experience-section" className="contain-top"><Experience/></div>
                <hr/>
                <div id="side-skills-section" className="contain-top"><Skills/></div>
                <hr/>
                <div id="projects-section" className="contain-top"><Projects/></div>
            </Content>
        </PageContainer>
    );
};

export default EducationPage;