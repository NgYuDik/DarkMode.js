const DarkSystemColor_ForDark_Dic = { //set for dark mode.
  "--text--color":"#fff",
  "--background-color":"black"
};

const DarkSystemColor_ForLight_Dic = { //set for light mode.
    "--text--color":"black",
    "--background-color":"#fff"
};

  //////////////////////////////////////////////////////////////////////////
 /////  Only adjust the above. Do not modify the following code!!!   /////
////////////////////////////////////////////////////////////////////////


function DarkModeSwitch () {
    var DarkSystemMode = getCookie('DarkSystemMode')

    const darkKeys = Object.keys(DarkSystemColor_ForDark_Dic);
    const lightKeys = Object.keys(DarkSystemColor_ForLight_Dic);

    if (darkKeys.length !== lightKeys.length || !darkKeys.every(k => lightKeys.includes(k))) {
      alert("Error. the ColorDic length is not the same.");
      return;
    }

    if(DarkSystemMode == "light"){
      setCookie('DarkSystemMode','dark');
      Object.entries(DarkSystemColor_ForDark_Dic).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
      });
    }
    else {
      setCookie('DarkSystemMode', 'light');
      Object.entries(DarkSystemColor_ForLight_Dic).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
      });
    }
}

//Made By RleoDik(https://github.com/NgYuDik/DarkMode.js)