const coti = document.querySelector(".cotizacion");


fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(res => res.json())
    .then(data => {
        for (const ele of data) {
            // console.log(ele.casa.nombre) //primer logro.
            if (ele.casa.nombre !== 'Argentina' && ele.casa.nombre !== 'Dolar Soja') {
                // console.log(ele.casa.nombre);
                coti.innerHTML += `<tr>
                <td>${ele.casa.nombre}</td>
                <td>${ele.casa.compra}</td>
                <td>${ele.casa.venta}</td>
                <td>${variacion(ele.casa.variacion)}</td>
                <td>${fecha_Actu()}</td>
                </tr>`;
            }
        }
    })
    
function variacion(varia) {
    if (varia == undefined) {
        return '-';
    } else {
        return varia;
    }
}
function fecha_Actu(){
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth();
    const año = date.getFullYear();

    return dia+"/"+mes+"/"+año;
}