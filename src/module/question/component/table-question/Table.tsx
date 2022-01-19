import { useEffect, useState } from 'react'
import { TablePagination } from './TableFuntion'
import './Table.scss'

const tablePagination = new TablePagination()
const sliceArray = (data: any, page: number) => {
    const _data = [...data]
    return _data.slice((page - 1) * 10, page * 10)
}

interface TableData {
    createdAt: string
    description: string
    footer: string
    id: number
    tags?: string[]
    title: string
    category?: number
}

interface TableProps {
    data: TableData[]
    searchValue: string
}

export const Table = (props: TableProps) => {
    const { data, searchValue } = props

    const [viewPagination, setViewPagination] = useState(tablePagination.viewPagination)
    const [masterData, setMasterData] = useState<TableData[]>([])
    const [showData, setShowData] = useState<TableData[]>([])

    const initPagination = (data: any, currentPage?: number) => {
        tablePagination.totalData = data.length
        if (currentPage) tablePagination.currentPage = currentPage
        tablePagination.initPagination()
        setViewPagination(tablePagination.viewPagination)
        setShowData(sliceArray(data, tablePagination.currentPage))
    }

    useEffect(() => {
        setMasterData([...data])
        initPagination([...data], 1)
    }, [data])

    useEffect(() => {
        const _data = [...data]
        const _tempData = _data.filter((item) => { return item.title.toLowerCase().includes(searchValue) })

        setMasterData(_tempData)
        initPagination(_tempData, 1)
    }, [searchValue])

    const onClickPage = (page: number) => {
        initPagination([...masterData], page)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Footer</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {showData.map((item, index) => {
                        return (
                            <tr key={index.toString()}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.category || ""}</td>
                                <td>{item.footer}</td>
                                <td className='tags'>{item.tags}</td>
                            </tr>
                        )
                    })}
                </tbody>
                    <div className="bottom-table">
                    <div className="wrapper-btn-pagination">
                        {viewPagination.indexView.map((item, index) => {
                            return (
                                <div className={"btn-pagination " + (tablePagination.currentPage == item ? 'active' : '')} onClick={() => { onClickPage(item) }} key={index}>{item}</div>
                            )
                        })}
                    </div>
            </div>
            </table>
            
        </>
    )
}