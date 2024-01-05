import React, { useContext, useState } from "react";
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  ColorResult,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  EmailIcon,
  InstapaperIcon,
  LinkedinIcon,
  LivejournalIcon,
  PinterestIcon,
  WorkplaceIcon,
  WhatsappIcon,
  VKIcon,
  ViberIcon,
  TwitterIcon,
  TumblrIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import "../../src/index";
import SaveIcon from "@mui/icons-material/Save";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PickerCard from "../components/PickerCard";
import { Box, Button, Dialog, IconButton, Modal } from "@mui/material";
import UpMenu from "../components/UpMenu";
import "../css/index.css";
import "../index.css";
import { ColorContext } from "../extras/ColorContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000000",
  boxShadow: 24,
  p: 1,
};

function HomePage(props: any) {
  const [sketchColor, setSketchColor] = useState<any>("white");
  const [clickedPicker, setClickedPicker] = useState("");
  const [open, setOpen] = useState(false);
  const { color, setColor } = useContext(ColorContext);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSketchColor("white");
  };

  function handleColorChange(color: any): void {
    setSketchColor(color);
  }

  function handleOpenPicker(picker: string): void {
    console.log(picker + " clicked [HomePage");
    setClickedPicker(picker);
    handleOpen();
  }

  function handleKnowMore(): any {}

  function handleCopyClick(): void {
    const copyable = {
      hex: sketchColor.hex,
      rgb: sketchColor.rgb,
      hsl: sketchColor.hsl,
    };
    console.log("copyable : " + JSON.stringify(copyable));
    navigator.clipboard
      .writeText(JSON.stringify(copyable))
      .then(() => {
        alert("Color Code Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  }

  function handleColorSave(): void {
    const randomIndex = Math.floor(Math.random() * 1000);
    localStorage.setItem(String(randomIndex), JSON.stringify(sketchColor));
    alert("Color Saved Successfully..");
    console.log("Color Saved Successfully");
  }

  function showPicker(): JSX.Element {
    switch (clickedPicker) {
      case "Sketch": {
        return (
          <SketchPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Alpha": {
        return <AlphaPicker color={sketchColor} onChange={handleColorChange} />;
      }

      case "Block": {
        return <BlockPicker color={sketchColor} onChange={handleColorChange} />;
      }

      case "Chrome": {
        return (
          <ChromePicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Circle": {
        return (
          <CirclePicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Compact": {
        return (
          <CompactPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Github": {
        return (
          <GithubPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Hue": {
        return <HuePicker color={sketchColor} onChange={handleColorChange} />;
      }

      case "Material": {
        return (
          <MaterialPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Twitter": {
        return (
          <TwitterPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Photoshop": {
        return (
          <PhotoshopPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      case "Swatches": {
        return (
          <SwatchesPicker color={sketchColor} onChange={handleColorChange} />
        );
      }

      default:
        return (
          <SketchPicker color={sketchColor} onChange={handleColorChange} />
        );
    }
  }

  const pickerDialog = (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center flex-col">
            {showPicker()}
            <div className="m-5 w-full flex  justify-around">
              <Button onClick={handleCopyClick} variant="outlined">
                Copy
              </Button>
              <Button onClick={handleColorSave} variant="contained">
                Save
              </Button>
            </div>
            <div className="p-2 container mx-auto grid grid-cols-5 md:grid-cols-7 md:gap-3 gap-2">
              <FacebookShareButton url={JSON.stringify(sketchColor)}>
                <FacebookIcon round size={30} />
              </FacebookShareButton>

              <EmailShareButton url={JSON.stringify(sketchColor)}>
                <EmailIcon round size={30} />
              </EmailShareButton>

              <InstapaperShareButton url={JSON.stringify(sketchColor)}>
                <InstapaperIcon round size={30} />
              </InstapaperShareButton>

              <LinkedinShareButton url={JSON.stringify(sketchColor)}>
                <LinkedinIcon round size={30} />
              </LinkedinShareButton>

              <LivejournalShareButton url={JSON.stringify(sketchColor)}>
                <LivejournalIcon round size={30} />
              </LivejournalShareButton>

              <PinterestShareButton
                url={JSON.stringify(sketchColor)}
                media={""}
              >
                <PinterestIcon round size={30} />
              </PinterestShareButton>

              <WorkplaceShareButton url={JSON.stringify(sketchColor)}>
                <WorkplaceIcon round size={30} />
              </WorkplaceShareButton>

              <WhatsappShareButton url={JSON.stringify(sketchColor)}>
                <WhatsappIcon round size={30} />
              </WhatsappShareButton>

              <VKShareButton url={JSON.stringify(sketchColor)}>
                <VKIcon round size={30} />
              </VKShareButton>

              <ViberShareButton url={JSON.stringify(sketchColor)}>
                <ViberIcon round size={30} />
              </ViberShareButton>

              <TwitterShareButton url={JSON.stringify(sketchColor)}>
                <TwitterIcon round size={30} />
              </TwitterShareButton>

              <TumblrShareButton url={JSON.stringify(sketchColor)}>
                <TumblrIcon round size={30} />
              </TumblrShareButton>

              <TelegramShareButton url={JSON.stringify(sketchColor)}>
                <TelegramIcon round size={30} />
              </TelegramShareButton>

              <RedditShareButton url={JSON.stringify(sketchColor)}>
                <RedditIcon round size={30} />
              </RedditShareButton>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: sketchColor.hex }}
    >
      <UpMenu className="sticky top-0" />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pickerDialog}
        <PickerCard
          heading="Sketch Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"1"}
        />
        <PickerCard
          heading="Alpha Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"12"}
        />
        <PickerCard
          heading="Block Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"13"}
        />
        <PickerCard
          heading="Chrome Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"14"}
        />

        <PickerCard
          heading="Circle Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"15"}
        />
        <PickerCard
          heading="Compact Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"16"}
        />
        <PickerCard
          heading="Github Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"17"}
        />
        <PickerCard
          heading="Hue Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"18"}
        />

        <PickerCard
          heading="Material Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"19"}
        />
        <PickerCard
          heading="Twitter Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"20"}
        />
        <PickerCard
          heading="Photoshop Pikcer"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"21"}
        />
        <PickerCard
          heading="Swatches Picker"
          description=""
          borderColor={color}
          openClick={handleOpenPicker}
          knowClick={handleKnowMore}
          key={"22"}
        />
      </div>
    </div>
  );
}

export default HomePage;
