import ListGroup from './components/ListGroup'
function App()
{
  let items = ["Uyole", "Posta", "Utukuyu", "Kati"];
  let names = ["jsd", "Postsada", "Utuksdaduyu", "sdads"];
  return <div><ListGroup items={items} heading="Cities"/>
  </div>
}

export default App;