import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	setTag,
	addTag,
	editTag,
	deleteTag,
	setIsModified,
	resetIsModified,
	resetSelectedTag,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import InputTag from '../../components/input-tag/input-tag.component'

import { CreateTagContainer } from './create-tag.styles'
import Button from '../../components/button/button.component'

enum WarningType {
	none = '',
	duplication = '중복된 태그가 있습니다.',
}

export default function CreateTag() {
	const [isEditingExist, setIsEditingExist] = useState<boolean>(false)
	const [isValidated, setIsValidated] = useState<boolean>(false)
	const [warningType, setWarningType] = useState<WarningType>(WarningType.none)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { tag, tagList, selectedTag } = useAppSelector(selectMemoisedMemoList)

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const handeChange = (e: ChangeEvent<HTMLInputElement>): void => {
		dispatch(setTag({ ...tag, name: e.target.value.replace(/ /g, '_') }))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		dispatch(isEditingExist ? editTag : addTag)
		navigate(-1)

		dispatch(
			setIsModified({
				modifiactionType: 'tag',
				modificationState: `${isEditingExist ? 'edited' : 'created'}`,
			}),
		)
		setTimeout(() => dispatch(resetIsModified()), 2000)
	}

	const handleDelete = (e: MouseEvent<HTMLButtonElement>): void => {
		if (window.confirm('태그를 삭제하시겠습니까?')) {
			if (selectedTag.name === tag.name) {
				dispatch(resetSelectedTag())
			}
			dispatch(deleteTag)
			navigate(-1)

			dispatch(
				setIsModified({
					modifiactionType: 'tag',
					modificationState: 'deleted',
				}),
			)
			setTimeout(() => dispatch(resetIsModified()), 2000)
		} else return
	}

	useEffect(() => {
		tag.id ? setIsEditingExist(true) : setIsEditingExist(false)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		if (tag.name !== '') {
			const tagToCheck = tagList.find(
				(storedTag) => storedTag.name === tag.name,
			)
			if (tagToCheck) {
				return tagToCheck.id === tag.id
					? (setIsValidated(true), setWarningType(WarningType.none))
					: (setIsValidated(false), setWarningType(WarningType.duplication))
			} else {
				setIsValidated(true)
				setWarningType(WarningType.none)
			}
		} else {
			setIsValidated(false)
			setWarningType(WarningType.none)
		}
	}, [tag, tagList])

	return (
		<CreateTagContainer onSubmit={handleSubmit} autoComplete="off">
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={
					<IconButton icon="confirm" type="submit" disabled={!isValidated} />
				}
			/>

			<div className="body-container">
				<span className="symbol">#</span>
				<div className="input-container">
					<InputTag
						placeholder="태그 이름을 입력해 주세요."
						value={tag.name}
						handleChange={handeChange}
						wordLimit={16}
						autoFocus
					/>
					<div className="guide-container">
						<span className="guide">{warningType}</span>
						<span className="count">{tag.name.length}/16</span>
					</div>
				</div>
			</div>

			{isEditingExist && (
				<div className="button-container">
					<Button
						hierarchy="system"
						text="태그 삭제"
						handleClick={handleDelete}
					/>
				</div>
			)}
		</CreateTagContainer>
	)
}
