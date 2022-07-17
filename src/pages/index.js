import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <title>TrashScan</title>
       <div className=" ">
          <div>
          <header className="background bg-blend-color-dodge bg-yellow-300 rounded-3xl rounded-t-none pt-4">
              <img src={Logo} className="object-contain h-16 w-16 flex ml-72 pb-24" ></img>
          </header>
        </div>
        <img src={Card} className="rounded-3xl flex object-contain mt-10 w-80"></img>
        <div className="block bg-black my-80 text-white">
          <p>hello</p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
