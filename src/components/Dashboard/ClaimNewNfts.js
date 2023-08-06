import React, {useEffect, useRef, useState} from 'react'
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";
const apiKey = import.meta.env.API_KEY;
console.log(apiKey); 

// load google map api js

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

const ClaimNewNfts = () => {
  const searchInput = useRef(null);
  const [address, setAddress] = useState({});

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = "Getting your location...";
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
        searchInput.current.value = _address.plain();
      });
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  return (
    <>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Claim New Address NFTs</h3>
        <p>
          You can select up to five addresses below to create an Address NFT
          bundle.
        </p>
        <div className="claim-content-wrapper">
          <div className="claim-content-items d-flex align-items-center gap-3 my-4">
            <div className="claim-content-item d-flex align-items-center gap-2">
              <span>1</span>
              <p>Select Addresses</p>
            </div>
            <div className="claim-content-item d-flex align-items-center gap-2">
              <span>2</span>
              <p>Confirm Details</p>
            </div>
          </div>
          <div className="account-input-fluid-item">
            {/* <InputClaimNFTs/> */}
            <input
              ref={searchInput}
              type="text"
              placeholder="Search location...."
            />
            {/* <input type="" placeholder="Enter a real-world address to mint as an NFT"/> */}
          </div>
          <button
            className="save-change-btn custom-btn"
            onClick={findMyLocation}
            type="submit"
          >
            Next
          </button>
{/* 
          <div className="address">
            <p>
              City: <span>{address.city}</span>
            </p>
            <p>
              State: <span>{address.state}</span>
            </p>
            <p>
              Zip: <span>{address.zip}</span>
            </p>
            <p>
              Country: <span>{address.country}</span>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ClaimNewNfts;
