import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { IPGeolocationResponse, ResponseKeyValueArray } from "../extras/types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Backdrop, CircularProgress, IconButton } from "@mui/material";
import KeyValueComponent from "../components/KvComponent";

const IP_URL: string = `https://api.ipify.org?format=json`;
const GEOLOOKUP_URL: string = `https://json.geoiplookup.io`;

const sampleGeoResponse: IPGeolocationResponse = {
  ip: "103.176.70.125",
  isp: "Activline Telecom Pvt. Ltd.",
  org: "Anigh Telecom Private Limited",
  hostname: "103.176.70.125",
  latitude: 27.8976,
  longitude: 77.3841,
  postal_code: "",
  city: "Hodal",
  country_code: "IN",
  country_name: "India",
  continent_code: "AS",
  continent_name: "Asia",
  region: "Haryana",
  district: "Palwal",
  timezone_name: "Asia/Kolkata",
  connection_type: "Corporate",
  asn_number: 137651,
  asn_org: "Activline Telecom Pvt. Ltd.",
  asn: "AS137651 - Activline Telecom Pvt. Ltd.",
  currency_code: "INR",
  currency_name: "Indian Rupee",
  success: true,
  premium: false,
};

function YourIP(props: any) {
  const [ip, setIp] = useState<string>("");
  const [geoLocationData, setGeoLocationData] =
    useState<IPGeolocationResponse>();
  const [geoDataSet, setGeoDataSet] = useState<[string, any][] | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleOpen();
    getIPAddress();
    //sampleDataBinding();
    return () => {};
  }, []);

  function sampleDataBinding() {
    const keyValueArray: [string, any][] = Object.entries(sampleGeoResponse);
    setGeoDataSet(keyValueArray);
  }

  function getIPAddress(): any {
    axios.get(IP_URL).then(
      (result) => {
        console.log(
          "Data [IP Address] fetched successfully : " +
            JSON.stringify(result.data)
        );
        console.log("IP Address : " + result.data.ip);
        setIp(result.data.ip);
        getIPToGeoloacation(result.data.ip);
      },
      (error) => {
        console.log("Error Occured while fetching result : " + error);
      }
    );
  }

  const backdrop = (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div className="flex flex-col items-center">
          <CircularProgress color="inherit" />
          <h1 className="font-extrabold m-2 text-white text-xl">
            Communicating with server...
          </h1>
        </div>
      </Backdrop>
    </React.Fragment>
  );

  function copyColor(): any {
    navigator.clipboard
      .writeText(ip)
      .then(() => {
        alert("IP Address Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  }

  function getIPToGeoloacation(ipAddress: string): any {
    axios.get<IPGeolocationResponse>(GEOLOOKUP_URL + `/${ipAddress}`).then(
      (result) => {
        console.log(
          "Data [GeoLookup] fetched successfully : " +
            JSON.stringify(result.data)
        );
        setGeoLocationData(result.data);
        persistIPAndGeoLocationData(ip, result.data);
        const keyValueArray: [string, any][] = Object.entries(result.data);
        setGeoDataSet(keyValueArray);
        handleClose();
      },
      (error) => {
        console.log("Error Occured while fetching result : " + error);
      }
    );
  }

  function persistIPAndGeoLocationData(
    ipAdderss: string,
    geoData: IPGeolocationResponse
  ): void {
    const arr = {
      ip: ipAdderss,
      geoLocationData: JSON.stringify(geoData),
    };
    const savedIP = localStorage.getItem(ipAdderss);
    if (savedIP === null) {
      localStorage.setItem(ipAdderss, JSON.stringify(arr));
      console.log("Persisted new IP Entry");
    } else {
      console.log("persistIPAndGeoLocationData Skipped");
      console.log("IP & GeoLocation data with this address is already present");
    }
  }

  function fetchIPAndGeoLocationData(): void {}

  return (
    <div className="flex flex-col items-center m-10 z-20">
      {backdrop}
      <div className="w-fit flex items-center justify-between border border-gray-400 p-4 shadow-lg">
        <h3 className="text-sm md:text-lg font-mono font-bold">
          Your IP Address is{" "}
        </h3>
        <h1 className="ml-5 mr-5 border border-green-400 p-3 font-extrabold text-lg">
          {ip}
        </h1>
        <IconButton onClick={copyColor}>
          <ContentCopyIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="mt-10 w-fit flex flex-col items-center justify-between border border-gray-400 p-4 shadow-lg">
        {geoDataSet?.map((keyValuePair, index) => (
          <KeyValueComponent key={index} keyValuePair={keyValuePair} />
        ))}
      </div>
    </div>
  );
}

export default YourIP;
