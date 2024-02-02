export default function Calendar({ src }: { src: string }) {
  const desktopCalendar = (
    <iframe
      src={`https://calendar.google.com/calendar/embed?height=467&wkst=1&bgcolor=%23F6BF26&ctz=America%2FNew_York&showDate=1&showPrint=0&showCalendars=0&showNav=0&showTitle=0&showTabs=0&showTz=0&title=GEcos%20Calendar&src=${src}&color=%23795548`}
      style={{
        borderWidth: 0,
      }}
      width="342"
      height="467"
      className="rounded-xl shadow-lg shadow-primary-2-200 hidden lg:block"
    />
  );
  const mobileCalendar = (
    <iframe
      src={`https://calendar.google.com/calendar/embed?height=321&wkst=1&bgcolor=%23F6BF26&ctz=America%2FNew_York&showDate=1&showPrint=0&showCalendars=0&showNav=0&showTitle=0&showTabs=0&showTz=0&title=GEcos%20Calendar&src=${src}&color=%23795548`}
      style={{
        borderWidth: 0,
      }}
      width="308"
      height="321"
      className="rounded-xl shadow-lg shadow-primary-2-200 lg:hidden"
    ></iframe>
  );
  return (
    <>
      {desktopCalendar}
      {mobileCalendar}
    </>
  );
}
