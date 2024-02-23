import moment from "moment"

const TimeFromDate = ({start}:{start: string | Date}) => {
    const dateCreated =  moment(start);
    const now = moment()  
    const displayDate = Math.abs(dateCreated.diff(now, "days")) > 7 ? " on " + dateCreated.format("ll") : dateCreated.from(now)
    return(<>{displayDate}</>)
}

export default TimeFromDate