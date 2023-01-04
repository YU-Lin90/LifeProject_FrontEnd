import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useMemo, useEffect } from 'react';
import textPack from '../../LanguageTexts';
import { useLaguage } from '../../Context/LaguageProvider';
import { useFunc } from '../../Context/FunctionProvider';
function Calender() {
  const { loginCheckGetFetch } = useFunc();
  const localizer = momentLocalizer(moment);
  const [eventList, setEventList] = useState([]);
  const [messages, setMessages] = useState({});
  const { laguage } = useLaguage();
  const { calenderText } = textPack;
  const getMemberSchedule = async () => {
    const res = await loginCheckGetFetch('getMemberSchedules', 'memberAuth');
    console.log(res);
    if (res.success) {
      setEventList(res.data);
    }
  };
  const { defaultDate, formats } = useMemo(
    () => ({
      defaultDate: new Date(),
      formats: {
        dayFormat: (date, culture, localizer) =>
          localizer.format(date, 'ddd MM/DD', culture),
      },
    }),
    []
  );
  const addTexts = () => {
    const text = calenderText[laguage];
    setMessages(text);
  };
  const myEventsList = [
    // {
    //   title: '12345',
    //   start: '2022-12-21 00:00:00',
    //   end: '2022-12-26 12:00:00',
    //   allDay: false,
    // },
    {
      title: '23456',
      start: new Date(),
      end: new Date(),
      allDay: false,
    },
  ];
  useEffect(() => {
    // setEventList(myEventsList);
    getMemberSchedule();
  }, []);
  useEffect(() => {
    addTexts();
  }, [laguage]);
  return (
    <>
      <div>
        <Calendar
          defaultDate={defaultDate}
          localizer={localizer}
          events={eventList}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            backgroundColor: '#ccfc',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
          }}
          formats={formats}
          messages={messages}
        />
      </div>
    </>
  );
}
export default Calender;
