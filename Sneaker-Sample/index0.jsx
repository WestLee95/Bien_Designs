import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col px-20 pt-7 pb-12 bg-purple-200 max-md:px-5">
      <div className="flex gap-5 justify-between items-start mx-5 text-4xl text-center text-black whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="self-stretch w-20 aspect-[1.45]"
        />
        <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap max-md:max-w-full">
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
          <div className="flex-auto">ACCESSORIES</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a11899daba9467f0cb58a637efabaddca58433684d3ff77286caabc4a157013?"
          className="aspect-[3.57] w-[88px]"
        />
      </div>
      <div className="pr-16 pb-12 mt-5 bg-white rounded-xl shadow-2xl max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="mt-0 w-full aspect-[1.11] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-20 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-3 max-w-full text-black w-[248px] max-md:ml-2.5">
                <div className="text-2xl text-center">Men’s Shoes</div>
                <div className="mt-7 text-7xl max-md:text-4xl">
                  Chuck 70
                  <br />
                  Classic
                </div>
                <div className="mt-9 text-3xl text-center">$180</div>
                <div className="mt-4 text-base">
                  The best-ever gets a seasonal makeover with premium canvas in
                  archival color.
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[3.7] max-md:max-w-full"
              />
              <div className="mt-1 text-xl text-zinc-400 max-md:max-w-full">
                Select Size
              </div>
              <div className="flex gap-4 justify-between mt-2 text-lg max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 justify-between px-9 py-2.5 text-black bg-white rounded shadow-sm max-md:px-5">
                  <div>US 8</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c7edc0f50ec9a79c637d1f23bbda99aa3967912c8b197b9e8e12564bdf450e4?"
                    className="my-auto aspect-[2.27] w-[18px]"
                  />
                </div>
                <div className="flex gap-1.5 justify-between px-7 py-2.5 text-white bg-black rounded shadow-sm max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/afa6f9c5ee7e379952111f9fe2fa472ef92570fd77d6d84f00204135d92167ab?"
                    className="self-start aspect-[1.35] fill-white w-[27px]"
                  />
                  <div className="flex-auto">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-center px-16 mt-3 max-w-full text-xl font-bold text-white whitespace-nowrap w-[540px] max-md:px-5">
        <div className="flex flex-col justify-center pr-16 max-w-full bg-black shadow-sm rounded-[209.302px] w-[218px] max-md:pr-5">
          <div className="justify-center px-7 py-3 bg-black shadow-sm rounded-[405.315px] max-md:pl-5 max-md:mr-1.5">
            Next Shoe
          </div>
        </div>
      </div>
    </div>
  );
}

