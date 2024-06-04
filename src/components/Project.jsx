import styled from "styled-components";
import React, { useState, useRef } from "react";


const ProjectContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    flex-direction: column; /* 모바일에서 수직 정렬을 기본으로 설정 */
    width: 100%;
    max-width: 600px; /* 각 프로젝트의 최대 너비를 설정 */

    @media (min-width: 768px) {
        flex-direction: row; /* 데스크탑에서는 수평 정렬 */
    }
`;

const ProjectContent = styled.div`
    flex: 1;
    text-align: center; /* 모바일에서 텍스트 중앙 정렬 */

    @media (min-width: 768px) {
        text-align: left; /* 데스크탑에서 텍스트 왼쪽 정렬 */
    }
`;

const ProjectPeriod = styled.p`
    color: #555;
    font-weight: bold;
`;

const ProjectTitle = styled.h3`
    color: #333;
    margin: 0.5rem 0;
`;

const CompanyName = styled.h4`
    color: #777;
    margin: 0;
`;

const Role = styled.p`
    color: #555;
    margin: 0.5rem 0;
`;

const TechStack = styled.p`
    color: #555;
    font-weight: bold;
`;

const KeyTech = styled.p`
    color: #555;
`;

const MoreButton = styled.button`
    margin-top: 1rem; /* 버튼 상단 여백 추가 */
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;

    @media (min-width: 768px) {
        margin-top: 0;
        margin-left: 20px; /* 데스크탑에서는 왼쪽 여백 추가 */
    }
`;

const Modal = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 8px;
`;

const ModalVideo = styled.video`
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 8px;
`;

const Project = ({ period, title, company, role, techStack, keyTech, imageUrl, videoUrl }) => {
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const videoRef = useRef(null);

    const handleVideoModalOpen = () => {
        setVideoModalOpen(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset video to the beginning
            videoRef.current.play(); // Autoplay video
        }
    };

    const handleVideoModalClose = () => {
        setVideoModalOpen(false);
        if (videoRef.current) {
            videoRef.current.pause(); // Pause video when modal is closed
        }
    };

    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectPeriod>{period}</ProjectPeriod>
                <ProjectTitle>{title}</ProjectTitle>
                <CompanyName>{company}</CompanyName>
                <Role>{role}</Role>
                <TechStack>{techStack}</TechStack>
                <KeyTech>{keyTech}</KeyTech>
            </ProjectContent>
            {imageUrl && (
                <MoreButton onClick={() => setImageModalOpen(true)}>이미지 보기</MoreButton>
            )}
            {videoUrl && (
                <MoreButton onClick={handleVideoModalOpen}>동영상 보기</MoreButton>
            )}
            <Modal isOpen={imageModalOpen} onClick={() => setImageModalOpen(false)}>
                <ModalContent onClick={e => e.stopPropagation()}>
                    <ModalImage src={imageUrl} alt="Project Image" />
                </ModalContent>
            </Modal>
            <Modal isOpen={videoModalOpen} onClick={handleVideoModalClose}>
                <ModalContent onClick={e => e.stopPropagation()}>
                    <ModalVideo ref={videoRef} controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </ModalVideo>
                </ModalContent>
            </Modal>
        </ProjectContainer>
    );
};

export default Project;
