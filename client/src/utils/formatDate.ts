export const formatDate = (date: string | undefined) => {
  if (date) {
    const p = new Date(date);

    const month = getStringMonth(p.getMonth());

    const time = formatTime(p.getHours(), p.getMinutes());

    const ret =
      "Publicado em " + p.getUTCDate() + " de " + month + " às " + time;
    return ret;
  }
};

const getStringMonth = (month: number) => {
  let stringMonth: string;
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  for (let i = 0; i < months.length; i++) {
    if (month === i) {
      stringMonth = months[i];
      return stringMonth;
    }
  }
};

const formatTime = (hour: number, minute: number) => {
  return `${hour}:${minute}`;
};
