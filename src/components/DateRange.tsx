import { useRef, useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DateObject = {
    startDate: Date | undefined,
    endDate: Date | undefined,
}

type DateRangeCompProps = {
    dateChange: (date: DateObject) => void
}

const DateRangeComp: React.FC<DateRangeCompProps> = ({dateChange}) => {
  const [startDate, setStartDate] = useState<undefined | Date>();
  const [endDate, setEndtDate] = useState<undefined | Date>();

  const range = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  // Handling datechanges and providing dates to parent element
  const dateChangeHandler = (item: RangeKeyDict) => {
    setStartDate(item.selection.startDate);
    setEndtDate(item.selection.endDate);

    dateChange({startDate: item.selection.startDate, endDate: item.selection.endDate});
  }

  return (
    <div className="calendarWrap">
      <input
        value={
          range.startDate && range.endDate
            ? `${format(range.startDate, "MM/dd/yyyy")} to ${format(
                range.endDate,
                "MM/dd/yyyy"
              )}`
            : "Filter date"
        }
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={dateChangeHandler}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={[range]}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
