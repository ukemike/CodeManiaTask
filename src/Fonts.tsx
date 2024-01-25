import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
          @font-face {
              font-family: 'Helvetica Neue';
                font-style: normal;
                font-weight: 400;
                src: url('./fonts/Helvetica Neue/Helvetica Neue Regular.otf') format('otf');
          }
            @font-face {
                font-family: 'Helvetica Neue';
                font-style: normal;
                font-weight: 600;
                src: url('./fonts/Helvetica Neue/Helvetica Neue 67 Medium Condensed.otf') format('otf');
            }
            @font-face {
                font-family: 'Helvetica Neue';
                font-style: italic;
                font-weight: 600;
                src: url('./fonts/Helvetica Neue/Helvetica Neue 67 Medium Condensed Oblique.otf') format('otf');
            }
            @font-face {
                font-family: 'Helvetica Neue';
                font-style: normal;
                font-weight: 700;
                src: url('./fonts/Helvetica Neue/Helvetica Neue Condensed Bold.ttf') format('ttf');
            }
            @font-face {
                font-family: 'Helvetica Neue';
                font-style: normal;
                font-weight: 900;
                src: url('./fonts/Helvetica Neue/Helvetica Neue 97 Black Condensed.otf') format('otf');
            }
            @font-face {
                font-family: 'Helvetica Neue';
                font-style: italic;
                font-weight: 900;
                src: url('./fonts/Helvetica Neue/Helvetica Neue 97 Black Condensed Oblique.otf') format('otf');
            }
        `}
  />
);

export default Fonts;
