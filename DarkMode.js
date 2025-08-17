const DarkSystemColor_Fordark_Dic = { //set for dark mode.
  "--text--color":"#fff",
  "--background-color":"black"
};

const DarkSystemColor_Forlight_Dic = { //set for light mode.
    "--text--color":"black",
    "--background-color":"#fff"
};

  //////////////////////////////////////////////////////////////////////////
 /////  Only adjust the above. Do not modify the following code!!!   /////
////////////////////////////////////////////////////////////////////////

var DarkSystemMode = getCookie('DarkSystemMode');

DarkModeApply(DarkSystemMode);

function DarkModeApply (ForMode) {
  let colorDictionary;
  switch (ForMode) {
    case 'dark':
      colorDictionary = DarkSystemColor_Fordark_Dic;
      break;
    case 'light':
      colorDictionary = DarkSystemColor_Forlight_Dic;
      break;
    default:
      console.error('Invalid mode:', ForMode);
      return;
  }

  if (!colorDictionary) {
    console.error('Color dictionary not found:', 'DarkSystemColor_For' + ForMode + '_Dic');
    return;
  }

  Object.entries(colorDictionary).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

function DarkModeSwitch () {
    const darkKeys = Object.keys(DarkSystemColor_Fordark_Dic);
    const lightKeys = Object.keys(DarkSystemColor_Forlight_Dic);

    DarkSystemMode = getCookie('DarkSystemMode');

    if (darkKeys.length !== lightKeys.length || !darkKeys.every(k => lightKeys.includes(k))) {
      alert("Error. The ColorDic length is not the same or keys don't match.");
      return;
    }

    if(DarkSystemMode == "light"){ //set for dark
      setCookie('DarkSystemMode','dark');
      DarkModeApply('dark');
    }
    else { //set for light
      setCookie('DarkSystemMode', 'light');
      DarkModeApply('light');
    }
}

//Made By RleoDik(https://github.com/NgYuDik/DarkMode.js)