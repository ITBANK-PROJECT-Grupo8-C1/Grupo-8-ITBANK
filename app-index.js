const coti = document.querySelector(".cotizacion");

const nombre = document.getElementById("nombre");
const compra = document.getElementById("compra");
const venta = document.getElementById("venta");
const variacion = document.getElementById("variacion");
const fecha = document.getElementById("fecha");

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((res) => res.json())
  .then((data) => {
    for (const ele of data) {
      // console.log(ele.casa.nombre) //primer logro.
      if (ele.casa.nombre !== "Argentina" && ele.casa.nombre !== "Dolar Soja") {
        // console.log(ele.casa.nombre);
        imprimirDatos(ele)
        
      }
    }
  });

function imprimirDatos(elemento) {

    p1 = document.createElement("p")
    p1.innerHTML = elemento.casa.nombre;
    
    p2 = document.createElement("p")
    p2.innerHTML = verificacion(elemento.casa.compra);
    
    p3 = document.createElement("p")
    p3.innerHTML = "$"+elemento.casa.venta;
    
    p4 = document.createElement("p");
    p4.innerHTML = variaSiONo(elemento.casa.variacion);
    p4.className = elemento.casa.variacion.includes("-") ? p4.className = "varia-red" : p4.className = "varia-green";
    
    p5 = document.createElement("p")
    p5.innerHTML = fecha_Actu();
    
    nombre.appendChild(p1)
    compra.appendChild(p2)
    venta.appendChild(p3)
    variacion.appendChild(p4)
    fecha.appendChild(p5)
}

function variaSiONo(varia) {
  if (varia == undefined) {
    return "-";
  } else {
    return varia + "%";
  }
}

function fecha_Actu() {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth()+1;
  const año = date.getFullYear();

  return dia + "/" + mes + "/" + año;
}

function verificacion(elemento) {
    if(elemento === "No Cotiza") {
        return elemento;
    } else {
        return "$"+elemento;
    }
}