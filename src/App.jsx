import { useState } from "react";
import "./App.css";
import moment from "moment";

function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      {/* <DateTime date={props.date} /> */}
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video
      key={item.url}
      url={item.url}
      date={item.date}
    />
  ));
}

function DateTimePretty(props) {
  const date = moment(props.date);
  const now = moment();
  const duration = moment.duration(now.diff(date));
  const minutes = parseInt(duration.asMinutes());
  let time = '';
  if (minutes < 60) {
    time = getMinutes(minutes);
  } else if (minutes < 24*60) {
    const hours = parseInt(minutes / 60);
    time = getHours(hours);
  } else {
    const days = parseInt(minutes / (24*60))
    time = getDays(days);
  }
  return <div>{time}</div>
}

function getMinutes(minutes) {
  if (minutes % 10 === 1) {
    return `${minutes} минута назад`;
  } else {
    return `${minutes} минут назад`;
  }
}

function getHours(hours) {
  const sub = hours % 10;
  if (sub === 1) {
    return `${hours} час назад`;
  } else if (sub > 1 && sub < 5) {
    return `${hours} часа назад`;
  } else {
    return `${hours} часов назад`;
  }
}

function getDays(days) {
  const sub = days % 10;
  if (sub === 1) {
    return `${days} день назад`;
  } else if (sub > 1 && sub < 5) {
    return `${days} дня назад`;
  } else {
    return `${days} дней назад`;
  }
}


export default App;
