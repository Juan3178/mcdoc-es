/***var a;
var b;
var c;

a = prompt("ingrese un numero: ", "");
b = prompt("ingrese otro numero: ", "");
c = parseInt(a) + parseInt(b);

if (c>0) {
	document.write("La suma es: "+c+"\n");
	document.write("Numero positivo");
}
if (c<0) {
	document.write("La suma es: "+ c);
	document.write("Numero negativo");
}
if (c=0) {
	document.write("La suma es: "+ c);
	document.write("Numero cero");
}***/

const select = document.getElementById('mc_version');

const show_info_mc_version = document.getElementById('show_mc_version');

select.addEventListener('change', () => {

	const select_version_value = select.value;

	const select_version_option = select.options[select.selectedIndex].text;

	var svv_str = parseInt(select_version_value);

	//const select_num_version_option = select.options[select.selectedIndex].value;

	if (svv_str !== 0) { 
		const confirm_version_option = confirm(`Estás seguro de seleccionar \"${select_version_option}\" ahora?`);

		if (confirm_version_option) {

			//switch (select_num_version_option) {
			switch (svv_str) {
				default:
					show_info_mc_version.innerHTML = `<b style="color: red;">Por favor, seleccione una opción.</b>`;
				case 1:
					fetch('https://juan3178.github.io/mcdoc-es/storage.html').then(response => response.text()).then(inHTML => {show_info_mc_version.innerHTML = inHTML;});
					break;

				case 2:
					show_info_mc_version.innerHTML = `<h1>Texto aleatorio 23494o5fbfb</h1> ${select_version_option} </br><hr></br>Esta version aun no esta disponible al publico`;
					break;

			}
		}
		else {
			show_info_mc_version.innerHTML = `<b style="color: red;">Por favor, seleccione una opción.</b>`;
		}
	}

	else {
		show_info_mc_version.innerHTML = `<b style="color: red;">Por favor, seleccione una opción.</b>`;
	}
});


/*fetch('content.html').then(response => response.text()).then(inHTM => {show_info_mc_version.innerHTML = inHTM;});*/
