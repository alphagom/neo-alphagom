import React from 'react'
import { useRecoilValue } from 'recoil'

// 프로젝트 항목 atom import
import { projectState } from 'store/portfolioState'

function ProjectDesign() {
  const projectItems = useRecoilValue(projectState)

  return (
    <div>
      {/* 프로젝트 이름 */}
      <div style={{ display: 'flex' }}>
        <h3>프로젝트명</h3>
        <div>{projectItems.pjtName}</div>
      </div>
      {/* 시작일, 종료일 */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <h3>시작</h3>
          <div>{projectItems.pjtStartDate}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <h3>종료</h3>
          <div>{projectItems.pjtEndDate}</div>
        </div>
      </div>
      {/* 프로젝트 설명 */}
      <div style={{ display: 'flex' }}>
        <h3>설명</h3>
        <div>{projectItems.pjtExplain}</div>
      </div>
      {/* 팀원 수 */}
      <div style={{ display: 'flex' }}>
        <h3>팀원 수</h3>
        <div>{projectItems.pjtPeople} 명</div>
      </div>
      {/* 담당 업무 */}
      <div style={{ display: 'flex' }}>
        <h3>담당 업무</h3>
        <div>{projectItems.pjtMyWork}</div>
      </div>
      {/* 관련링크 */}
      <div style={{ display: 'flex' }}>
        <h3>관련 링크</h3>
        {projectItems.pjtLink.map((link: string) => (
          <button
            type="button"
            key={link}
            onClick={() => window.open(link, '_blank')}
          >
            {link}
          </button>
        ))}
      </div>
      {/* 성과 */}
      <div style={{ display: 'flex' }}>
        <h3>성과</h3>
        <div>{projectItems.pjtResults}</div>
      </div>
      {/* 회고 */}
      <div style={{ display: 'flex' }}>
        <h3>회고</h3>
        <div>{projectItems.pjtThink}</div>
      </div>
      {/* 이미지 */}
      <div style={{ display: 'flex' }}>
        <h3>상세 사진</h3>
        <div>{projectItems.pjtImage}</div>
      </div>
    </div>
  )
}

export default ProjectDesign
