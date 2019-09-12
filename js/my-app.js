// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/usuario/',
    	url: 'usuario.html',
    	name: 'usuario',
  		},
		{
		path: '/cart/',
    	url: 'cart.html',
    	name: 'cart',
  		},
		{
		path: '/nuevousuario/',
    	url: 'nuevousuario.html',
    	name: 'nuevousuario',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/empresas/',
    	url: 'empresas.html',
    	name: 'empresas',
  		},
		{
		path: '/pago/',
    	url: 'pago.html',
    	name: 'pago',
  		},
		{
		path: '/listo/',
    	url: 'listo.html',
    	name: 'listo',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/sobrenosotros/',
    	url: 'sobrenosotros.html',
    	name: 'sobrenosotros',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

