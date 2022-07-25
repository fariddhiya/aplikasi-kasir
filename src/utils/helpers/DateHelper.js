import moment from 'moment';

const FormatterDate = ({date}) => {
  moment.locale('id', {
    months: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agu_Sep_Okt_Nov_Des'.split('_'),
    weekdaysShort: 'Senin_Selasa_Rabu_Kamis_Jumat_Sabtu_Minggu'.split('_'),
  });
  moment.locale('id');
  moment.updateLocale('id');
  const dateMoment = moment(date).format('ddd, DD MMM YYYY');
  return dateMoment;
};

export {FormatterDate};
