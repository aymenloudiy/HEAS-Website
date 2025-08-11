function NewsContent() {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 mx-32 flex flex-col">
      <h2 className="font-bold mb-8 text-2xl">News</h2>
      <ul className="grid grid-cols-2 grid-rows-2 self-stretch grow">
        {/* TODO: The image itself should be background and on hover the div with pos absolute to pos relative should pop up with animation */}
        <li className="self-stretch w-full">
          <img
            src=""
            alt="The Power of Texture: How to Layer Materials Like a Designer"
          />
        </li>
        <li>
          <img
            src=""
            alt="Inside a HEAS Project: Before & After of a Toronto Townhome"
          />
        </li>
        <li>
          <img
            src=""
            alt="Choosing the Right White Paint: Our Studio’s Top Picks"
          />
        </li>
        <li>
          <img src="" alt="HEAS is Growing: Meet the New Members of Our Team" />
        </li>
      </ul>
    </div>
  );
}
export default NewsContent;
