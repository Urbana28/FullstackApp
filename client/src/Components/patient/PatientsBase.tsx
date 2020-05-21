import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {deletePatientFromBase, getPatients} from "../../store/patientReducer";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {IconButton} from "@material-ui/core";
import '../../App.scss'
import {NavLink} from "react-router-dom";





const PatientsBase = () => {
    const patients = useSelector((state:AppStateType) => state.patientPage.patients)
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(getPatients())
    }, [dispatch])

    const deletePatient = useCallback((id:string) => {
        dispatch(deletePatientFromBase(id))
    }, [dispatch])


    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        head: {
            background: 'GhostWhite'
        },
        btn: {
            outline: "none",
            border: "none",
            background: "none"
        }
    });
    const classes = useStyles();


    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="medium" aria-label="a dense table">
                    <TableHead className={classes.head}>
                        <TableRow>
                            <TableCell align='left'>Фамилия</TableCell>
                            <TableCell align="center">Имя</TableCell>
                            <TableCell align="center">Отчество</TableCell>
                            <TableCell align="center">Пол</TableCell>
                            <TableCell align="center">Дата рождения</TableCell>
                            <TableCell align="center">Телефон</TableCell>
                            <TableCell align="right">Подробнее</TableCell>
                            <TableCell align="right">Удалить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients.map((p) => (
                            <TableRow  key={p._id}>
                                <TableCell align='left' component="th" scope="row">
                                    {p.surname}
                                </TableCell>
                                <TableCell align="center">{p.name}</TableCell>
                                <TableCell align="center">{p.patronymic}</TableCell>
                                <TableCell align="center">{p.gender}</TableCell>
                                <TableCell align="center">{p.birthDate}</TableCell>
                                <TableCell align="center">{p.phoneNumber}</TableCell>
                                <TableCell align="right">
                                    <NavLink to={`/patientPage/${p._id}`}>
                                        <IconButton className={classes.btn}><AccountCircleIcon /></IconButton>
                                    </NavLink>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton className={classes.btn} onClick={() => deletePatient(p._id)}><DeleteForeverIcon/></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default PatientsBase;