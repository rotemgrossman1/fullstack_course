
function App() {
  const getMorningGreeting = () => { return "Good morning!" }
  const getEveningGreeting = () => { return "Good evening!" }
  const getGreeting = ()=> {
  if (new Date().getHours() < 16) {
              return getMorningGreeting()
            }else{
              return getEveningGreeting()
            }
  }
  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 2</h4 >
        <div className="exercise" id="spotcheck-2">
          <h1>Spot-check 2</h1>
          {
            getGreeting()
            
          }
          
          
        </div>
      </div>
    </div>
  )
}


export default App;