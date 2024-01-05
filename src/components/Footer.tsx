import LogoImage from "../assets/images/ip.png";

function Footer(props: any) {
  function footerLinkAction(): void {
    window.open(
      "https://www.linkedin.com/in/gunjan-sharma-a74332251/",
      "_blank"
    );
  }

  function openLink(): void {
    window.open("https://en.wikipedia.org/wiki/Web_colors", "_blank");
  }

  function heading(heading: string): JSX.Element {
    return (
      <div onClick={openLink}>
        <h4 className="text-white text-sm text-centre font-bold hover:cursor-pointer">
          {heading}
        </h4>
      </div>
    );
  }

  return (
    <footer className="w-full">
      <div className="h-40 md:h-44 w-full mt-24 flex flex-col items-center justify-between bg-black">
        <div className="w-full m-5 flex items-center justify-center">
          <img alt="" src={LogoImage} className="w-7 h-7" />
          <h1 className="text-center ml-4 text-white font-sans text-lg font-bold">
            My IP Address
          </h1>
        </div>

        {/* <div className="w-100%">
          <div className="p-5 container grid grid-cols-3 md:grid-cols-4 gap-2 w-full">
            {heading("Sketch Picker")}
            {heading("Alpha Picker")}
            {heading("Block Picker")}
            {heading("Chrome Picker")}

            {heading("Circle Picker")}
            {heading("Compact Picker")}
            {heading("Github Picker")}
            {heading("Hue Picker")}

            {heading("Material Picker")}
            {heading("Twitter Picker")}
            {heading("Photoshop Picker")}
            {heading("Swatches Picker")} 
          </div>
        </div> */}

        <div className="m-4">
          <h5 className="text-center text-white font-sans text-xs font-bold">
            @Copyright 2024-2030
          </h5>
          <h5
            onClick={footerLinkAction}
            className="text-center hover:cursor-pointer m-1 text-white font-sans text-xs font-bold"
          >
            Designed & Developed By Gunjan Sharma
          </h5>
          <h5 className="xs:mb-5 text-center text-white font-sans text-xs font-bold">
            Made With ❤ In India
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
