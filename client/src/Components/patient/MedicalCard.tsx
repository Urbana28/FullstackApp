import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const MedicalCard = () => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
    });

    function createData(date: string, diagnosis: string, therapy: string, doctor: string) {
        return {date, diagnosis, therapy, doctor};
    }

    const rows = [
        createData('04.05.2020', 'Кариес дентина 26', 'Пломба "Gradia" ', 'Ярош'),
        createData('20.04.2020', 'Острый пульпит 27', 'анестезия, "Depulpin", "Septopac" ', 'Ярош'),
        createData('13.04.2020', 'Зубные отложения', 'проф.гигиена, фтор-лак', 'Ярош')
    ];


        const classes = useStyles();

        return (

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Дата</TableCell>
                            <TableCell align="right">Диагноз</TableCell>
                            <TableCell align="right">Лечение</TableCell>
                            <TableCell align="right">Врач</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.date}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">{row.diagnosis}</TableCell>
                                <TableCell align="right">{row.therapy}</TableCell>
                                <TableCell align="right">{row.doctor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        )
}
export default MedicalCard;