import { Contact } from "../views/contact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contact: [],

			usuarios: [],

			contacts: []
		},


		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {

				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addContact: (Name, Email, Phone, Address, redireccionar) => {
				setTimeout(() => {
					const store = getStore();
					let nuevoUsuario = {
						FullName: Name,
						Email: Email,
						Phone: Phone,
						Address: Address
					}

					let nuevaListaUsuarios = [...store.usuarios, nuevoUsuario]
					setStore({ usuarios: nuevaListaUsuarios });
					redireccionar()

				}, 3000);

			},
			loadContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/diegoF")
					.then((response) => response.json())
					.then((response) => { setStore({ contacts: response }) })
					.catch(error => console.log(error))

			},

			borrarContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				})

					.then(response => {
						if (!response.ok) throw Error(response.statusText); return response.json();
					})

					.then(data => {
						console.log('contacto borrado', data)
						getActions().loadContacts();

					})

					.catch(error => {
						console.log('no se borro nada', error)
					})

			},

			añadirContact: (data, volverHome) => {
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				console.log(data)
				fetch("https://playground.4geeks.com/apis/fake/contact/", config)
					.then((response) => response.text())
					.catch(error => console.log('error', error))
					.then(response => {
						getActions().loadContacts();
						volverHome()

					});
			},

			editContact: (id, updatedContact, volverHome) => {

				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedContact),
				})
					.then(response => {
						if (response.ok) {
							// Puedes agregar lógica adicional aquí después de una solicitud exitosa
							console.log('editado exitosamente');
							getActions().loadContacts();
							volverHome()
						} else {
							// Manejo de errores, puedes lanzar una excepción o despachar otras acciones
							console.error('Error al editar el contacto');
						}
					})
					.catch(error => {
						console.error('Error en la solicitud PUT:', error);
					});




			},
		},
	};
}
export default getState;
