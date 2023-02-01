export enum StateCode {
  AA = 'AA',
  AE = 'AE',
  AK = 'AK',
  AL = 'AL',
  AP = 'AP',
  AR = 'AR',
  AZ = 'AZ',
  CA = 'CA',
  CO = 'CO',
  CT = 'CT',
  DC = 'DC',
  DE = 'DE',
  FL = 'FL',
  GA = 'GA',
  GU = 'GU',
  HI = 'HI',
  IA = 'IA',
  ID = 'ID',
  IL = 'IL',
  IN = 'IN',
  KS = 'KS',
  KY = 'KY',
  LA = 'LA',
  MA = 'MA',
  MD = 'MD',
  ME = 'ME',
  MH = 'MH',
  MI = 'MI',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MS = 'MS',
  MT = 'MT',
  NC = 'NC',
  ND = 'ND',
  NE = 'NE',
  NH = 'NH',
  NJ = 'NJ',
  NM = 'NM',
  NV = 'NV',
  NY = 'NY',
  OH = 'OH',
  OK = 'OK',
  OR = 'OR',
  PA = 'PA',
  PR = 'PR',
  RI = 'RI',
  SC = 'SC',
  SD = 'SD',
  TN = 'TN',
  TX = 'TX',
  UT = 'UT',
  VA = 'VA',
  VI = 'VI',
  VT = 'VT',
  WA = 'WA',
  WI = 'WI',
  WV = 'WV',
  WY = 'WY',
}

export interface State {
  stateCode: StateCode;
  name: string;
}

export const StateCodeMap: Record<StateCode, string> = {
  [StateCode.AZ]: 'Arizona',
  [StateCode.AL]: 'Alabama',
  [StateCode.AK]: 'Alaska',
  [StateCode.AR]: 'Arkansas',
  [StateCode.CA]: 'California',
  [StateCode.CO]: 'Colorado',
  [StateCode.CT]: 'Connecticut',
  [StateCode.DE]: 'Delaware',
  [StateCode.FL]: 'Florida',
  [StateCode.GA]: 'Georgia',
  [StateCode.HI]: 'Hawaii',
  [StateCode.ID]: 'Idaho',
  [StateCode.IL]: 'Illinois',
  [StateCode.IN]: 'Indiana',
  [StateCode.IA]: 'Iowa',
  [StateCode.KS]: 'Kansas',
  [StateCode.KY]: 'Kentucky',
  [StateCode.LA]: 'Louisiana',
  [StateCode.ME]: 'Maine',
  [StateCode.MD]: 'Maryland',
  [StateCode.MA]: 'Massachusetts',
  [StateCode.MI]: 'Michigan',
  [StateCode.MN]: 'Minnesota',
  [StateCode.MS]: 'Mississippi',
  [StateCode.MO]: 'Missouri',
  [StateCode.MT]: 'Montana',
  [StateCode.NE]: 'Nebraska',
  [StateCode.NV]: 'Nevada',
  [StateCode.NH]: 'New Hampshire',
  [StateCode.NJ]: 'New Jersey',
  [StateCode.NM]: 'New Mexico',
  [StateCode.NY]: 'New York',
  [StateCode.NC]: 'North Carolina',
  [StateCode.ND]: 'North Dakota',
  [StateCode.OH]: 'Ohio',
  [StateCode.OK]: 'Oklahoma',
  [StateCode.OR]: 'Oregon',
  [StateCode.PA]: 'Pennsylvania',
  [StateCode.RI]: 'Rhode Island',
  [StateCode.SC]: 'South Carolina',
  [StateCode.SD]: 'South Dakota',
  [StateCode.TN]: 'Tennessee',
  [StateCode.TX]: 'Texas',
  [StateCode.UT]: 'Utah',
  [StateCode.VT]: 'Vermont',
  [StateCode.VA]: 'Virginia',
  [StateCode.WA]: 'Washington',
  [StateCode.WV]: 'West Virginia',
  [StateCode.WI]: 'Wisconsin',
  [StateCode.WY]: 'Wyoming',
  [StateCode.DC]: 'District of Columbia',
  [StateCode.AE]: 'Armed Forces Europe',
  [StateCode.GU]: 'Guam',
  [StateCode.MP]: 'Northern Mariana Islands',
  [StateCode.PR]: 'Puerto Rico',
  [StateCode.VI]: 'Virgin Islands',
  [StateCode.AA]: 'Armed Forces (AA)',
  [StateCode.AE]: 'Armed Forces (AE)',
  [StateCode.AP]: 'Armed Forces (AP)',
  [StateCode.MH]: 'Marshall Islands',
};
