import ButtonComp from './components/ButtonComp'

const App = () => {
  let text = "Hi mom!";
  return (
    <div>
      <ButtonComp>
        <button type="button" className='btn btn-primary'>{text}</button>
      </ButtonComp></div>
  )
}

export default App