import React from 'react'
import style from '../styles/table.module.scss'

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    getKeyValue
} from "@nextui-org/table";

const rows = [
    {
        key: "1",
        name: "Pedro",
        room: "123",
        profesor: "EWA Pedro",
    },
    {
        key: "2",
        name: "Maciek",
        room: "122a3",
        profesor: "Matera",
    }
]

const columns = [
    {
        key: "name",
        label: "Nazwa Przedmiotu"
    },
    {
        key: "room",
        label: "sala",
    },
    {
        key: "profesor",
        label: "Nauczyciel"
    }
]

function table() {
  return (
    <>
        <div className={style.table}>
            <div className={style.row}>
                <div className={style.column}>
                    <p>Poniedziałek</p>
                </div>
                <div className={style.column}>
                    <p>8:00 - 9:30 ( tydz A )</p>
                    <p>Narzędzie pracy zespolowej labolatoria</p>
                    <p>mgr. inż. Jaromir Sarzyński</p>
                    <p>s.108 B4</p>
                </div>
                <div className={style.column}>
                    <p>9:45 - 11:15</p>
                    <p>Programowanie w języku C lab.</p>
                    <p>dr. inż. Bogusław Twaróg</p>
                    <p>s.308 B4</p>
                </div>
                <div className={style.column}>
                    <p>11:30 - 13:00</p>
                    <p>Analiza Matematyczna ćwiczenia</p>
                    <p>mgr. Gabriela Szajnowska</p>
                    <p>s.231 B1</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.column}>
                    <p>Wtorek</p>
                </div>
                <div className={style.column}>
                    <p>9:15 - 10:45 (tyg 6 - 15) </p>
                    <p>Wstęp do informatyki ćwiczenia</p>
                    <p>Dr. hab. Paweł Drygaś</p>
                    <p>s.211 B3</p>
                </div>
                <div className={style.column}>
                    <p>11:00 - 12:30 (tydz A)</p>
                    <p>Elementy logiki i teorii mnogości ćwiczenia</p>
                    <p>dr. Monika Homa</p>
                    <p>s.231 B1</p>
                </div>
                <div className={style.column}>
                    <p>12:45 - 14:15</p>
                    <p>Algebra liniowa z geometrią ćwiczenia</p>
                    <p>dr. Małgorzata Chudziak</p>
                    <p>s.250 B2</p>
                </div>
                <div className={style.column}>
                    <p>14:30 - 16:00 (tyg 1 - 5 )</p>
                    <p>Wstęp do informatyki ćwiczenia</p>
                    <p>dr. Anna Król</p>
                    <p>s. 231 B1</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.column}>
                    <p>Środa</p>
                </div>
                <div className={style.column}>
                    <p>8:00 - 10:15</p>
                    <p>Pakiety obliczeń inżynierskich labolatoria</p>
                    <p>dr hab. inż. Wiesław Paja, dr. hab. Rafał Rak</p>
                    <p>s. 268 B2</p>
                </div>
                <div className={style.column}>
                    <p>10:30 - 13:00</p>
                    <p>Analiza Matematyczna wykład</p>
                    <p>dr. Swietłana Minchewa-Kamińska</p>
                    <p>s. 167 B2</p>
                </div>
                <div className={style.column}>
                    <p>13:15 - 14:45</p>
                    <p>Algebra liniowa (A), Programowanie C (B) - wykłady</p>
                    <p>dr. hab. Janusz Sokół / dr. Michał Kępski</p>
                    <p>s.167 B2</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.column}>
                    <p>Czwartek</p>
                </div>
                <div className={style.column}>
                    <p>10:15 - 11:45</p>
                    <p>Wstęp do informatyki - wykłady</p>
                    <p>dr. hab. Paweł Drygaś</p>
                    <p>s.167 B2</p>
                </div>
                <div className={style.column}>
                    <p>12:00 - 13:30</p>
                    <p>Analiza matematyczna ćwiczenia</p>
                    <p>mgr. Gabriela Szajnowska</p>
                    <p>s.177 B2</p>
                </div>
                <div className={style.column}>
                    <p>13:45 - 15:15</p>
                    <p>Język angielski ćwiczenia</p>
                    <p>mgr. Magdalena Michniewicz</p>
                    <p>s.231 B1</p>
                </div>
                <div className={style.column}>
                    <p>15:30 - 17:00 (tydz A)</p>
                    <p>Elementy logiki i teorii mnogości wykłady</p>
                    <p>prof. dr. hab. Mykhaylo Zarichny</p>
                    <p>s.167 B2</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.column}>
                    <p>Piątek</p>
                </div>
                <div className={style.column}>
                    <p>Brak zajęć</p>
                    <p>Oby tak zostało</p>
                    <p>:prayge:</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default table