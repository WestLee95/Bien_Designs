import * as React from "react";

function ProductDetail() {
  return (
    <header className="flex flex-col px-20 pt-7 pb-12 bg-purple-200 max-md:px-5">
      <div className="flex gap-5 justify-between items-start mx-5 text-4xl text-center text-black whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ec2f79503a7810b5dfb2b623f27d70df762c47e2c6afdd3a182f44d50d9bda?apiKey=0ee51c7617ee4668b974c3177e5239de&"className="self-stretch w-20 aspect-[1.45]" />
        <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
          <div className="flex-auto">ACCESSORIES</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a11899daba9467f0cb58a637efabaddca58433684d3ff77286caabc4a157013?apiKey=0ee51c7617ee4668b974c3177e5239de&" className="aspect-[3.57] w-[88px]" />
      </div>
      <div className="py-12 pr-16 mt-5 bg-white rounded-xl shadow-2xl max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7cb2f1c9c3ed1fad556e0293548368a39ee94889c0c30c9a31dccf5ec40e1d6?apiKey=0ee51c7617ee4668b974c3177e5239de&"className="mt-3.5 w-full aspect-[1.16] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-6 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-3 max-w-full text-black w-[248px] max-md:ml-2.5">
                <div className="text-2xl text-center">Men’s Shoes</div>
                <div className="mt-7 text-7xl max-md:text-4xl"> Chuck 70 <br /> Classic</div>
                <div className="mt-9 text-3xl text-center">$180</div>
                <div className="mt-4 text-base"> The best-ever gets a seasonal makeover with premium canvas in archival color. </div>
              </div>
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cbef8330cb22ca5435501306bb54b58e1cf02aa0e10b77d2d877c9c23a2cb4f?apiKey=0ee51c7617ee4668b974c3177e5239de&"className="w-full aspect-[3.7] max-md:max-w-full" />
              <div className="mt-1 text-xl text-zinc-400 max-md:max-w-full"> Select Size</div>
              <div className="flex gap-4 justify-between mt-2 text-lg max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 justify-between px-9 py-2.5 text-black bg-white rounded shadow-sm max-md:px-5">
                  <div>US 8</div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84a6e1bc32cf2e73ff48f0b269097d06cef8c22d5020f3ea743251f1d224c2f3?apiKey=0ee51c7617ee4668b974c3177e5239de&" className="my-auto aspect-[2.27] w-[18px]" />
                </div>
                <div className="flex gap-1.5 justify-between px-7 py-2.5 text-white bg-black rounded shadow-sm max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58ce529aa4ce2c744c1e701c11956174d28ecb377315945f65fcabca8a661e5c?apiKey=0ee51c7617ee4668b974c3177e5239de&" className="self-start aspect-[1.35] fill-white w-[27px]" />
                  <div className="flex-auto">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3230626ed3b412c9bbe306da9e104096be9eb7ee20fd9b30900187a6debe7dc8?apiKey=0ee51c7617ee4668b974c3177e5239de&" className="self-center max-w-full aspect-[9.09] w-[540px]" />
    </header>
  );
}
export default ProductDetail;
