import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch} from "react-redux";
import {getPatients} from "../../store/patientReducer";

interface IProps {
    totalCount: number,
    limit: number
}

const Paginator:React.FC<IProps> = ({totalCount, limit}) => {
    const pagesCount = Math.ceil(totalCount / limit);
    const dispatch = useDispatch()

    return (
        <div>
            <Pagination color='primary' onChange={(event, page) => {dispatch(getPatients(page, limit))}} count={pagesCount} />
        </div>
    )
}

export default Paginator;