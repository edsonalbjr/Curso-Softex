class Strategy{
    
    execute(a, b)
}

class ConcreteStrategyAdd extends Strategy{
   execute(a, b) {
       return a + b
   
}

   }

class ConcreteStrategySubtract extends Strategy {
   
   execute(a, b) {

       return a - b
   }
}

class ConcreteStrategyMultiply extends Strategy {

   execute(a, b) {

       return a * b
   }
}

class Context {

   super(Strategy)
   setStrategy(strategy) {
       this.strategy = strategy
       executeStrategy(a, b); {
   
           return strategy.execute(a, b)

   }
   }
}

class ExampleApplication {

    main() {
       context = new Context
       if (action == addition) then
           context.setStrategy(new ConcreteStrategyAdd())
       
       if (action == subtraction) then
           context.setStrategy(new ConcreteStrategySubtract())
       
       if (action == multiplication) then
           context.setStrategy(new ConcreteStrategyMultiply())
       
       result = context.executeStrategy(number1, number2)
    }
}
