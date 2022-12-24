import BtnSmallShort from 'components/buttons/BtnSmallShort'
import React, { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { pfProjectItemsState } from 'store/portfolioState'
import { IProjectTypes } from 'store/portfolioType'
import ItemContentDropdown from './itemformsitem/ItemContentDropdown'
import ItemContentImgUpload from './itemformsitem/ItemContentImgUpload'
import ItemContentInputShort from './itemformsitem/ItemContentInputShort'
import ItemContentTextareaLong from './itemformsitem/ItemContentTextareaLong'
import ItemContentTextareaShort from './itemformsitem/ItemContentTextareaShort'

function ProjectForm() {
  // 프로젝트 관련 저장할 state
  const [projectName, setProjectName] = useState<string>('')
  const [projectDescript, setProjectDescript] = useState<string>('')
  const [getSelected, setGetSelected] = useState<string | number>(1)
  const [projectWork, setProjectWork] = useState<string>('')
  const [projectLink, setProjectLink] = useState<string>('')
  // 여러 개 추가해야 하는 경우 state (링크, 이미지)
  const [projectLinks, setProjectLinks] = useState<string[]>([])
  const [projectAchieve, setProjectAchieve] = useState<string>('')
  const [projectRemind, setProjectRemind] = useState<string>('')
  const [imageUpload, setImageUpload] = useState<string>('')
  const imageRef = useRef<HTMLInputElement | null>(null)

  // 프로젝트 항목이 담긴 state
  const ProjectItems = {
    ProjectName: projectName,
    ProjectStartDate: '',
    ProjectEndDate: '',
    ProjectDescript: projectDescript,
    ProjectPplNum: getSelected,
    ProjectWork: projectWork,
    ProjectLink: projectLinks,
    ProjectAchieve: projectAchieve,
    ProjectRemind: projectRemind,
  }

  // 프로젝트 항목이 담긴 atom
  const setPfProjectItems = useSetRecoilState(pfProjectItemsState)

  // atom 에 저장하는 function
  const SaveProjectForm = (items: IProjectTypes) => {
    setPfProjectItems(items)
  }
  // 초기화 버튼
  const ResetProjectForm = () => {
    setProjectName('')
    setProjectDescript('')
    setGetSelected(1)
    setProjectWork('')
    setProjectLink('')
    setProjectLinks([])
    setProjectAchieve('')
    setProjectRemind('')
    setImageUpload('')
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <BtnSmallShort
          BtnName="저장"
          doFunction={() => SaveProjectForm(ProjectItems)}
        />
        <BtnSmallShort BtnName="초기화" doFunction={() => ResetProjectForm()} />
      </div>
      <div style={{ display: 'flex' }}>
        프로젝트명{' '}
        <ItemContentInputShort
          placeholder="프로젝트 이름을 입력하세요."
          content={projectName}
          setFunction={setProjectName}
        />
      </div>
      <div style={{ display: 'flex' }}>시작 종료</div>
      <div style={{ display: 'flex' }}>
        설명{' '}
        <ItemContentTextareaShort
          placeholder="프로젝트에 대한 설명을 적어주세요. (100 자 이내)"
          content={projectDescript}
          setFunction={setProjectDescript}
        />
      </div>
      <div>
        팀원 수{' '}
        <ItemContentDropdown
          DropdownContent={[1, 2, 3, 4, 5, 6, 7, 8, 9, '10 명 이상']}
          setGetSelected={setGetSelected}
          getSelected={getSelected}
        />
      </div>
      <div style={{ display: 'flex' }}>
        담당 업무{' '}
        <ItemContentTextareaShort
          placeholder="담당 업무를 입력해 주세요"
          content={projectWork}
          setFunction={setProjectWork}
        />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          관련 링크{' '}
          <ItemContentInputShort
            placeholder="프로젝트 관련 링크를 입력하세요. (최대 3개)"
            content={projectLink}
            setFunction={setProjectLink}
          />
          <BtnSmallShort
            BtnName="추가"
            doFunction={() => {
              setProjectLinks([projectLink, ...projectLinks])
              setProjectLink('')
            }}
          />
        </div>
        {projectLinks.map((item) => (
          <div key={item} style={{ display: 'flex' }}>
            <button
              type="button"
              onClick={() => window.open(item)}
              aria-label="url"
            >
              {item}
            </button>
            <BtnSmallShort
              BtnName="삭제"
              doFunction={() => {
                const deleteProjectLink = projectLinks.filter(
                  (data) => data !== item
                )
                setProjectLinks(deleteProjectLink)
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        성과{' '}
        <ItemContentTextareaLong
          placeholder="프로젝트로 얻은 성과를 적어주세요. (300 자 이내)"
          content={projectAchieve}
          setFunction={setProjectAchieve}
        />
      </div>
      <div style={{ display: 'flex' }}>
        회고{' '}
        <ItemContentTextareaLong
          placeholder="프로젝트 회고를 적어주세요. (1000 자 이내)"
          content={projectRemind}
          setFunction={setProjectRemind}
        />
      </div>
      <div style={{ display: 'flex' }}>
        대표 사진{' '}
        <ItemContentImgUpload
          imageRef={imageRef}
          setImageState={setImageUpload}
        />
        <div>
          {imageUpload && (
            <div>
              <img src={imageUpload} alt="이미지 미리보기" />
              <BtnSmallShort
                BtnName="삭제"
                doFunction={() => {
                  setImageUpload('')
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectForm
