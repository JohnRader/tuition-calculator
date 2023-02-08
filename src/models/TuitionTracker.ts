export interface TuitionTracker {
  unitid: number;
  institution: string;
  alias?: string;
  city: string;
  abbreviation: string;
  lat: number;
  lon: number;
  hbcu: number;
  tribal_college: number;
  level: number;
  enrollmentperc_sticker: number;
  enrollmentperc_admitted: number;
  enrollmentenrollment_unknown: number;
  enrollmentenrollment_twomore: number;
  enrollmentenrollment_white: number;
  enrollmentenrollment_hisp: number;
  enrollmentenrollment_nathawpacisl: number;
  enrollmentenrollment_black: number;
  enrollmentenrollment_asian: number;
  enrollmentenrollment_amerindalasknat: number;
  enrollmentenrollment_nonresident: number;
  enrollmenttotal_men: number;
  enrollmenttotal_women: number;
  enrollmenttotal_enrollment: number;
}
