import { useEffect, useState } from 'react'
import '../style/Question.scss'
import axios from 'axios'
import { Table } from '../component/table-question/Table'

interface QuestionType {
    id: number
}

const Question = (props: QuestionType) => {

    const { id } = props

    const [questionData, setquestionData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const onChangeSearch = (value: any) => {
        setSearchValue(value.target.value)
    }

    useEffect(() => {
        axios.get('https://screening.moduit.id/frontend/web/question/one').then((res: any) => {
            if (res?.data) {
                console.log(res)
                setquestionData(res.data)
            }
        }).catch((err: any) => {
            console.log(err)
        })
    }, [])
    
    return (
        <div className="wrapper-question">
            <div className="question-header">
                <h2>Question {id}</h2>
                <div className='box'>
                    <div className='search-box'>
                        <input className='input-search' type="text" name="search" value={searchValue} onChange={onChangeSearch} placeholder="Search by Title"/>
                    </div>
                </div>
            </div>
            <div className="wrapper-table">
                <Table data={questionData} searchValue={searchValue}/>
            </div>
        </div>
    )
}

export default Question
