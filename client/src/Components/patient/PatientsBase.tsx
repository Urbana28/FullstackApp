import React, {useEffect} from 'react';
import MaterialTable, {Column} from 'material-table';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {getPatients} from "../../store/patientReducer";


interface Row {
    name: string;
    surname: string;
    patronymic: string;
    birthDate: string;
    phoneNumber: string;
    gender: string
}

interface TableState {
    columns: Array<Column<Row>>;

}

const PatientsBase = () => {
    const patients = useSelector((state:AppStateType) => state.patientPage.patients)
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getPatients())
    }, [dispatch])


    const [state, setState] = React.useState<TableState>({
        columns: [
            {title: 'Фамилия', field: 'surname'},
            {title: 'Имя', field: 'name'},
            {title: 'Отчество', field: 'patronymic'},
            {title: 'Дата рождения', field: 'birthDate'},
            {title: 'Номер телефона', field: 'phoneNumber'},
        ]
    });

    return (
        <div>
            <MaterialTable
                title="База пациентов"
                columns={state.columns}
                data={patients}
            />
        </div>
    );
}

export default PatientsBase;