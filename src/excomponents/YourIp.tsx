import axios from "axios";
import { useEffect, useState } from "react";
import { IPGeolocationResponse } from "../extras/types";
const IP_URL: string = `https://api.ipify.org?format=json`;
const GEOLOOKUP_URL: string = `https://json.geoiplookup.io`;

function YourIP(props: any) {
  const [ip, setIp] = useState<string>("");
  const [geoLocationData, setGeoLocationData] =
    useState<IPGeolocationResponse>();

  useEffect(() => {
    getIPAddress();
    return () => {};
  }, []);

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

  function getIPToGeoloacation(ipAddress: string): any {
    axios.get<IPGeolocationResponse>(GEOLOOKUP_URL + `/${ipAddress}`).then(
      (result) => {
        console.log(
          "Data [GeoLookup] fetched successfully : " +
            JSON.stringify(result.data)
        );
        setGeoLocationData(result.data);
        persistIPAndGeoLocationData(ip, result.data);
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
    <div>
      <h1>YourIP Component : {ip}</h1>
    </div>
  );
}

export default YourIP;
