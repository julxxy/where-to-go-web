import './App.css'
import robots from './mockdata/robots.json'
import Robot from '@/components/Robot.tsx'

function App() {
  return (
    <div>
      <ul>
        {robots.map(({ id, name, email }) => (
          <Robot id={id} name={name} email={email} />
        ))}
      </ul>
    </div>
  )
}

export default App
