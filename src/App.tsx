import { useEffect, useState } from 'react'
import './App.css'
import { ArrowRight } from 'lucide-react'
import rumiImage from './assets/rumi-1.jpg'
function App() {

  const [prompt, setPrompt] = useState('Nurturing love and compassion in this sacred ground.')
  const [result, setResult] = useState<string[]>([])
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const url = import.meta.env.VITE_API_ENDPOINT
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          "input": {
            "prompt": prompt
          }
        })
      })
      const data = await response.json()
      const text = data.output.result.split('Title')[1]
      const textArray = text.split('')
      setOutput('')
      setResult([])
      for (let i = 0; i < textArray.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50)); // Adjust speed here (milliseconds)
        setResult(prev => [...prev, textArray[i]]);
      }
      setOutput(text)

    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleSubmit()
  }, [])



  return (
    <div className=" h-screen w-full  flex justify-center items-center " style={{ backgroundImage: `url(${rumiImage})`, backgroundSize: 'cover' }}>
      <div className='h-screen w-full bg-zinc-950/50 absolute z-0'></div>
      <div className='w-[90%] h-[90%]  z-10 flex flex-col justify-center items-center'>
        <div className='flex-1 text-white w-full font-bols text-xl flex  items-center justify-center xl:justify-end'>
          <pre className=' sm:w-[90%] lg:w-[70%] xl:w-1/3 text-center '>
            {result.map((char, index) => (
              <span key={index} className="fade-in">{char}</span>
            ))}
            {output && <pre className='text-sm text-gray-400 fade-in '>- Rumi</pre>}
          </pre>
        </div>
        <div className='bg-zinc-700/70  rounded-2xl w-full flex max-w-[500px] items-start p-3 '>
          <textarea className='border-2 flex-1 border-zinc-300  p-2 px-4  h-15 border-none  outline-none rounded-2xl bg-zinc-800/90 text-white ' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <button className='flex  justify-center items-center p-2 bg-zinc-300 rounded-full w-8 h-8 m-2 cursor-pointer' onClick={handleSubmit} disabled={loading}>

            {loading ? <div className='animate-spin w-4 h-4 border-t-2 border-r-2 border-black rounded-full'></div> :
              <ArrowRight />

            }
          </button>
        </div>
      </div>

    </div >
  )
}

export default App
