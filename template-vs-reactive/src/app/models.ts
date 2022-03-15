export interface Finanzamt {
  name: string;
  nr: string;
  subFinanzamt?: Finanzamt;
}
