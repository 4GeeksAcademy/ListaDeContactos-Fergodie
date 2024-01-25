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

			addContact: (Name, Email, Phone, Address, redireccionar ) => {
				setTimeout(() => {
					const store = getStore();
					let nuevoUsuario = {
						FullName: Name,
						Email: Email,
						Phone: Phone,
						Address: Address
					}

					let nuevaListaUsuarios  = [... store.usuarios, nuevoUsuario]
					setStore({usuarios: nuevaListaUsuarios});
					redireccionar()
					
				}, 3000);

			},
			loadContacts: () => {
				fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/diegoF")
				.then((response) => response.json())
				.then((response) => {setStore({contacts:response})})
				.catch(error => console.log (error))
				
			},

			
          
		}
	};
};

export default getState;
