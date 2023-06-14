


export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-4">GMX Contract Querying Example</h1>
          <p className="text-lg text-gray-400 mb-8">Querying and getting values for contract address 0x489ee077994B6658eAfA855C308275EAd8097C4A. This project is for interview purposes only. Created by Marc Bernardino.</p>
          <a href="#" className="btn btn-primary">Call Function</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus mi vitae nunc molestie, et euismod ex fermentum.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus mi vitae nunc molestie, et euismod ex fermentum.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus mi vitae nunc molestie, et euismod ex fermentum.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2023 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
