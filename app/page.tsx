export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Bangladesh PC Parts API</h1>
          <p className="mt-2 text-blue-100">A RESTful API for PC component prices from Bangladeshi retailers</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">API Documentation</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            This API allows you to scrape and compare PC component prices from multiple Bangladeshi e-commerce sites.
            Use it to build price comparison tools, PC building applications, or to monitor price changes.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Endpoints
          </h3>

          <div className="mb-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4">
              <div className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  GET
                </span>
                <h4 className="font-bold text-lg text-slate-800 dark:text-white">Search Products</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">/api/products</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Search for products across all supported retailers.
              </p>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Parameters:</h5>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4">
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        query
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-red-500 dark:text-red-400 font-medium">required</span> - Search term
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        limit
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">optional</span> - Maximum
                        number of products per retailer (default: 20)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Request:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-sm overflow-x-auto">
                  <code>GET /api/products?query=ryzen&limit=10</code>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Response:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "products": [
    {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,500",
      "image": "https://www.startech.com.bd/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "In Stock",
      "source": "Startech",
      "url": "https://www.startech.com.bd/amd-ryzen-5-5600x-processor"
    },
    {
      "name": "AMD Ryzen 7 5800X Processor",
      "price": "৳ 27,500",
      "image": "https://www.startech.com.bd/image/cache/catalog/processor/amd/5800x/5800x-500x500.jpg",
      "availability": "In Stock",
      "source": "Startech",
      "url": "https://www.startech.com.bd/amd-ryzen-7-5800x-processor"
    },
    // More products...
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4">
              <div className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  GET
                </span>
                <h4 className="font-bold text-lg text-slate-800 dark:text-white">Get Components by Type</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">/api/components</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Get PC components by type from all supported retailers.
              </p>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Parameters:</h5>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4">
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        type
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-red-500 dark:text-red-400 font-medium">required</span> - Component type
                        (cpu, cpu-cooler, motherboard, memory, storage, video-card, case, power-supply, monitor)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        search
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">optional</span> - Search term
                        to filter results
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        limit
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">optional</span> - Maximum
                        number of components per retailer (default: 20)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Request:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-sm overflow-x-auto">
                  <code>GET /api/components?type=cpu&search=ryzen&limit=10</code>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Response:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "components": [
    {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,500",
      "image": "https://www.startech.com.bd/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "In Stock",
      "source": "Startech",
      "url": "https://www.startech.com.bd/amd-ryzen-5-5600x-processor",
      "specs": {
        "Cores": "6",
        "Threads": "12",
        "Clock Speed": "3.7GHz",
        "Cache": "35MB Cache"
      }
    },
    {
      "name": "AMD Ryzen 7 5800X Processor",
      "price": "৳ 27,500",
      "image": "https://www.techlandbd.com/image/cache/catalog/processor/amd/ryzen-7-5800x/amd-ryzen-7-5800x-processor-1-500x500.jpg",
      "availability": "In Stock",
      "source": "Techland",
      "url": "https://www.techlandbd.com/amd-ryzen-7-5800x-processor",
      "specs": {
        "Cores": "8",
        "Threads": "16",
        "Clock Speed": "3.8GHz",
        "Cache": "36MB Cache"
      }
    },
    // More components...
  ]
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4">
              <div className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  GET
                </span>
                <h4 className="font-bold text-lg text-slate-800 dark:text-white">Cross-Site Search</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">/api/cross-site-search</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Find similar products across different retailers for price comparison.
              </p>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Parameters:</h5>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4">
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        query
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-red-500 dark:text-red-400 font-medium">required</span> - Product name to
                        search for
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        excludeSource
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">optional</span> - Retailer to
                        exclude from results
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-mono text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded mr-2">
                        limit
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">optional</span> - Maximum
                        number of products per retailer (default: 10)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Request:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-sm overflow-x-auto">
                  <code>GET /api/cross-site-search?query=Ryzen%205%205600X&excludeSource=Startech</code>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Example Response:</h5>
                <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "crossSiteProducts": {
    "Techland": {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,800",
      "image": "https://www.techlandbd.com/image/cache/catalog/processor/amd/ryzen-5-5600x/amd-ryzen-5-5600x-processor-1-500x500.jpg",
      "availability": "In Stock",
      "source": "Techland",
      "url": "https://www.techlandbd.com/amd-ryzen-5-5600x-processor"
    },
    "UltraTech": {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,600",
      "image": "https://www.ultratech.com.bd/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "In Stock",
      "source": "UltraTech",
      "url": "https://www.ultratech.com.bd/amd-ryzen-5-5600x-processor"
    },
    "Potaka IT": {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,900",
      "image": "https://www.potakait.com/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "Out of Stock",
      "source": "Potaka IT",
      "url": "https://www.potakait.com/amd-ryzen-5-5600x-processor"
    },
    "PC House": {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,700",
      "image": "https://www.pchouse.com.bd/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "In Stock",
      "source": "PC House",
      "url": "https://www.pchouse.com.bd/amd-ryzen-5-5600x-processor"
    },
    "Skyland": {
      "name": "AMD Ryzen 5 5600X Processor",
      "price": "৳ 17,500",
      "image": "https://www.skyland.com.bd/image/cache/catalog/processor/amd/5600x/5600x-500x500.jpg",
      "availability": "In Stock",
      "source": "Skyland",
      "url": "https://www.skyland.com.bd/amd-ryzen-5-5600x-processor"
    }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Supported Retailers
            </h3>
            <ul className="space-y-2">
              {["Startech", "Techland", "UltraTech", "Potaka IT", "PC House", "Skyland"].map((retailer) => (
                <li key={retailer} className="flex items-center text-slate-600 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {retailer}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              Response Format
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              All endpoints return JSON responses with the following structure:
            </p>

            <div className="bg-slate-800 text-slate-200 rounded-md p-4 font-mono text-xs overflow-x-auto mb-4">
              <pre>{`{
  "products": [
    {
      "name": "Product Name",
      "price": "৳ 12,500",
      "image": "https://example.com/image.jpg",
      "availability": "In Stock",
      "source": "Retailer Name",
      "url": "https://retailer.com/product"
    },
    // More products...
  ]
}`}</pre>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm">
              For the components endpoint, products may also include a{" "}
              <code className="bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded text-blue-600 dark:text-blue-400">
                specs
              </code>{" "}
              object with additional details.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Bangladesh PC Parts API</p>
          <p className="text-sm text-slate-400">
            For educational purposes only. Not affiliated with any of the retailers.
          </p>
        </div>
      </footer>
    </div>
  )
}
