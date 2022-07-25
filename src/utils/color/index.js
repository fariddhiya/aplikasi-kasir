const appColor = {
  blue1: '#400494',
  blue2: '#3c2c7c', //splash
  green1: '#ace4c4', //status penjualan
  green2: '#4cb4a4', //bar chart
  green3: '#08bc3c', //button bayar
  pink1: '#e8c4c4', //status pembayaran
  red1: '#ec2140', //text pembayaran
  grey1: '#dcdcdc', //background
  grey2: '#a4a4a4', //text secondary
  grey3: '#b4b4b4', //text placeholder
  grey4: '#e0dcdc', //background form
  yellow: '#bcdc04', //text daftar
  orange: '#ec8444',
  black: '#000000',
  white: '#ffffff',
};

export const colors = {
  text: {
    primary: appColor.black,
    secondary: appColor.white,
    tertiary: appColor.grey2,
    register: appColor.yellow,
    placeholder: appColor.grey3,
    buy: appColor.red1,
    sale: appColor.green1,
  },
  background: {
    primary: appColor.grey1,
    secondary: appColor.blue1,
    tertiary: appColor.white,
    splash: appColor.blue2,
    buy: appColor.pink1,
    sale: appColor.green1,
    input: appColor.grey4,
    otherProduct: appColor.orange,
  },
  chart: {
    line: appColor.red1,
    bar: appColor.green2,
  },
};
