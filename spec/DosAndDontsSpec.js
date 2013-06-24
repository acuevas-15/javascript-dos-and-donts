describe("Javascript", function() {

  describe("scope", function() {
    it("javascript has global variables, also variables are global by default", function() {
	  var someFunction = function() {newVariable = "Hello, World!"};
	  someFunction();
	  
	  expect(newVariable).toBe("Hello, World!");
	});
	
	describe("DO:", function() {
	  it("remember to use the 'var' keyword, this keyword assigns things to function scope, not global scope", function(){
	    delete newVariable;
	  
	    var someFunction = function() { var newVariable = "Hello, World!"};
		someFunction();
		
		try{ console.log(newVariable); }catch(error){
		  expect(error.name).toBe("ReferenceError");
		}
	  });
	  
	  describe("organize your code into namespaces, in order to avoid name collisions", function(){
	    
		it("it is risky to declare functions or initialize variables in the global namespace", function(){
		  //here I declare a simple function, and run it to confirm that it works
		  var concat = function(str1, str2){return str1 + str2};
		  expect(concat("Hello, ", "World!")).toBe("Hello, World!");
		  
		  var concat = function(home, cat){home.cat = cat};
		  var newHome = {};
		  var cat = {}; cat.name = 'MewCat';
		  expect(concat("Hello, ", "World!")).not.toBe("Hello, World!");//here we overrode our initial function
		  
		  delete concat;
		});
		
		it("in order to create a namespace in javascript, simply declare an object and assign a property to it. Nest objects where necessary", function() {
		  var CatStore = {};
		  CatStore.StringUtils = {};
		  CatStore.CustomerTracker = {};
		  CatStore.StringUtils.concat = function(str1, str2){return str1 + str2};
		  CatStore.CustomerTracker.concat = function(home, cat){home.cat = cat};
		  
		  expect(CatStore.StringUtils.concat("Hello, ", "World!")).toBe("Hello, World!");
		});
		
	  });
	  
	  describe("use function expressions", function(){
	    it("helps you prevent name collisions in your functions, like your variables", function(){
		  var CatStore = {};
		  CatStore.StringUtils = {};
		  CatStore.CustomerTracker = {};
		  CatStore.StringUtils.concat = function(str1, str2){return str1 + str2};
		  CatStore.CustomerTracker.concat = function(home, cat){home.cat = cat};
		  
		  expect(CatStore.StringUtils.concat("Hello, ", "World!")).toBe("Hello, World!");
		});
	  });
	});
	describe("DONT:", function(){
	  it("use declarative functions, as they are always added to the global namespace", function(){
	    
		  function concat(str1, str2){
		    return str1 + str2;
		  }
		  concat("this won't do what you expect", "!!!");
		  function concat(home, cat){home.cat = cat};
		  
		  function concat(){console.log("hey, this function actually overrode the string function before it was even executed!");}
	  });
	});
	
  });
  
  describe("the == operator (double equals)", function(){
	describe("DO: use the === operator more often (triple equals)", function(){
	  it("the === operator doesn't trouble itself with different type comparison nonsense...", function(){
	    expect((2 === "2")).not.toBe(true);
	  });
	});
    describe("DONT: use the == operator carelessly", function(){
	  it("the == operator tries to compare value of different types, using complicated rules that are difficult to master", function(){
	    expect((2 == "2")).toBe(true);
		
		expect((0 == '0')).toBe(true);
		expect((0 == '')).toBe(true);
        expect(('' == '0')).toBe(false);		//really, if this were transitive then this should be true...
		
		expect((false == 'false')).toBe(false) //i might have expected this to be true...
	  });
	});
  });
  
  describe("wrapper classes", function(){
    describe("DONT: use typed wrappers", function(){
	  	it("all wrappers evaluate to true in an if block, because all objects are truthy", function(){
		  var fAlse = new Boolean(false);
		  if(fAlse){
		    console.log("Boolean(false) just passed through an if() check...");
		    expect((fAlse == true)).toBe(false); //this code will always be reached because if blocks use the == operator and all objects are true according to ==
		  }
		});
		it("wrappers confuse the === operator (triple equals), which is generally safer to use that the == operator (double equals)", function(){
		  var tRue = new Boolean(true);
		  
		  expect((tRue === true)).toBe(false);
		}); 
	});
	it("DO: use literals instead", function(){
	  if(false){ 
	    expect(false).toBe(true); //this statement will never execute
	  }
	});
	
  
  });
});