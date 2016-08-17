# Private members inside template example

This repo demonstrates that accessing private members of the Component class from template is technically wrong. Because template lives outside of the scope of Component class and should be treated accordingly.

# Explanations

Take a look at the [`main_module.ngfactory.ts`](https://github.com/devoto13/angular2-private-members-example/blob/master/main_module.ngfactory.ts). Class [`_View_MyComponent0`](https://github.com/devoto13/angular2-private-members-example/blob/master/main_module.ngfactory.ts#L238) is the thing responsible for interactions between component and template. It contains instance of `MyComponent` in the `context` variable and therefore accesses its members from outside of the component's scope ([`greeting` variable](https://github.com/devoto13/angular2-private-members-example/blob/master/main_module.ngfactory.ts#L281) and [`changeGreeting` method](https://github.com/devoto13/angular2-private-members-example/blob/master/main_module.ngfactory.ts#L290)). 

The only reason why it works in browser is because TypeScript's `private` keyword doesn't really make member private. Dynamic template compilation happens at runtime and JS doesn't have any concept of private members (yet?). Credit goes to [Sander Elias](https://groups.google.com/d/msg/angular/D_O_1fqA9WQ/pRNQARRiBgAJ) for putting me on the right track. 

With `ngc` and static template compilation, you'll get errors if you try accessing private members of the component from template. Clone demonstration repo, change `MyComponent` members' visibility to private  and you will get compilation errors, when running `ngc`.

# Run yourself

	$ git clone https://github.com/devoto13/angular2-private-members-example.git
	$ cd angular2-private-members-example/
	$ npm install
	$ npm build
