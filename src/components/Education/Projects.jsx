import React from 'react';
import styled from 'styled-components';
import Project from "../Project";


const ProjectsSection = styled.section`
    background-color: #fff;
    padding: 5rem 1rem;
`;
const SectionHeading = styled.h2`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 2rem;
  text-align: left;
`;

const Projects = () => {
    const projectList = [
        {
            period: '2024.07 - In Progress',
            title: 'Multi-DTx 3차년도',
            company: '주식회사 인트인',
            role: '단독개발, 서버 개발 및 유지보수 / 서버 배포 / 서버 구축 및 운영',
            techStack: 'Spring Boot, Java, JPA, MyBatis, MariaDB',
            keyTech: 'RESTful API 통신, 신규요구사항 기능 추가'
        },
        {
            period: '2024.08 - 2024.09',
            title: '통합서비스관리자',
            company: '주식회사 인트인',
            role: '단독개발, 서버 개발 및 유지보수 / 서버 배포 / 서버 구축 및 운영',
            techStack: 'Spring Boot, Java, JPA, MyBatis, MariaDB',
            keyTech: '서비스 대시보드, RESTful API 통신, 신규요구사항 기능 추가'
        },
        {
            period: '2024.02 - 2024.09',
            title: 'SBOM 시스템 구축',
            company: '주식회사 인트인',
            role: '단독개발, 웹 개발 및 유지보수 / 서버 개발 및 유지보수 / 웹&서버 배포 / 서버 구축 및 운영',
            techStack: 'React, Javascript, Spring Boot, Java, JPA, QueryDSL, MariaDB',
            keyTech: '싱글 페이지 애플리케이션(SPA) 구축, RESTful API 통신, SBOM 문서관리, OSS(OpenSource Software) 관리, 취약점 관리, 검색관리'
        },
        {
            period: '2023.11 - 2024.01',
            title: '정자분석기 2.1',
            company: '주식회사 인트인',
            role: '단독개발, 서버 개발 및 유지보수 / 서버 배포/ AWS 서버 운영',
            techStack: 'Spring Boot, Java, JPA, QueryDSL, Apple-OAuth, MariaDB',
            keyTech: 'RESTful API 통신 및 문서 작성, 버그 수정, 신규요구사항 기능 추가'
        },
        {
            period: '2023.11 - 2023.11',
            title: 'Multi-DTx 2차년도',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 30%), 코드 리뷰 / Git Repository 관리 / Jenkins 자동화 빌드',
            techStack: 'Spring Boot, Java, QueryDSL, MariaDB',
            keyTech: 'RESTful API 통신 문서 작성, 코드 리뷰'
        },
        {
            period: '2023.06 - 2023.08',
            title: '정자분석기 농도 알고리즘 고도화',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 70%), 코드 리뷰 / 알고리즘 고도화',
            techStack: 'C++, OpenCV',
            keyTech: '이미지 전처리, 이미지 수치화, 코드 리뷰'
        },
        {
            period: '2023.06 - 2023.08',
            title: '삼성생명 TheHealth X 인트인 콜라보',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 80%), 서버 개발 및 유지보수 / 웹&서버 배포 / AWS 서버 구축 및 운영',
            techStack: 'Spring Boot, Java, JPA, MariaDB',
            keyTech: 'NICE 본인인증, 코드 리뷰, 서버 구축 및 운영'
        },
        {
            period: '2023.01 - 2023.09',
            title: '정자분석기 2.0',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 60%), 서버 개발 및 유지보수 / 서버 배포 / AWS 서버 구축 및 운영',
            techStack: 'Spring Boot, Java, JPA, QueryDSL, JWT, MariaDB',
            keyTech: 'JWT 암호화 토큰 관리, 기존 사용자 마이그레이션, 신규 요구사항 적용'
        },
        {
            period: '2022.11 - 2023.02',
            title: 'Multi-DTx 1차년도',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 70%), 서버 개발 및 유지보수 / 서버 배포 / AWS 서버 구축 및 운영',
            techStack: 'NodeJS, Typescript, TypeORM, JWT, MariaDB',
            keyTech: 'HL7 연동, 서버 구축 및 운영'
        },
        {
            period: '2022.09 - 2023.05',
            title: '통합관리자웹',
            company: '주식회사 인트인',
            role: '팀 개발(2명, 기여도 80%), 서버 개발 및 유지보수 / 웹&서버 배포 / AWS 서버 구축 및 운영',
            techStack: 'NodeJS, Typescript, TypeORM, JWT, MariaDB',
            keyTech: '관리자 관리, B2B 서비스'
        },
    ];

    return (
        <ProjectsSection>
            <SectionHeading>Projects</SectionHeading>
            {projectList.map((project, index) => (
                <Project
                    key={index}
                    period={project.period}
                    title={project.title}
                    company={project.company}
                    role={project.role}
                    techStack={project.techStack}
                    keyTech={project.keyTech}
                />
            ))}
        </ProjectsSection>
    );
};

export default Projects;
