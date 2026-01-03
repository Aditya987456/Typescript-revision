
import './App.css'
import { Card } from './components/card'
import { SubmitForm } from './components/OrderForm'
import TodoCard from './components/todoCard'



function App() {

  return (
    <>
     <SubmitForm
     onSubmit={ (order)=>{
      console.log(`Order placed : ${order.name} and quantity: ${order.cups}`)
     } }
     
     />


     <div>
      <Card
      title='Hello saar'
      // here need to give in reatnode because we defined like that and react node is - html elements.
      footer = {<button>Order now</button>}
      />
     </div>

     <div>
      <TodoCard/>
     </div>

    </>
  )
}

export default App
