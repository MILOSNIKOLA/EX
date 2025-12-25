export interface ColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      inverse: string;
    };
    error?: string;
    success?: string;
  }
  
  export interface DesignSystem {
    colorPalettes: {
      [key: string]: ColorPalette;
    };
    typography: {
      scale: {
        [key: string]: string;
      };
      fontFamily: {
        [key: string]: string[];
      };
      fontWeight: {
        [key: string]: number;
      };
    };
    spacing: {
      scale: {
        [key: string]: string;
      };
    };
    components: {
      button: {
        padding: {
          [key: string]: string;
        };
        borderRadius: string;
      };
      card: {
        borderRadius: string;
        padding: string;
        shadow: string;
      };
    };
    breakpoints: {
      [key: string]: string;
    };
  }