import { useReducer } from "react";
function App() {

  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <div className="bg-gradient-to-t from-green-500 p-40 flex justify-center">
        <div className="flex bg-gray-900/50 backdrop-blur-xl flex-col border rounded-xl border-gray-950 p-20">
          <div className="flex flex-col p-6 gap-20 justify-center align-middle">
            <h1 className="bg-slate-300/75 backdrop-blur-xl p-6 rounded-2xl text-3xl">{state.count}</h1>
            <div className="flex gap-20 justify-center">
              <button type="button" className="rounded-full text-3xl text-zinc-50 bg-orange-500 p-2" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
              <button type="button" className="rounded-full text-3xl text-zinc-50 bg-orange-500 p-2" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
