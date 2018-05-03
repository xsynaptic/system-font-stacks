// ==== SYSTEM FONT STACKS ==== //

const serif = {
  baskerville: [
    'Baskerville', 'Baskerville Old Face', 'Utopia', 'Hoefler Text', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  bigCaslon: [
    'Big Caslon', 'Book Antiqua', 'Bookman', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'URW Palladio L', 'DejaVu Serif', 'Georgia', 'serif',
  ],
  bodini: [
    'Bodoni MT', 'Didot', 'Didot LT STD', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  bookAntiqua: [
    'Book Antiqua', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'URW Palladio L', 'DejaVu Serif', 'Georgia', 'serif',
  ],
  calisto: [
    'Calisto MT', 'Bookman Old Style', 'Bookman', 'Goudy Old Style', 'Hoefler Text', 'Bitstream Charter', 'Charter', 'DejaVu Serif', 'Georgia', 'serif',
  ],
  cambria: [
    'Cambria', 'Hoefler Text', 'Utopia', 'DejaVu Serif', 'Liberation Serif', 'Georgia', 'serif',
  ],
  constantia: [
    'Constantia', 'Lucida Bright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Liberation Serif', 'Georgia', 'serif',
  ],
  didot: [
    'Didot', 'Didot LT STD', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  garamond: [
    'Garamond', 'Garamond-Normal', 'Baskerville', 'Baskerville Old Face', 'Utopia', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'serif',
  ],
  georgia: [
    'Georgia', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'URW Palladio L', 'Book Antiqua', 'DejaVu Serif', 'serif',
  ],
  goudy: [
    'Goudy Old Style', 'Hoefler Text', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  hoefler: [
    'Hoefler Text', 'Baskerville', 'Baskerville Old Face', 'Times New Roman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  lucidaBright: [
    'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'serif',
  ],
  palatino: [
    'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'URW Palladio L', 'Book Antiqua', 'DejaVu Serif', 'Georgia', 'serif',
  ],
  times: [
    'Times New Roman', 'TimesNewRoman', 'DejaVu Serif', 'Liberation Serif', 'Tinos', 'Times', 'serif',
  ],
};

const sansSerif = {
  arial: [
    'Arial', 'Helvetica Neue', 'Helvetica', 'Nimbus Sans L', 'Liberation Sans', 'Arimo', 'sans-serif',
  ],
  calibri: [
    'Calibri', 'Candara', 'Gill Sans', 'Gill Sans MT', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  candara: [
    'Candara', 'Calibri', 'Gill Sans', 'Gill Sans MT', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  century: [
    'Century Gothic', 'Apple Gothic', 'AppleGothic', 'URW Gothic L', 'Avantgarde', 'DejaVu Sans', 'Tahoma', 'sans-serif',
  ],
  corbel: [
    'Corbel', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  frutiger: [
    'Frutiger', 'Frutiger Linotype', 'Calibri', 'Gill Sans', 'Gill Sans MT', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  futura: [
    'Futura', 'Futura-Medium', 'Futura Medium', 'Avantgarde', 'Century Gothic', 'Apple Gothic', 'AppleGothic', 'URW Gothic L', 'DejaVu Sans', 'Tahoma', 'sans-serif',
  ],
  geneva: [
    'Geneva', 'Verdana', 'DejaVu Sans', 'sans-serif',
  ],
  gillSans: [
    'Gill Sans', 'Gill Sans MT', 'Calibri', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  helvetica: [
    'Helvetica Neue', 'Helvetica', 'Arial', 'Nimbus Sans L', 'Liberation Sans', 'Arimo', 'sans-serif',
  ],
  helveticaLight: [
    'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'Nimbus Sans L', 'Liberation Sans', 'Arimo', 'sans-serif',
  ],
  lucidaGrande: [
    'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  myriad: [
    'Myriad Web', 'Myriad Pro', 'Myriad', 'Gill Sans', 'Gill Sans MT', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  optima: [
    'Optima', 'Segoe', 'Segoe UI', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  segoe: [
    'Segoe', 'Segoe UI', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  systemGithub: [ // Current as of 2018
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif',
  ],
  systemWordPress: [ // https://make.wordpress.org/core/2016/07/07/native-fonts-in-4-6/
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif',
  ],
  tahoma: [
    'Tahoma', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
  trebuchet: [
    'Trebuchet MS', 'Futura', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Tahoma', 'sans-serif',
  ],
  verdana: [
    'Verdana', 'Geneva', 'DejaVu Sans', 'sans-serif',
  ],
  ubuntu: [
    'Ubuntu', 'Myriad Web', 'Myriad Pro', 'Myriad', 'Gill Sans', 'Gill Sans MT', 'DejaVu Sans', 'Verdana', 'Geneva', 'sans-serif',
  ],
};

const monospace = {
  andale: [
    'Andale Mono WT', 'Andale Mono', 'Menlo', 'Lucida Console', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'monospace',
  ],
  consolas: [
    'Consolas', 'Andale Mono WT', 'Andale Mono', 'Menlo', 'Lucida Console', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'monospace',
  ],
  courier: [
    'Courier New', 'Courier', 'Courier 10 Pitch', 'Liberation Mono', 'Nimbus Mono L', 'Cousine', 'monospace',
  ],
  menlo: [
    'Menlo', 'Consolas', 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'monospace',
  ],
  sfMono: [
    'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace',
  ],
  typewriter: [
    'Lucida Sans Typewriter', 'Lucida Typewriter', 'Courier New', 'Courier', 'Courier 10 Pitch', 'Liberation Mono', 'Nimbus Mono L', 'Cousine', 'monospace',
  ],
  ubuntuMono: [
    'Ubuntu Mono', 'Monaco', 'Consolas', 'Lucida Console', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'monospace',
  ],
};

const decorative = {
  comicSans: [ // http://www.mcdruid.co.uk/content/cursive-font-stack :]
    'Comic Neue', 'Comic Sans MS', 'Comic Sans', 'Chalkboard', 'ChalkboardSE-Regular', 'Marker Felt', 'Purisa', 'URW Chancery L', 'cursive',
  ],
  emoji: [
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  ],
  impact: [
    'Impact', 'Haettenschweiler', 'Franklin Gothic Bold', 'Charcoal', 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', 'sans-serif',
  ],
  papyrus: [
    'Papyrus', 'ITC Papyrus', 'fantasy',
  ],
};

const chinese = {
  zhSongtiSc: [ // Songti: similar to serif; think Times New Roman
    'Songti SC', 'STSong', '华文宋体', '宋体', 'SimSun', '新宋体', 'NSimSun', 'AR PL New Sung', 'AR PL SungtiL GB', 'serif',
  ],
  zhSongtiTc: [
    'LiSong Pro', 'Apple LiSung', '新細明體', 'PMingLiU', 'MingLiU', 'AR PL Mingti2L', 'TW-Sung', 'serif',
  ],
  zhHeitiSc: [ // Heiti: similar to sans-serif; think Helvetica/Arial
    'Heiti SC', 'Microsoft YaHei New', 'Microsoft Yahei', '微软雅黑', 'SimHei', '黑体', 'STHeiti Light', 'STXihei', '华文细黑', 'STHeiti', '华文黑体', 'WenQuanYi Zen Hei', 'sans-serif',
  ],
  zhHeitiTc: [
    'Heiti TC', 'Microsoft JhengHei', '微軟正黑體', 'sans-serif',
  ],
  zhKaitiSc: [ // Kaiti: a regular brush script
    'Kaiti SC', 'KaiTi', '楷体', 'STKaiti', '华文楷体', 'Kai', 'AR PL UKai CN', 'serif',
  ],
  zhKaitiTc: [
    'BiauKai', 'DFKai-SB', 'AR PL KaitiM', 'AR PL KaitiM GB', 'AR PL UKai HK', 'AR PL UKai TW', 'TW-Kai', 'serif',
  ],
  zhFangsongSc: [ // Fangsongti: stylized brush script; a fusion of kaiti and songti styles; only available for simplified Chinese insofar as I can tell
    'FangSong', 'Fang Song', '仿宋', 'STFangSong', '华文仿宋', 'serif',
  ],
};

module.exports = Object.assign({}, serif, sansSerif, monospace, decorative, chinese);
