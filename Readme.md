Angular 5/6/7
	Banuprakash C
	banu@lucidatechnologies.com
	banuprakashc@yahoo.co.in
	https://www.linkedin.com/in/banu-prakash-50416019/

	JavaScript
	---------------
		Scripting language, loosely typed
		
		var x = 10;
		var name = "Smith";
		name = 11;

		
	first.js
		var first = 100;

		function doTask()	{
			var second = 200;
			if(second > first) {
				third = 300;
				var fourth = 400;
			}
			console.log(first, second, third, fourth);
	     }
			
	doTask();
	console.log(first, second, third, fourth);
-----------------------------------------------------------------------------
		semicolon insertion
		
		function doTask() {
			return
				100;
		}

		var x = doTask(); // undefined
-------------------------------------------------------------------------------
	JavaScript executes within JavaScript engines
	V8 ==> Google ===> Chrome and NodeJS
	Chakra ==> MS ==> IE
	SpiderMonkey ==> FireFox, Adobe
	----------------------------------------------

	High Order Functions
		1) Functions which accept functions as arguments
		2) functions returning a function


	var doTask = function() {
	};
	
	High Order Functions are used in Functional Style of Programming.
	
	OOP we have methods, which are tightly coupled to state of Object
	
	commonly used high order functions:
		map 	==> transform data
		filter	==> filter
		reduce 	==> to execute aggregate functions on data
		forEach	==> traverse



		map(data, mapperFn).filter(data, predicateFn).forEach(data, action);

	
		https://shrib.com/#banu	

	for(var i =0; i < products.length; i++) {
    		console.log(products[i].name);
	}

	for(var i =0; i < products.length; i++) {
	   alert(products[i].name);
	}

	var data = [];
	data[0] = 33;
	data[20] = 120;


	
	function doTask();

	}

	var x = doTask(); // undefined

	get names of mobiles
	------------------------------------
	ES5
	ES2015 ==> ES 6 version enhancements
	ESNext

	---------
		Transpilers are used to convert ES 2015 code to ES 5 version
		babel
		ES2015 features

		1) Introduction of scoped variables and constants
			a) let
			b) const

		var first = 100;

		function doTask()	{
			let second = 200; // scoped with the functiion
			if(second > first) {
				third = 300;
				let fourth = 400; //scoped with the block
			}
			console.log(first, second, third, fourth);
	     }

	     2) Deconstructing

	     		let colors = ["red","green","blue","pink","orange"];

	     		// old way
	     		let red = colors[0];
	     		let green  = colors[1];

	     		let [red,green,blue,...others] = colors;
	     
	     3) Arrow Operator

	     	function add(x, y) {
	     		return x + y;
	     	}

	     	//new 

	     	let sub = (x,y) => {
	     		return x -y;
	     	}

	     	function filter(data, predicate) {
			    var result =[];
			        forEach(data,function(elem){
			            if(predicate(elem)){
			                result.push(elem);
			            }
			        })
			    return result;
			}
			var mobiles = filter(products, function(e) { return e.category === 'mobile'; });
			// new


			var mobiles = filter(products, (e) => e.category === 'mobile');


			let add = (x = 0, y =  0, z = 0) => x + y + z;

			add(3,4,7);
			add(3,4);
			add(3);
			add();

			===================================


			4) New String literal
				``
				Old Way:
					'Smith'
					"Smith";

				var name = "Rajesh";

				var msg = `
					Welcome, ${name}
					Please Report to HR!!!
				`;

			5) Promise API

				Synchonous Calls

				var result = doTask();
				cont...


				Promise based call:
				doTask().then( function(data){

				},
				function(err) {

				});
=================================================================================

	Node JS
	-------
		is Event loop based single threaded environment built on top of V8 JS engine
		Non-blocking API

		$("button").click(function doTask() {
			console.log("Hi!!!");
			High CPU intense operations
			OR 
			DB related
			OR 
			File Related
		});

		console.log("one");

		setInterval(function d() {
			console.log("two");
		}, 5000);

-------------------------------------------------------------------------
	TypeScript
	----------
		SuperSet of JavaScript, introduces types
		"ts" extension
		TypeScript Compilers are used to convert "ts" ---> "js"

		Transpilers [ BABEL] used to convert "ES2015/ESNext" --> "es5"

		Objects in JS:
			a) JSON
			b) var p = new Object();
				p.id = 10;

			c) Function Constructor

				function Book(id,name) {
					this.id = id;
					this.name = name;
				}

				Book.prototype.getId = function() {
					return this.id;
				}
				Book.prototype.setName = function(name) {
					this.name = name;
				}

				Book.prototype.getName = function() {
					return this.name;
				}

				let b = new Book(34,"Good Book");
				b.getId();
				b.getName();

				===============

				npm install -g @angular/cli
				https://github.com/BanuPrakash/intsol
				=============================

				Building SPA and RWD

				RWD ==> Responsive Web Design
					@mediaquery CSS3 feature
					We can use some frameworks to do this:
						Bootstrap --> Twitter
						Foundation, ZURB
				SPA ==> Single Page Application
					Challenges Faced while building SPA:
						a) Data Binding
								one-way binding and two-way binding
						b) Cache
						c) Routing
							Multipage different pages has differnt URL

							http://myserver.com
							For single page we may still need different URIs for views
							http://myserver.com/mobiles
							http://myserver.com/mobiles/iPhoneX
							http://myserver.com/tv
						...
				We need frameworks to acheive above:
					Angular, Backbone, ExtJS, React, VueJS, ...

				Angular --> Google
			--------------------------------------
				Angular 1.x ==> 1.6

				Angular 2/4/5/6/7 Framework

				Building blocks of Angular
				a) Module
				b) Component
				c) Service
				d) Directives
				e) Pipes


				Module: At least one module is required per application
					Module is to encapusalte components, services, directives, pipes
				Component:
					--> is a class which contains state and behaviour like any other class
					--> contains templates to render which in turn can use state and behaviour
						of that class
					--> styles
					---> selector
							<tv></tv>
					--> contains @Component decorator
				================

				Commands:
					1) install angluar/cli
						npm i -g @angular/cli
					2) Creating a new angular app
						ng new customerapp
						==> creates a folder "customerapp" with all scafolding code
					3) creating new class
						ng g class common/customer
					4) creating components
						ng g c customers
						ng g c customers/customer-card
					5) install bootstrap
						npm i --save bootstrap@3

					6) to use bootstrap include it in "styles.css"


					https://github.com/BanuPrakash/intsol

					=========

					Parent --> Child property data is passed using @Input

					Child -- > Parent and info has to passed it can be done
						using @Output() and EventEmitter

					[property]
					(event)
					import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[appHover]"
})
export class HoverDirective {

  @Input() config = {
    querySelector: '.image'
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener("mouseover") onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "block");
  }

  @HostListener("mouseout") onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "none");
  }
}

appHover [config]="{querySelector:'.card-body'}"

@HostBinding('style.border') border: string;
					============
					Running unit tests:
					ng test 
					Running unit test with code coverage:
					ng test --code-coverage

					=============

			In angular.json
				entry point is "main.ts"
				and start file is "index.html"

		main.ts
			--> loads "AppModule" bootstrap
		app.module.ts
			--> loads all components, service, directives , pipes
			--> bootstraps "AppComponent" app.component.ts

			app.component.html
				<app-customers></app-customers>
			--> loads CustomerCompoement
				customer.component.html
				--> app-customer-card
				--> loads CustomerCardCompoent

		--
			in index.html
				<app-root>
					which loads AppCompoenent
		================

		Directive unlike Component will not have Template and Styles.

		<img src="" width="50px" />

		Here img is an element/compoenent
		src, width are attributes / directives

		@Directive
		@HostListenener
		@HostBinding
	=================================================
		Component, Directive
		Service: 
			a) are injectable into component
			b) can contain business logic
			c) Interaction with RESTful Web SErvices
			d) Sharing data between components

		npm i -g json-server
		json-server --port 3000 --watch .\data.json


		Angular SErvice for RESTful Web SErvices
		-----------
		We can use Promise APIs
		or Observable

		Include HttpClientModule in app.module.ts
		provides HttpClient Service using which we can make AJAX calls

		Prior to Version 5:
		this.http.get(this.baseCustomerUrl).map(data => {
			data was transformed into customer[]
		});

		@import "../node_modules/font-awesome/css/font-awesome.min.css";
@import "../node_modules/primeng/resources/themes/nova-light/theme.css";
@import "../node_modules/primeng/resources/primeng.css";
@import '../node_modules/primeicons/primeicons.css';
import {DataTableModule} from 'primeng/datatable';

		 getCustomerAndOrders(id: number): Observable<Customer> {
    return forkJoin(this.getCustomer(id), this.getOrdersOfCustomer(id)).pipe(
      map(results => {
        results[0].orders = results[1];
        return results[0];
      })
    );
    }

========================

	@Injectable
	Observable

	<compa>
		<compb>
		<compb>
	<compa>
	
	@Compoenent
	class CompA {
		@ViewChild()
		compB: CompB;

		compB.doTask();
	}



	@Compoenent
	class CompB {
		doTask() {

		}
	}