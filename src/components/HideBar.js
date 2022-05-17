import React from 'react';

function HideBar(){
    const css = '.side-menu, .menu-infos{ display: none !important;} .conteudo{ margin: 0; padding: 0; transition: none;}';
    return <style>{css}</style>;
}

export default HideBar;