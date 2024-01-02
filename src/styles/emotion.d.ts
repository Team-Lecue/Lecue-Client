import '@emotion/react';

type colors =
  | 'key'
  | 'white'
  | 'background'
  | 'LG'
  | 'WG'
  | 'MG'
  | 'DG'
  | 'BG'
  | 'black'
  | 'sub_pink'
  | 'sub_ivory'
  | 'sub_yellow'
  | 'sub_green'
  | 'sub_blue'
  | 'sub_purple';

type fonts =
  | 'Head1_B_20'
  | 'Head2_SB_18'
  | 'Title1_SB_16'
  | 'Title2_M_16'
  | 'Body1_R_16'
  | 'Body2_M_14'
  | 'Body3_R_14'
  | 'Body4_SB_14'
  | 'Caption1_R_12'
  | 'Caption2_SB_12'
  | 'E_Title1_SB_18'
  | 'E_Title2_SB_16'
  | 'E_Body1_SB_14'
  | 'E_Body2_R_14'
  | 'E_Caption_R_12'
  | 'Orange';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [key in colors]: string;
    };
    fonts: {
      [key in fonts]: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
  }
}
