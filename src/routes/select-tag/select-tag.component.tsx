import { MouseEvent, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	resetTag,
	addTagToMemo,
	removeTagFromMemo,
	editMemo,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Chip from '../../components/chip/chip.component'

import { SelectTagContainer } from './select-tag.styles'

export default function SelectTag() {
	const { memo, tagList } = useAppSelector(selectMemoisedMemoList)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const handleCreateTag = (e: MouseEvent<HTMLDivElement>): void => {
		dispatch(resetTag())
		navigate('/create-tag')
	}

	const handleSelectTag = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.checked) {
			dispatch(addTagToMemo(e.target.value))
		} else if (!e.target.checked) {
			dispatch(removeTagFromMemo(e.target.value))
		}
	}

	const isSelectedTag = (tagName: string): boolean => {
		return memo.memoTag.find((storedTagName) => storedTagName === tagName)
			? true
			: false
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		dispatch(editMemo)
		navigate(-1)
	}

	return (
		<SelectTagContainer onSubmit={handleSubmit}>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="confirm" type="submit" />}
			/>
			<div className="body-container">
				<h2>등록할 태그를 선택해 주세요.</h2>

				<div className="tags-container">
					{tagList.map((storedTag, index) => (
						<Chip
							key={index}
							text={storedTag.name}
							handleChange={handleSelectTag}
							checked={isSelectedTag(storedTag.name)}
						/>
					))}
					<Chip
						chipType="button"
						symbol="+"
						text="새 태그"
						handleClick={handleCreateTag}
					/>
				</div>
			</div>
		</SelectTagContainer>
	)
}
