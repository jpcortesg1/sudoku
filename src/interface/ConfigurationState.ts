import Theme from "@/enum/Theme";

export default interface ConfigurationState {
  theme: Theme;
  fontSize: Number;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  complementaryColor: string;
  lightComplementaryColor: string;
  dangerColor: string;
  successColor: string;
  warningColor: string;
  infoColor: string;
}

export interface ConfigurationStateBase extends Omit<ConfigurationState, "theme"> {}