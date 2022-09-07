<template>
    <div class="calendar">
        <div class="outer-input" id="date-picker" @click="focus()" @blur="blur()">
            <input type="text"
                   v-model="date"
                   @click="focus()"
                   @blur="blur()"
                   readonly
                   :placeholder="placeholder" />
            <svg @click="focus()"
                 @blur="blur()"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11V10.25C3.58579 10.25 3.25 10.5858 3.25 11H4ZM15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3H15.75ZM14.25 7C14.25 7.41421 14.5858 7.75 15 7.75C15.4142 7.75 15.75 7.41421 15.75 7H14.25ZM9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 7C8.25 7.41421 8.58579 7.75 9 7.75C9.41421 7.75 9.75 7.41421 9.75 7H8.25ZM3.25 19C3.25 20.5188 4.48122 21.75 6 21.75V20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25ZM6 21.75H18V20.25H6V21.75ZM18 21.75C19.5188 21.75 20.75 20.5188 20.75 19H19.25C19.25 19.6904 18.6904 20.25 18 20.25V21.75ZM20.75 19V11H19.25V19H20.75ZM20 10.25H4V11.75H20V10.25ZM3.25 11V19H4.75V11H3.25ZM4.75 19V7H3.25V19H4.75ZM6 4.25C4.48122 4.25 3.25 5.48122 3.25 7H4.75C4.75 6.30964 5.30964 5.75 6 5.75V4.25ZM20.75 11V7H19.25V11H20.75ZM18 5.75C18.6904 5.75 19.25 6.30964 19.25 7H20.75C20.75 5.48122 19.5188 4.25 18 4.25V5.75ZM18 4.25H6V5.75H18V4.25ZM14.25 3V7H15.75V3H14.25ZM8.25 3V7H9.75V3H8.25Z"
                      fill="#475348" />
            </svg>
        </div>
        <div class="calendar-layout" v-if="active" @mousedown.prevent>
            <div v-if="!year" class="calendar-header">
                <div class="row">
                    <span @click="setPreviousMonth()"> &#60; </span>
                    <div class="calendar-title" @click="openYear()">
                        {{ monthYearFormatted }}
                    </div>
                    <span @click="setNextMonth()"> &#62; </span>
                </div>
                <div class="calendar-days">
                    <div class="day" v-for="day in days" :key="day">
                        {{ day.substr(0, 3) }}
                    </div>
                </div>
            </div>
            <div v-if="year" class="calendar-header">
                <div class="row">
                    <div class="calendar-title">
                        {{ selectedYear }}
                    </div>
                </div>
            </div>
            <div v-if="!year" class="calendar-body">
                <div class="calendar-row"
                     v-bind:class="{ 'swipe-left': swipeLeft, 'swipe-right': swipeRight }"
                     v-for="(row, index) in calendarDays"
                     :key="index">
                    <div class="calendar-day"
                         :class="{
              disabled: isDisabled(cell),
              selected: !isDisabled(cell) && isSelected(cell),
              activecell: !isDisabled(cell),
            }"
                         v-for="(cell, index) in row"
                         :key="index"
                         @click="selectDay(cell)">
                        {{ cell.day }}
                    </div>
                </div>
            </div>
            <div v-if="year" class="calendar-body">
                <div class="calendar-row"
                     v-for="(row, index) in generateYears"
                     :key="'year' + index">
                    <div class="calendar-year calendar-day"
                         :class="{ selected: isSelectedYear(cell) }"
                         v-for="(cell, index) in row"
                         :key="index"
                         @click="selectYear(cell)">
                        {{ cell }}
                    </div>
                </div>
            </div>
            <div class="calendar-footer"></div>
        </div>
    </div>
</template>

<script>
    import { ref } from "vue";

    export default {
        name: "DatePickerComponent",
        props: {
            startYear: {
                type: String,
                default: "1979",
            },
            endYear: {
                type: String,
                default: new Date().getFullYear().toString(),
            },
            placeholder: {
                type: String,
                default: "Pick a date",
            },
        },

        filters: {
            trimThreeChar( item )
            {
                return item.substr( 0,3 );
            },
        },
        computed: {
            monthYearFormatted()
            {
                // Returns the current month name followed by the current year
                return (
                    this.monthes[ this.activeDate.substr( 4,2 ) ] + " " + this.selectedYear
                );
            },
            cellHeightUnit()
            {
                return this.cellHeight + "px";
            },
            generateYears()
            {
                let startYear = this.startYear;
                let endYear = new Date().getFullYear();
                let years = [];
                while ( startYear <= endYear )
                {
                    let tempYears = [];

                    for ( let idx = 0; idx < 5 && startYear <= endYear; idx++ )
                    {
                        tempYears.push( startYear );
                        startYear++;
                    }
                    years.push( tempYears );
                }
                return years;
            },
        },
        setup( props,{ emit } )
        {
            let date = ref( "" );
            let activeDate = ref( "201901" );
            let activeDay = ref( "" );
            let active = ref( false );
            const days = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ];
            const monthes = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                10: "October",
                11: "November",
                12: "December",
            };
            let calendarDays = ref( [] );
            let cellHeight = ref( 0 );
            let swipeLeft = ref( false );
            let swipeRight = ref( false );
            let year = ref( false );
            let selectedYear = ref( new Date().getFullYear() );
            let years = ref( [] );

            function openYear()
            {
                year.value = true;
            }
            function getYearRows()
            {
                return years.value.length - 1;
            }
            function focus()
            {
                active.value = true;
                cellHeight.value = document.getElementById( "date-picker" ).offsetWidth / 7;
            }
            function blur()
            {
                active.value = false;
            }
            function getCurrentDate()
            {
                // Returns today's date with format YYYY/MM/DD
                return new Date().toJSON().slice( 0,10 ).replace( /-/g,"/" );
            }
            function getCurrentDay()
            {
                // Returns current day within range 1-31
                return new Date().getDate();
            }
            function getCurrentMonth()
            {
                // Returns the current month as a 2 digits number
                return ( "0" + ( new Date().getMonth() + 1 ) ).slice( -2 );
            }
            function getPreviousMonth( month )
            {
                return parseInt( month ) == 1
                    ? "12"
                    : ( "0" + ( parseInt( month ) - 1 ) ).slice( -2 );
            }
            function getNextMonth( month )
            {
                return parseInt( month ) == 12
                    ? "01"
                    : ( "0" + ( parseInt( month ) + 1 ) ).slice( -2 );
            }
            function getCurrentYear()
            {
                // Returns the current year as a 4 digits number
                return new Date().getFullYear();
            }
            function getNumberOfDaysInMonth( year,month )
            {
                return new Date( year,month,0 ).getDate();
            }
            function getNumberOfDaysInPreviousMonth( year,month )
            {
                if ( month == "01" )
                    return new Date(
                        year - 1,
                        parseInt( getPreviousMonth( month ) ),
                        0
                    ).getDate();
                else
                    return new Date( year,parseInt( getPreviousMonth( month ) ),0 ).getDate();
            }
            function getNumberOfDaysInNextMonth()
            {
                if ( getNextMonth( getCurrentMonth() ) == "12" )
                    return new Date(
                        getCurrentYear() + 1,
                        parseInt( getNextMonth( getCurrentMonth() ) ),
                        0
                    ).getDate();
                else
                    return new Date(
                        getCurrentYear(),
                        parseInt( getNextMonth( getCurrentMonth() ) ),
                        0
                    ).getDate();
            }
            function getFirstDayOfMonth( year,month )
            {
                if ( new Date( year,parseInt( month ) - 1,1 ).getDay() - 1 == -1 ) return 6;
                else return new Date( year,parseInt( month ) - 1,1 ).getDay() - 1;
            }
            function getLastDayOfMonth( year,month )
            {
                return new Date( year,parseInt( month ) + 1,0 ).getDay();
            }
            function populateCalendar( year,month )
            {
                calendarDays.value = [];
                const firstDayOfMonth = getFirstDayOfMonth( year,month );
                const numberOfDaysInMonth = getNumberOfDaysInMonth( year,month );
                const numberOfRows = Math.ceil( numberOfDaysInMonth / 7 );
                let dayNumber = 1;

                // Number of rows to display
                for ( let x = 0; x <= numberOfRows; x++ )
                {
                    let row = [];
                    let rowLen = row.length;
                    // Fills the first row with previous month ending days
                    if ( x == 0 )
                    {
                        for ( let i = 0; i < firstDayOfMonth; i++ )
                        {
                            row.push( { day: "",month: "",year: "" } );
                        }
                        row.reverse();
                    }
                    // Fills the rest of the rows
                    rowLen = row.length;
                    for ( let y = rowLen; y < 7 && y < numberOfDaysInMonth; y++ )
                    {
                        // While current month days are not excedeed
                        if ( dayNumber <= numberOfDaysInMonth )
                        {
                            row.push( { day: dayNumber,month: month,year: year } );
                        } else
                        {
                            row.push( { day: "",month: "",year: "" } );
                        }
                        dayNumber++;
                    }
                    calendarDays.value.push( row );
                }
            }
            function setPreviousMonth()
            {
                let activeYear = activeDate.value.substr( 0,4 );
                let activeMonth = activeDate.value.substr( 4,6 );
                if ( parseInt( activeMonth ) == 1 )
                {
                    activeYear = parseInt( activeYear ) - 1 + "";
                    activeMonth = "12";
                } else
                {
                    activeMonth = ( "0" + ( parseInt( activeMonth ) - 1 ) ).slice( -2 );
                }
                activeDate.value = activeYear + activeMonth;
                selectedYear.value = parseInt( activeYear );
                populateCalendar( activeYear,activeMonth );
                animeSwipeRight();
            }
            function setNextMonth()
            {
                let activeYear = this.activeDate.substr( 0,4 );

                let activeMonth = this.activeDate.substr( 4,2 );
                if ( parseInt( activeMonth ) == 12 )
                {
                    activeYear = parseInt( activeYear ) + 1;
                    activeMonth = "01";
                } else
                {
                    activeMonth = ( "0" + ( parseInt( activeMonth ) + 1 ) ).slice( -2 );
                }
                activeDate.value = activeYear + activeMonth;
                selectedYear.value = parseInt( activeYear );
                populateCalendar( activeYear,activeMonth );
                animeSwipeLeft();
            }
            function selectDay( cell )
            {
                if ( !isDisabled( cell ) )
                {
                    if ( cell.month == getPreviousMonth( activeDate.value.substr( 4,2 ) ) )
                    {
                        setPreviousMonth();
                    } else if ( cell.month == getNextMonth( activeDate.value.substr( 4,2 ) ) )
                    {
                        setNextMonth();
                    }
                    activeDay.value = ( "0" + cell.day ).slice( -2 ) + cell.month + cell.year;
                    date.value =
                        ( "0" + cell.day ).slice( -2 ) + "/" + cell.month + "/" + cell.year;
                    InputChange();
                    active.value = false;
                }
            }
            function InputChange()
            {
                emit( "changeDate",date.value );
            }
            function selectYear( cell )
            {
                selectedYear.value = cell;
                activeDate.value = selectedYear.value + activeDate.value.substr( 4,6 );
                year.value = false;
                this.populateCalendar(
                    activeDate.value.substr( 0,4 ),
                    activeDate.value.substr( 4,6 )
                );
            }
            function isSelected( cell )
            {
                if (
                    ( "0" + cell.day ).slice( -2 ) + cell.month + cell.year ==
                    activeDay.value
                )
                    return true;
            }
            function isSelectedYear( cell )
            {
                if ( cell == selectedYear.value ) return true;
            }
            function isDisabled( cell )
            {
                if ( parseInt( cell.month ) !== parseInt( activeDate.value.substr( 4,2 ) ) )
                    return true;
            }
            function animeSwipeLeft()
            {
                swipeLeft.value = true;
                setTimeout( () =>
                {
                    swipeLeft.value = false;
                },300 );
            }
            function animeSwipeRight()
            {
                swipeRight.value = true;
                setTimeout( () =>
                {
                    swipeRight.value = false;
                },300 );
            }

            return {
                date,
                InputChange,
                activeDate,
                activeDay,
                active,
                days,
                monthes,
                calendarDays,
                cellHeight,
                swipeLeft,
                swipeRight,
                selectedYear,
                years,
                blur,
                getCurrentDate,
                getCurrentDay,
                getCurrentMonth,
                getPreviousMonth,
                getNextMonth,
                getCurrentYear,
                animeSwipeRight,
                animeSwipeLeft,
                isDisabled,
                isSelectedYear,
                isSelected,
                selectYear,
                selectDay,
                setNextMonth,
                setPreviousMonth,
                populateCalendar,
                openYear,
                getYearRows,
                focus,
                getLastDayOfMonth,
                getFirstDayOfMonth,
                getNumberOfDaysInNextMonth,
                getNumberOfDaysInPreviousMonth,
                getNumberOfDaysInMonth,
                year,
            };
        },
        mounted()
        {
            this.activeDate = this.getCurrentYear() + this.getCurrentMonth();
            this.populateCalendar(
                this.activeDate.substr( 0,4 ),
                this.activeDate.substr( 4,6 )
            );
        },
    };
</script>
<style>
    .outer-input {
        display: flex;
        justify-content: space-between;
        align-content: center;
        border-radius: 5px;
        padding: 5px 10px;
        border: 1px solid #475348;
    }

    input[type="text"] {
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        padding: 0px;
        background: #fff;
        border: none;
        border-radius: 5px;
        color: #475348;
    }

    .outer-input:focus {
        outline: none;
        border: 2px solid #475348;
    }

    .outer-input input[type="text"] {
        outline: none;
    }

        .outer-input input[type="text"]::placeholder {
            color: #475348;
        }

    .calendar {
        width: 100%;
        position: relative;
    }

        .calendar .calendar-layout {
            position: absolute;
            z-index: 1;
            max-width: 300px;
            width: 100%;
            display: flex;
            flex-direction: column;
            animation: appear 0.3s ease forwards;
            border-radius: 5px;
        }

            .calendar .calendar-layout .calendar-header {
                width: 100%;
                background-color: #475348;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #fff;
                box-sizing: border-box;
                padding: 10px 5px 5px 5px;
                border-radius: 5px 5px 0px 0px;
            }

                .calendar .calendar-layout .calendar-header .row {
                    width: 100%;
                    padding: 5px 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                }

    .row span {
        cursor: pointer;
    }

    .calendar .calendar-layout .calendar-header .row .calendar-title {
        font-size: 16px;
        cursor: pointer;
    }

    .calendar .calendar-layout .calendar-header .row i {
        font-size: 16px;
        cursor: pointer;
    }

    .calendar .calendar-layout .calendar-header .calendar-days {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 14px;
    }

        .calendar .calendar-layout .calendar-header .calendar-days .day {
            max-width: calc(100% / 7);
            padding: 4px;
            text-overflow: ellipsis;
            overflow: hidden;
        }

    .calendar .calendar-layout .calendar-body {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 200px;
        border-radius: 0px 0px 5px 5px;
        border: 1px solid #475348;
    }

        .calendar .calendar-layout .calendar-body::-webkit-scrollbar {
            width: 5px;
        }

        .calendar .calendar-layout .calendar-body::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #475348;
            border-radius: 5px;
        }

        .calendar .calendar-layout .calendar-body::-webkit-scrollbar-thumb {
            background-color: #475348;
            border-radius: 5px;
        }

        .calendar .calendar-layout .calendar-body .calendar-row {
            display: flex;
            flex-direction: row;
            transition: all 0.15s ease;
        }

            .calendar .calendar-layout .calendar-body .calendar-row .calendar-day {
                width: calc(100% / 7);
                max-width: calc(100% / 7);
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #f9f9f9;
                font-size: 14px;
                color: #606060;
                position: relative;
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 3px;
            }

                .calendar
                .calendar-layout
                .calendar-body
                .calendar-row
                .calendar-day.calendar-year {
                    width: calc(100% / 5);
                    max-width: calc(100% / 5);
                }

                .calendar .calendar-layout .calendar-body .calendar-row .calendar-day.disabled {
                    background-color: #f3f3f3 !important;
                }

                .calendar .calendar-layout .calendar-body .calendar-row .calendar-day.selected {
                    color: #475348;
                }

                    .calendar
                    .calendar-layout
                    .calendar-body
                    .calendar-row
                    .calendar-day.selected:after {
                        width: 100%;
                    }

                .calendar .calendar-layout .calendar-body .calendar-row .calendar-day:after {
                    content: "";
                    height: 3px;
                    width: 0px;
                    background: #475348;
                    position: absolute;
                    bottom: 0;
                    transition: all 0.3s ease;
                }

            .calendar
            .calendar-layout
            .calendar-body
            .calendar-row
            .activecell.calendar-day:hover {
                color: #475348;
            }

                .calendar
                .calendar-layout
                .calendar-body
                .calendar-row
                .activecell.calendar-day:hover:after {
                    width: 100%;
                }

            .calendar .calendar-layout .calendar-body .calendar-row.swipe-left {
                opacity: 0;
                transform: translateX(10px);
            }

            .calendar .calendar-layout .calendar-body .calendar-row.swipe-right {
                opacity: 0;
                transform: translateX(-10px);
            }

    @keyframes appear {
        from {
            transform: translateY(-10px);
            opacity: 0;
        }

        to {
            transform: translateY(5px);
            opacity: 1;
        }
    }
</style>
