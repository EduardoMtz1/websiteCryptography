function muestraFrame(valor){
    switch(valor){
        case 1:
            document.getElementById("frameInformacion").style.display='block';
            document.getElementById("frameFormacion").style.display='none';
            document.getElementById("frameHobies").style.display='none';
            document.getElementById("frameCriptografia").style.display='none';
            break;
        case 2:
            document.getElementById("frameInformacion").style.display='none';
            document.getElementById("frameFormacion").style.display='block';
            document.getElementById("frameHobies").style.display='none';
            document.getElementById("frameCriptografia").style.display='none';
            break;
        case 3:
            document.getElementById("frameInformacion").style.display='none';
            document.getElementById("frameFormacion").style.display='none';
            document.getElementById("frameHobies").style.display='block';
            document.getElementById("frameCriptografia").style.display='none';
            break;
        case 4:
            document.getElementById("frameInformacion").style.display='none';
            document.getElementById("frameFormacion").style.display='none';
            document.getElementById("frameHobies").style.display='none';
            document.getElementById("frameCriptografia").style.display='block';
            break;
    }
}